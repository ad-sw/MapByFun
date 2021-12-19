from .db import db
from sqlalchemy.sql import func

class Route(db.Model):
    __tablename__ = 'routes'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    name = db.Column(db.String(80), nullable=False)
    description = db.Column(db.Text, nullable=False)
    activity = db.Column(db.String, nullable=True)
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), server_default=func.now())

    users = db.relationship('User', back_populates='routes')
    comments = db.relationship('Comment', back_populates='routes', cascade="all, delete")

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'name': self.name,
            'description': self.description,
            'activity': self.activity,
            'created_at': self.created_at,
        }
