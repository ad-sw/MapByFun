from app.models import db, Comment


# Adds a demo user, you can add other users here if you want
def seed_comments():
    comment1 = Comment(
        user_id= 1,
        route_id= 1,
        content='Example content for a comment',
    )
    comment2 = Comment(
        user_id= 1,
        route_id= 2,
        content='Example content for a comment',
    )
    comment3 = Comment(
        user_id= 1,
        route_id= 3,
        content='Example content for a comment',
    )

    db.session.add(comment1)
    db.session.add(comment2)
    db.session.add(comment3)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_comments():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
