from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        first_name='Demo',
        last_name='Demo',
        email='demo@aa.io',
        password='password'
    )
    sydney = User(
        first_name='Sydney',
        last_name='Clark',
        email='sydney@aa.io',
        password='password'
    )
    jeff = User(
        first_name='Jeff',
        last_name='Thompson',
        email='bobbie@aa.io',
        password='password'
    )
    jessica = User(
        first_name='Jessica',
        last_name='Lee',
        email='jessica@aa.io',
        password='password'
    )
    ben = User(
        first_name='Ben',
        last_name='Moore',
        email='ben@aa.io',
        password='password'
    )
    annie = User(
        first_name='Annie',
        last_name='Anderson',
        email='annie@aa.io',
        password='password'
    )
    ralph = User(
        first_name='Ralph',
        last_name='Lexing',
        email='ralph@aa.io',
        password='password'
    )
    nicole = User(
        first_name='Nicole',
        last_name='Smith',
        email='nicole@aa.io',
        password='password'
    )
    kate = User(
        first_name='Kate',
        last_name='Johnson',
        email='kate@aa.io',
        password='password'
    )
    michael = User(
        first_name='Michael',
        last_name='Williams',
        email='michael@aa.io',
        password='password'
    )
    judy = User(
        first_name='Judy',
        last_name='Brown',
        email='judy@aa.io',
        password='password'
    )
    raymond = User(
        first_name='Raymond',
        last_name='Jones',
        email='raymond@aa.io',
        password='password'
    )
    dina = User(
        first_name='Dina',
        last_name='Miller',
        email='dina@aa.io',
        password='password'
    )
    connor = User(
        first_name='Connor',
        last_name='Garcia',
        email='connor@aa.io',
        password='password'
    )
    bennett = User(
        first_name='Bennett',
        last_name='Davis',
        email='bennett@aa.io',
        password='password'
    )
    quinn = User(
        first_name='Quinn',
        last_name='Wilson',
        email='quinn@aa.io',
        password='password'
    )
    sarah = User(
        first_name='Sarah',
        last_name='Lewis',
        email='sarah@aa.io',
        password='password'
    )

    db.session.add(demo)
    db.session.add(sydney)
    db.session.add(jeff)
    db.session.add(jessica)
    db.session.add(ben)
    db.session.add(annie)
    db.session.add(ralph)
    db.session.add(nicole)
    db.session.add(kate)
    db.session.add(michael)
    db.session.add(judy)
    db.session.add(raymond)
    db.session.add(dina)
    db.session.add(connor)
    db.session.add(bennett)
    db.session.add(quinn)
    db.session.add(sarah)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
