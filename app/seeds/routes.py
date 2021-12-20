from app.models import db, Route


# Adds a demo user, you can add other users here if you want
def seed_routes():
    route1 = Route(
        user_id= 1,
        name='Example 1',
        description='here is a map description',
        activity='Bike ride',
    )
    route2 = Route(
        user_id= 1,
        name='Example 2',
        description='here is a map description',
        activity='Walk',
    )
    route3 = Route(
        user_id= 1,
        name='Example 3',
        description='here is a map description',
        activity='Social',
    )
    route4 = Route(
        user_id= 1,
        name='Example 4',
        description='here is a map description',
        activity='Bike ride',
    )
    route5 = Route(
        user_id= 1,
        name='Example 5',
        description='here is a map description',
        activity='Walk',
    )
    route6 = Route(
        user_id= 1,
        name='Example 6',
        description='here is a map description',
        activity='Social',
    )
    route7 = Route(
        user_id= 1,
        name='Example 7',
        description='here is a map description',
        activity='Bike ride',
    )
    route8 = Route(
        user_id= 1,
        name='Example 8',
        description='here is a map description',
        activity='Walk',
    )
    route9 = Route(
        user_id= 1,
        name='Example 9',
        description='here is a map description',
        activity='Social',
    )

    db.session.add(route1)
    db.session.add(route2)
    db.session.add(route3)
    db.session.add(route4)
    db.session.add(route5)
    db.session.add(route6)
    db.session.add(route7)
    db.session.add(route8)
    db.session.add(route9)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_routes():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
