from .db import db
from sqlalchemy.sql import func

class Guide(db.Model):
    __tablename__ = 'guides'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    route_id = db.Column(db.Integer, db.ForeignKey('routes.id'), nullable=False)
    duration = db.Column(db.Float, nullable=False)
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), server_default=func.now())

    users = db.relationship('User', back_populates='guides')
    routes = db.relationship('Route', back_populates='guides')

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'route_id': self.route_id,
            'duration': self.duration
        }
