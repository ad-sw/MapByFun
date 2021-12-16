from wtforms import StringField, IntegerField
from flask_wtf import FlaskForm
from wtforms.validators import DataRequired, ValidationError


def description_validator(form, field):
    description = field.data
    if len(description) > 2000:
        raise ValidationError('Please enter a description shorter than 2000 characters.')

class CreateCommentForm(FlaskForm):
    user_id = IntegerField('user_id', validators=[DataRequired()])
    route_id = IntegerField('route_id', validators=[DataRequired()])
    content = StringField('content', validators=[DataRequired(), description_validator])

class EditCommentForm(FlaskForm):
    content = StringField('content', validators=[DataRequired()])
