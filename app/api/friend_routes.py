from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import User, Friend, db

friend_routes = Blueprint('friends', __name__)

@friend_routes.route('/<int:id>')
# @login_required
def one_friend(id):
    friends_received = Friend.query.filter_by(user_id=id)
    friends_added = Friend.query.filter_by(friend_id=id)

    friends_received_list = []
    friends_added_list = []

    for friend_r in friends_received:
        a_friend = User.query.get(friend_r.user_id)
        friends_received_list.append(a_friend.to_dict())

    for friend_a in friends_added:
        another_friend = User.query.get(friend_a.friend_id)
        friends_added_list.append(another_friend.to_dict())

    return {'friends_added': friends_added_list, 'friends_received': friends_received_list}

@friend_routes.route('/<int:id>/add', methods=['POST'])
# @login_required
def add_friend(id):

    friend_request = Friend(user_id=current_user.id, friend_id=id)

    db.session.add(friend_request)
    db.session.commit()

    return one_friend(id)

@friend_routes.route('/<int:id>/delete', methods=['DELETE'])
# @login_required
def remove_friend(id):

    specific_friend = Friend.query.filter_by(user_id=current_user.id, friend_id=id).first()

    db.session.delete(specific_friend)
    db.session.commit()

    return one_friend(id)

@friend_routes.route('/people')
# @login_required
def all_users_to_friend():
    all_people = User.query.all()
    return {'people': [user.to_dict() for user in all_people]}
