from flask import Blueprint, jsonify, request, session
from flask_login import login_required
from app.models import Route, db
from app.forms import CreateRouteForm, EditRouteForm

route_routes = Blueprint('routes', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@route_routes.route('/')
@login_required
def get_all_routes():
    all_routes = Route.query.all()
    return {'routes': [route.to_dict() for route in all_routes]}

@route_routes.route('/<int:id>')
@login_required
def get_a_route(id):
    one_route = Route.query.get(id)
    return one_route.to_dict()

@route_routes.route('/', methods=['POST'])
@login_required
def add_route():
    form = CreateRouteForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        route = Route (
            user_id=form.data['user_id'],
            name=form.data['name'],
            description=form.data['description']
        )
        db.session.add(route)
        db.session.commit()

        return route.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@route_routes.route('/<int:id>/edit', methods=['PATCH'])
# @login_required
def edit_route(id):
    one_route = Route.query.get(id)
    form = EditRouteForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        one_route.user_id=form.data['user_id'],
        one_route.name=form.data['name'],
        one_route.description=form.data['description'],
        db.session.commit()
        return one_route.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@route_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_route(id):
    one_route = Route.query.get(id)
    db.session.delete(one_route)
    db.session.commit()
    return {"message": "Successful deletion"}
