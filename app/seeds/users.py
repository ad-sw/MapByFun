from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        first_name='Demo',
        last_name='Demo',
        email='demo@test.io',
        password='password'
    )
    judy = User(
        first_name='Judy',
        last_name='Brown',
        email='judy@test.io',
        password='password'
    )
    michael = User(
        first_name='Michael',
        last_name='Williams',
        email='michael@test.io',
        password='password'
    )
    kelly = User(
        first_name='Kelly',
        last_name='Thompson',
        email='kelly@test.io',
        password='password'
    )
    camille = User(
        first_name='Camille',
        last_name='Lewis',
        email='camille@test.io',
        password='password'
    )
    yash = User(
        first_name='Yash',
        last_name='Anderson',
        email='yash@test.io',
        password='password'
    )
    nicole = User(
        first_name='Nicole',
        last_name='Smith',
        email='nicole@test.io',
        password='password'
    )
    raymond = User(
        first_name='Raymond',
        last_name='Jones',
        email='raymond@test.io',
        password='password'
    )
    kate = User(
        first_name='Kate',
        last_name='Johnson',
        email='kate@test.io',
        password='password'
    )
    max = User(
        first_name='Max',
        last_name='Nguyen',
        email='max@test.io',
        password='password'
    )
    dina = User(
        first_name='Dina',
        last_name='Miller',
        email='dina@test.io',
        password='password'
    )

    # minka = User(
    #     first_name='Minka',
    #     last_name='Moore',
    #     email='minka@test.io',
    #     password='password'
    # )
    # akshay = User(
    #     first_name='Akshay',
    #     last_name='Lexing',
    #     email='akshay@test.io',
    #     password='password'
    # )
    # crystal = User(
    #     first_name='Crystal',
    #     last_name='Clark',
    #     email='crystal@test.io',
    #     password='password'
    # )
    # connor = User(
    #     first_name='Connor',
    #     last_name='Garcia',
    #     email='connor@test.io',
    #     password='password'
    # )
    # bennett = User(
    #     first_name='Bennett',
    #     last_name='Davis',
    #     email='bennett@test.io',
    #     password='password'
    # )
    # quinn = User(
    #     first_name='Quinn',
    #     last_name='Wilson',
    #     email='quinn@test.io',
    #     password='password'
    # )
    # jessica = User(
    #     first_name='Jessica',
    #     last_name='Lee',
    #     email='jessica@test.io',
    #     password='password'
    # )
    # valeriya = User(
    #     first_name='Valeriya',
    #     last_name='Paulis',
    #     email='valeriya@test.io',
    #     password='password'
    # )
    # joshua = User(
    #     first_name='Joshua',
    #     last_name='Lopez',
    #     email='joshua@test.io',
    #     password='password'
    # )


    db.session.add(demo)
    db.session.add(michael)
    db.session.add(judy)
    db.session.add(kelly)
    db.session.add(camille)
    db.session.add(yash)
    db.session.add(raymond)
    db.session.add(nicole)
    # db.session.add(kate)
    # db.session.add(max)
    # db.session.add(dina)
    # db.session.add(minka)
    # db.session.add(quinn)

    # db.session.add(crystal)
    # db.session.add(jessica)
    # db.session.add(akshay)
    # db.session.add(connor)
    # db.session.add(bennett)
    # db.session.add(valeriya)
    # db.session.add(joshua)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
