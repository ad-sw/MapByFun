from app.models import db, Friend


# Adds a demo user, you can add other users here if you want
def seed_friends():
    friend1 = Friend(
        user_id= 1,
        friend_id= 2,
    )
    friend2 = Friend(
        user_id= 2,
        friend_id= 1,
    )
    friend3 = Friend(
        user_id= 3,
        friend_id= 2,
    )
    friend4 = Friend(
        user_id= 3,
        friend_id= 1,
    )

    db.session.add(friend1)
    db.session.add(friend2)
    db.session.add(friend3)
    db.session.add(friend4)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_friends():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
