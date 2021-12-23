from flask import Blueprint, jsonify, request, session
from flask_login import login_required
from app.models import User, db, Route
from app.forms import CreateFriendForm
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

# def helper_function(user_id, friend_array):
#     user = User.query.get(id)
#     test = user.to_dict()['friends'].includes(User.id)
#     return test

# @user_routes.route('/<int:user_id>/people')
# @login_required
# def all_user_nonfriends(user_id):
#     user = User.query.get(id)
#     all_user_nonfriends = User.query.filter(User.id not in user.to_dict()['friends']).all()
#     return all_user_nonfriends.to_dict()

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

@user_routes.route('/friends/add', methods=['POST'])
@login_required
def add_friend():
    form = CreateFriendForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        user_id = form.data['user_id']
        friend_id = form.data['friend_id']
        user = User.query.get(user_id)
        friend_added = User.query.get(friend_id)
        user.user_friends.append(friend_added)
        friend_added.user_friends.append(user)
        db.session.commit()
        return user.to_dict()['friends']

@user_routes.route('/<int:user_id>/friends/<int:friend_id>/delete', methods=['DELETE'])
@login_required
def remove_friend(user_id, friend_id):
    user = User.query.get(user_id)
    friend = User.query.get(friend_id)
    friend.user_friends.remove(user)
    user.user_friends.remove(friend)
    db.session.commit()
    return {'user_id': user_id, 'friend_id': friend_id} #change this? return to
