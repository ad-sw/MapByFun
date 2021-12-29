from app.models import db, Route


# Adds a demo user, you can add other users here if you want
def seed_routes():
    route1 = Route(
        user_id= 1,
        name='Example 1',
        description='here is a map description',
        activity_id=1,
    )
    route2 = Route(
        user_id= 1,
        name='Example 2',
        description='here is a map description',
        activity_id=2,
    )
    route3 = Route(
        user_id= 1,
        name='Example 3',
        description='here is a map description',
        activity_id=3,
    )
    route4 = Route(
        user_id= 1,
        name='Example 4',
        description='here is a map description',
        activity_id=4,
    )
    route5 = Route(
        user_id= 2,
        name='Example 5',
        description='here is a map description',
        activity_id=5,
    )
    route6 = Route(
        user_id= 2,
        name='Example 6',
        description='here is a map description',
        activity_id=6,
    )
    route7 = Route(
        user_id= 2,
        name='Example 7',
        description='here is a map description',
        activity_id=7,
    )
    route8 = Route(
        user_id= 3,
        name='Example 8',
        description='here is a map description',
        activity_id=8,
    )
    route9 = Route(
        user_id= 3,
        name='Example 9',
        description='here is a map description',
        activity_id=1,
    )
    route10 = Route(
        user_id= 3,
        name='Example 10',
        description='here is a map description',
        activity_id=2,
    )
    route11 = Route(
        user_id= 4,
        name='Example 11',
        description='here is a map description',
        activity_id=3,
    )
    route12 = Route(
        user_id= 4,
        name='Example 12',
        description='here is a map description',
        activity_id=4,
    )
    route13 = Route(
        user_id= 4,
        name='Example 13',
        description='here is a map description',
        activity_id=5,
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
    db.session.add(route10)
    db.session.add(route11)
    db.session.add(route12)
    db.session.add(route13)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_routes():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
