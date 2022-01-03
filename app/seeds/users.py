from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        first_name='Demo',
        last_name='Demo',
        email='demo@aa.io',
        password='password'
    )
    judy = User(
        first_name='Judy',
        last_name='Brown',
        email='judy@aa.io',
        password='password'
    )
    michael = User(
        first_name='Michael',
        last_name='Williams',
        email='michael@aa.io',
        password='password'
    )
    kelly = User(
        first_name='Kelly',
        last_name='Thompson',
        email='kelly@aa.io',
        password='password'
    )
    thorn = User(
        first_name='Thorn',
        last_name='Phillips',
        email='thorn@aa.io',
        password='password'
    )
    camille = User(
        first_name='Camille',
        last_name='Lewis',
        email='camille@aa.io',
        password='password'
    )
    yash = User(
        first_name='Yash',
        last_name='Anderson',
        email='yash@aa.io',
        password='password'
    )
    nicole = User(
        first_name='Nicole',
        last_name='Smith',
        email='nicole@aa.io',
        password='password'
    )
    raymond = User(
        first_name='Raymond',
        last_name='Jones',
        email='raymond@aa.io',
        password='password'
    )
    kate = User(
        first_name='Kate',
        last_name='Johnson',
        email='kate@aa.io',
        password='password'
    )
    max = User(
        first_name='Max',
        last_name='Nguyen',
        email='max@aa.io',
        password='password'
    )
    dina = User(
        first_name='Dina',
        last_name='Miller',
        email='dina@aa.io',
        password='password'
    )

    # minka = User(
    #     first_name='Minka',
    #     last_name='Moore',
    #     email='minka@aa.io',
    #     password='password'
    # )
    # akshay = User(
    #     first_name='Akshay',
    #     last_name='Lexing',
    #     email='akshay@aa.io',
    #     password='password'
    # )
    # crystal = User(
    #     first_name='Crystal',
    #     last_name='Clark',
    #     email='crystal@aa.io',
    #     password='password'
    # )
    # connor = User(
    #     first_name='Connor',
    #     last_name='Garcia',
    #     email='connor@aa.io',
    #     password='password'
    # )
    # bennett = User(
    #     first_name='Bennett',
    #     last_name='Davis',
    #     email='bennett@aa.io',
    #     password='password'
    # )
    # quinn = User(
    #     first_name='Quinn',
    #     last_name='Wilson',
    #     email='quinn@aa.io',
    #     password='password'
    # )
    # jessica = User(
    #     first_name='Jessica',
    #     last_name='Lee',
    #     email='jessica@aa.io',
    #     password='password'
    # )
    # valeriya = User(
    #     first_name='Valeriya',
    #     last_name='Paulis',
    #     email='valeriya@aa.io',
    #     password='password'
    # )
    # joshua = User(
    #     first_name='Joshua',
    #     last_name='Lopez',
    #     email='joshua@aa.io',
    #     password='password'
    # )


    db.session.add(demo)
    db.session.add(michael)
    db.session.add(judy)
    db.session.add(kelly)
    db.session.add(thorn)
    db.session.add(camille)
    db.session.add(yash)
    db.session.add(raymond)
    db.session.add(nicole)
    db.session.add(kate)
    db.session.add(max)
    db.session.add(dina)
    # db.session.add(crystal)
    # db.session.add(jessica)
    # db.session.add(minka)
    # db.session.add(akshay)
    # db.session.add(connor)
    # db.session.add(bennett)
    # db.session.add(quinn)
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
