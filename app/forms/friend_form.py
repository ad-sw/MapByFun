from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.validators import DataRequired


class CreateFriendForm(FlaskForm):
    user_id = IntegerField('user_id', validators=[DataRequired()])
    friend_id = IntegerField('friend_id', validators=[DataRequired()])
