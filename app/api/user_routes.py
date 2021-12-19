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

@user_routes.route('/<int:id>/routes')
@login_required
def user_route_dashboard(id):
    user = User.query.get(id)
    return user.to_dict_routes()

@user_routes.route('/<int:id>/friends')
# @login_required
def all_user_friends(id):
    user = User.query.get(id)
    return user.to_dict()['friends']

@user_routes.route('/friends/add', methods=['POST'])
# @login_required
def add_friend():
    form = CreateFriendForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        user_id = form.data['user_id']
        friend_id = form.data['friend_id']
        user = User.query.get(user_id)
        friend_added = User.query.get(friend_id)
        friend_added.friend(user)
        db.session.commit()
        return user.to_dict()['friends']

@user_routes.route('/<int:user_id>/friends/<int:friend_id>/remove', methods=['DELETE'])
# @login_required
def remove_friend(user_id, friend_id):
    user = User.query.get(user_id)
    unfriend_friend = User.query.get(friend_id)
    unfriend_friend.unfriend(user)
    db.session.commit()
    return {
        'user_id': user_id,
        'unfriended_id': friend_id
    }
