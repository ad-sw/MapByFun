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
    comment4 = Comment(
        user_id= 1,
        route_id= 4,
        content='Example content for a comment',
    )
    comment5 = Comment(
        user_id= 1,
        route_id= 5,
        content='Example content for a comment',
    )
    comment6 = Comment(
        user_id= 1,
        route_id= 6,
        content='Example content for a comment',
    )
    comment7 = Comment(
        user_id= 1,
        route_id= 7,
        content='Example content for a comment',
    )
    comment8 = Comment(
        user_id= 1,
        route_id= 8,
        content='Example content for a comment',
    )
    comment9 = Comment(
        user_id= 1,
        route_id= 9,
        content='Example content for a comment',
    )

    db.session.add(comment1)
    db.session.add(comment2)
    db.session.add(comment3)
    db.session.add(comment4)
    db.session.add(comment5)
    db.session.add(comment6)
    db.session.add(comment7)
    db.session.add(comment8)
    db.session.add(comment9)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_comments():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
