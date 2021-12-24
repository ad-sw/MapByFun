from flask import Blueprint, jsonify, request, session
from flask_login import login_required
from app.models import User, db, Route
from app.models.user import friends
user_routes = Blueprint('users', __name__)

@user_routes.route('/')
@login_required
def all_users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}

@user_routes.route('/<int:id>')
@login_required
def user_page(id):
    user = User.query.get(id)
    return user.to_dict()

@user_routes.route('/<int:user_id>/friends')
@login_required
def all_user_friends(user_id):
    user = User.query.get(user_id)
    return {'users': [friend.to_dict() for friend in user.user_friends]}

@user_routes.route('/<int:id>/people')
@login_required
def all_user_nonfriends(id):
    users = User.query.all()
    print(users, '11111111111111111111users')
    current_user = User.query.get(id)
    print(current_user, '11111111111111111111111user')
    all_users = set(users)
    all_user_friends = set(current_user.user_friends)
    non_friend_users = all_users.difference(all_user_friends)
    # user_friends = User.query.get(id).user_friends
    # all_user_nonfriends = User.query.filter(user_friends not in users)
    # # print(user, '111111111111111111111111111111111111this is the user')
    # # print(User, '11111111111111111111111111111111111111111111111111111111this is user id')
    # # print(user.to_dict(), '11111111111111111111111111okayyyyyyy')
    # print(User[1], '11111111111111111111111111111111111111test')
    # all_user_nonfriends = User.query.filter(User[1] not in ______ ).all()
    # # print(all_user_nonfriends, '1111111111111111111111111111111111111this is me trying')
    # return {'nonfriends': [user.to_dict() for user in all_user_nonfriends]}
    return {'nonfriends': [user.to_dict() for user in non_friend_users]}

@user_routes.route('/<int:user_id>/routes')
@login_required
def get_all_user_routes(user_id):
    all_user_routes = Route.query.filter(Route.user_id == user_id).all()
    return {'routes': [route.to_dict() for route in all_user_routes]}

@user_routes.route('/<int:user_id>/friends/<int:friend_id>/routes')
@login_required
def get_all_user_friend_routes(user_id, friend_id):
    all_friend_routes = Route.query.filter(Route.user_id == friend_id).all()
    return {'routes': [route.to_dict() for route in all_friend_routes]}

@user_routes.route('/<int:user_id>/friends/<int:friend_id>/add', methods=['POST'])
@login_required
def add_friend(user_id, friend_id):
    user = User.query.get(user_id)
    friend_added = User.query.get(friend_id)
    user.user_friends.append(friend_added)
    friend_added.user_friends.append(user)
    db.session.commit()
    return {'user_id': user_id, 'friend_id': friend_id}

@user_routes.route('/<int:user_id>/friends/<int:friend_id>/delete', methods=['DELETE'])
@login_required
def remove_friend(user_id, friend_id):
    user = User.query.get(user_id)
    friend = User.query.get(friend_id)
    friend.user_friends.remove(user)
    user.user_friends.remove(friend)
    db.session.commit()
    return {'user_id': user_id, 'friend_id': friend_id} #change this? return to
