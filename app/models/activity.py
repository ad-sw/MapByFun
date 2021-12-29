from .db import db

class Activity(db.Model):
    __tablename__ = 'activities'

    id = db.Column(db.Integer, primary_key = True)
    activity = db.Column(db.String, nullable = False)

    routes = db.relationship('Route', back_populates='activities')

    def to_dict(self):
        return {
            'id': self.id,
            'activity': self.activity
        }
