from app.models import db, Route


# Adds a demo user, you can add other users here if you want
def seed_routes():
    route1 = Route(
        user_id= 1,
        name='Example 1',
        description='here is a map description',
    )
    route2 = Route(
        user_id= 1,
        name='Example 2',
        description='here is a map description',
    )
    route3 = Route(
        user_id= 1,
        name='Example 3',
        description='here is a map description',
    )

    db.session.add(route1)
    db.session.add(route2)
    db.session.add(route3)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_routes():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
