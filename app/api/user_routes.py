from flask import Blueprint, jsonify, request, session
from flask_login import login_required
from app.models import User, db, Route
from app.models.user import friends
user_routes = Blueprint('users', __name__)

@user_routes.route('/')
def all_users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}

@user_routes.route('/<int:user_id>/search')
def all_User_users(user_id):
    users = User.query.all()
    user = {User.query.get(user_id)}
    # current_user = set(user)
    print('000000000000000000000000000000000000000', user) #user 1
    all_users = set(users)
    print('111111111111111111111111111111111111111', all_users) #all users
    non_user_users = all_users.difference(user)
    print('222222222222222222222222222222222222222', non_user_users) #
    return {'users': [user.to_dict() for user in non_user_users]}

@user_routes.route('/<int:user_id>/search/<string:term>')
@login_required
def search_all_users(user_id, term):
    users = User.query.all()
    all_users = [user.to_dict() for user in users]
    # all_users.sort(key=lambda x: x.get('first_name'))
    filteredFirst = list(filter(lambda friend: term.lower() in friend['first_name'].lower(), all_users))
    filteredLast = list(filter(lambda friend: term.lower() in friend['last_name'].lower(), all_users))
    filtered = list(filteredFirst + filteredLast)
    seen = set()
    result = []
    for user in filtered:
        key = user['first_name']
        if key not in seen:
            result.append(user)
            seen.add(key)
    return {'users': [result]}

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

@user_routes.route('/<int:user_id>/find/<string:term>')
def search_all_user_friends(user_id, term):
    user = User.query.get(user_id)
    user_friends = [friend.to_dict() for friend in user.user_friends]
    user_friends.sort(key=lambda x: x.get('first_name'))
    filteredFirst = list(filter(lambda friend: term.lower() in friend['first_name'].lower(), user_friends))
    filteredLast = list(filter(lambda friend: term.lower() in friend['last_name'].lower(), user_friends))
    filtered = list(filteredFirst + filteredLast)
    seen = set()
    result = []
    for user in filtered:
        key = user['first_name']
        if key not in seen:
            result.append(user)
            seen.add(key)
    return {'users': [result]}

@user_routes.route('/<int:id>/people')
@login_required
def all_user_nonfriends(id):
    users = User.query.all()
    current_user = User.query.get(id)
    all_users = set(users)
    all_user_friends = set(current_user.user_friends)
    non_friend_users = all_users.difference(all_user_friends)
    return {'nonfriends': [user.to_dict() for user in non_friend_users]}

@user_routes.route('/<int:user_id>/discover/<string:term>')
def search_all_user_nonfriends(user_id, term):
    users = User.query.all()
    current_user = User.query.get(user_id)
    all_users = set(users)
    all_user_friends = set(current_user.user_friends)
    non_friend_users = all_users.difference(all_user_friends)

    user_non_friends = [user.to_dict() for user in non_friend_users]
    user_non_friends.sort(key=lambda x: x.get('first_name'))

    filteredFirst = list(filter(lambda non_friend: term.lower() in non_friend['first_name'].lower(), user_non_friends))
    filteredLast = list(filter(lambda non_friend: term.lower() in non_friend['last_name'].lower(), user_non_friends))
    filtered = list(filteredFirst + filteredLast)
    seen = set()
    result = []
    for user in filtered:
        key = user['first_name']
        if key not in seen:
            result.append(user)
            seen.add(key)
    return {'nonfriends': [result]}

@user_routes.route('/<int:user_id>/routes')
@login_required
def get_all_user_routes(user_id):
    all_user_routes = Route.query.filter(Route.user_id == user_id).all()
    return {'routes': [route.to_dict() for route in all_user_routes]}

@user_routes.route('/<int:user_id>/explore/<string:term>')
def search_all_user_routes(user_id, term):
    if term:
        all_user_search_routes = Route.query.filter((Route.user_id == user_id) & Route.name.ilike("%" + term + "%"))
    return {'routes': [route.to_dict() for route in all_user_search_routes]}

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
    friend = User.query.get(friend_id)
    db.session.commit()
    return friend.to_dict()

@user_routes.route('/<int:user_id>/friends/<int:friend_id>/delete', methods=['DELETE'])
@login_required
def remove_friend(user_id, friend_id):
    user = User.query.get(user_id)
    friend = User.query.get(friend_id)
    friend.user_friends.remove(user)
    user.user_friends.remove(friend)
    db.session.commit()
    return {'user_id': user_id, 'friend_id': friend_id}
