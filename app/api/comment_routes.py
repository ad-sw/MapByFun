from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Comment, db
from app.forms import CreateCommentForm, EditCommentForm

comment_routes = Blueprint('comments', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@comment_routes.route('/<int:route_id>')
@login_required
def get_all_route_comments(route_id):
    all_route_comments = Comment.query.filter(Comment.route_id == route_id).all()
    return {'comments': [comment.to_dict() for comment in all_route_comments]}

@comment_routes.route('/', methods=['POST'])
@login_required
def create_comment():
   form = CreateCommentForm()
   form['csrf_token'].data = request.cookies['csrf_token']
   if form.validate_on_submit():
      comment = Comment(
         user_id=form.data['user_id'],
         route_id=form.data['route_id'],
         content=form.data['content'],
      )
      db.session.add(comment)
      db.session.commit()
      return { "comment": comment.to_dict() }
   return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@comment_routes.route('/<int:id>/edit', methods=['PATCH'])
@login_required
def edit_comment(id):
   comment = Comment.query.get(id)
   form = EditCommentForm()
   form['csrf_token'].data = request.cookies['csrf_token']
   if form.validate_on_submit():
      comment.content=form.data['content']
      db.session.commit()
      return comment.to_dict()
   return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@comment_routes.route('/<int:id>/delete', methods=['DELETE'])
@login_required
def delete_comment(id):
    one_comment = Comment.query.get(id)
    db.session.delete(one_comment)
    db.session.commit()
    return {"message": "Successful deletion"}
