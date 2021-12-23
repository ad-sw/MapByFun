from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from sqlalchemy.sql import func

friends = db.Table(
    "friends",
    db.Column("user_id", db.Integer, db.ForeignKey("users.id")),
    db.Column("friend_id", db.Integer, db.ForeignKey("users.id"))
)

class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(40), nullable=False, unique=True)
    last_name = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), server_default=func.now())

    routes = db.relationship("Route", back_populates="users")
    comments = db.relationship("Comment", back_populates="users")

    user_friends = db.relationship(
        "User",
        secondary=friends,
        primaryjoin=(friends.c.user_id == id),
        secondaryjoin=(friends.c.friend_id == id),
        backref=db.backref("friends_list", lazy="dynamic"),
        lazy="dynamic"
    )


    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def add_friend(self, user):
        if user not in self.friends_list:
            self.friends_list.append(user)
            return self.to_dict

    def remove_friend(self, user):
        if user in self.friends_list:
            self.friends_list.remove(user)
            return self.to_dict()

    def to_dict(self):
        return {
            'id': self.id,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'email': self.email,
            'routes': {route.to_dict()['id']: route.to_dict() for route in self.routes},
            'friends': {user.to_dict_friends()['id']:user.to_dict_friends() for user in self.user_friends},
            'created_at': self.created_at,
        }

    def to_dict_friends(self):
            return {
                'id': self.id,
                'first_name': self.first_name,
                'last_name': self.last_name,
                'routes': {route.to_dict()['id']: route.to_dict() for route in self.routes},
            }
