from flask import Blueprint, jsonify, request, session
from flask_login import login_required
from app.models import User, db, Route
from app.models.user import friends
user_routes = Blueprint('users', __name__)

@user_routes.route('/')
# @login_required
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

@user_routes.route('/<int:user_id>/find/<string:term>')
def search_all_user_friends(user_id, term):
    user = User.query.get(user_id)

    user_friends = [friend.to_dict() for friend in user.user_friends]
    user_friends.sort(key=lambda x: x.get('first_name'))

    # def extract_positive(numbers):
    #     positive_numbers = []
    #     for number in numbers:
    #         if number > 0:  # Filtering condition
    #             positive_numbers.append(number)
    #     return positive_numbers

    # def filter_set(user_friends, term):
    #     def iterator_func(x):
    #         for v in x.values():
    #             if term in v:
    #                 return True
    #         return False
    #     return filter(iterator_func, user_friends)

    # filtered_records = list(filter_set(user_friends, term))
    # print(filtered_records, '1111111111111111111111111111111111111111111111111111111111111')
    # print(first_list + list(set(second_list) - set(first_list)))

    filteredFirst = list(filter(lambda friend: term.lower() in friend['first_name'].lower(), user_friends))
    filteredLast = list(filter(lambda friend: term.lower() in friend['last_name'].lower(), user_friends))
    filtered = list(filteredFirst + filteredLast)
    return {'users': [filtered]}

@user_routes.route('/<int:id>/people')
@login_required
def all_user_nonfriends(id):
    users = User.query.all()
    current_user = User.query.get(id)
    all_users = set(users)
    all_user_friends = set(current_user.user_friends)
    non_friend_users = all_users.difference(all_user_friends)
    return {'nonfriends': [user.to_dict() for user in non_friend_users]}

@user_routes.route('/<int:user_id>/routes')
@login_required
def get_all_user_routes(user_id):
    all_user_routes = Route.query.filter(Route.user_id == user_id).all()
    return {'routes': [route.to_dict() for route in all_user_routes]}

@user_routes.route('/<int:user_id>/search/<string:term>')
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
