from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Post, Comment, db
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

@comment_routes.route('/', methods=['POST'])
@login_required
def post_comment():
   form = CreateCommentForm()
   form['csrf_token'].data = request.cookies['csrf_token']
   if form.validate_on_submit():
      comment = Comment(
         user_id=form.data['user_id'],
         post_id=form.data['post_id'],
         content=form.data['content'],
      )
      db.session.add(comment)
      db.session.commit()

      return Comment.query.get(comment.id).to_dict()

   return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@comment_routes.route('/<int:comment_id>/edit', methods=['PUT'])
@login_required
def update_comment(id):
   comment = Comment.query.get(id)
   form = EditCommentForm()
   form['csrf_token'].data = request.cookies['csrf_token']
   if form.validate_on_submit():
      comment.content=form.data['content']
      db.session.commit()
      return comment.to_dict()

   return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@comment_routes.route('/<int:comment_id>/delete', methods=['DELETE'])
@login_required
def delete_comment(id):
    comment = Comment.query.get(id)
    db.session.delete(comment)
    db.session.commit()
    return {"message": "Successful deletion"}
