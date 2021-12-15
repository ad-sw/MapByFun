from app.models import db, Guide


# Adds a demo user, you can add other users here if you want
def seed_guides():
    guide1 = Guide(
        user_id= 1,
        route_id= 1,
        duration= 2.5,
    )
    guide2 = Guide(
        user_id= 1,
        route_id= 2,
        duration= 2.5,
    )
    guide3 = Guide(
        user_id= 1,
        route_id= 3,
        duration= 2.5,
    )

    db.session.add(guide1)
    db.session.add(guide2)
    db.session.add(guide3)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_guides():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
