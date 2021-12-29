from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextAreaField
from wtforms.validators import DataRequired, ValidationError
from app.models import Route


def description_validator(form, field):
    description = field.data
    if len(description) > 2000:
        raise ValidationError('Please enter a description shorter than 2000 characters.')

class CreateRouteForm(FlaskForm):
    user_id = IntegerField('user_id', validators=[DataRequired()])
    name = StringField('name', validators=[DataRequired()])
    description = TextAreaField('description', validators=[DataRequired(), description_validator])
    activity_id = IntegerField('activity_id', validators=[DataRequired()])

class EditRouteForm(FlaskForm):
    user_id = IntegerField('user_id', validators=[DataRequired()])
    name = StringField('name', validators=[DataRequired()])
    description = TextAreaField('description', validators=[DataRequired(), description_validator])
    activity_id = IntegerField('activity_id', validators=[DataRequired()])
