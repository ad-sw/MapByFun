from app.models import db, friends
from sqlalchemy import insert


# Adds a demo user, you can add other users here if you want
def seed_friends():
    friend1 = insert(friends).values(
        user_id= 1,
        friend_id= 2,
    )
    friend2 = insert(friends).values(
        user_id= 2,
        friend_id= 1,
    )
    friend3 = insert(friends).values(
        user_id= 3,
        friend_id= 2,
    )
    friend4 = insert(friends).values(
        user_id= 2,
        friend_id= 3,
    )
    friend5 = insert(friends).values(
        user_id= 1,
        friend_id= 3,
    )
    friend6 = insert(friends).values(
        user_id= 3,
        friend_id= 1,
    )

    db.session.execute(friend1)
    db.session.execute(friend2)
    db.session.execute(friend3)
    db.session.execute(friend4)
    db.session.execute(friend5)
    db.session.execute(friend6)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_friends():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
