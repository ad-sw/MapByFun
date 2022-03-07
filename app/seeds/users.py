from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        first_name='Demo',
        last_name='Demo',
        email='demo@test.io',
        password='password',
        profile_picture='https://user-images.githubusercontent.com/86431563/156970351-1b04531e-0019-43d1-a7ad-556558c9ebb3.PNG'
    )
    michael = User(
        first_name='Michael',
        last_name='Williams',
        email='michael@test.io',
        password='password',
        profile_picture='https://user-images.githubusercontent.com/86431563/156970353-40aa5ffa-a830-49c3-b15e-f5ae33b4454d.PNG'
    )
    judy = User(
        first_name='Judy',
        last_name='Brown',
        email='judy@test.io',
        password='password',
        profile_picture='https://user-images.githubusercontent.com/86431563/156970354-c24032cc-792e-4e58-878c-52d0fe2ff4e8.PNG'
    )
    kelly = User(
        first_name='Kelly',
        last_name='Thompson',
        email='kelly@test.io',
        password='password',
        profile_picture='https://user-images.githubusercontent.com/86431563/156970356-03f56d80-4520-480f-9a90-2a46913718d7.PNG'
    )
    quinn = User(
        first_name='Quinn',
        last_name='Wilson',
        email='quinn@test.io',
        password='password',
        profile_picture='https://user-images.githubusercontent.com/86431563/156970358-45ca3bdf-d41b-41e1-b88c-cabb606f5d07.PNG'
    )
    camille = User(
        first_name='Camille',
        last_name='Lewis',
        email='camille@test.io',
        password='password',
        profile_picture='https://user-images.githubusercontent.com/86431563/156970360-65afe8a0-fa5c-4869-abde-957a1d07992a.PNG'
    )
    yash = User(
        first_name='Yash',
        last_name='Anderson',
        email='yash@test.io',
        password='password',
        profile_picture='https://user-images.githubusercontent.com/86431563/156970362-07c64cca-9c2b-48ea-9107-025f52523792.PNG'
    )
    nicole = User(
        first_name='Nicole',
        last_name='Smith',
        email='nicole@test.io',
        password='password',
        profile_picture='https://user-images.githubusercontent.com/86431563/156970365-9827265a-65d3-4e78-ae7d-c12280b7e0d8.PNG'
    )
    raymond = User(
        first_name='Raymond',
        last_name='Jones',
        email='raymond@test.io',
        password='password',
        profile_picture='https://user-images.githubusercontent.com/86431563/156970367-63ef8982-5415-4f48-9ab8-cdb4bffbeccd.PNG'
    )
    kate = User(
        first_name='Kate',
        last_name='Johnson',
        email='kate@test.io',
        password='password',
        profile_picture='https://user-images.githubusercontent.com/86431563/156970370-0fea836a-3f3b-4824-8283-ddbdb24c9997.PNG'
    )
    prab = User(
        first_name='Prab',
        last_name='Nguyen',
        email='prab@test.io',
        password='password',
        profile_picture='https://user-images.githubusercontent.com/86431563/156970373-5ba9f01d-119d-48e1-b51b-731f53b45409.PNG'
    )
    dina = User(
        first_name='Dina',
        last_name='Miller',
        email='dina@test.io',
        password='password',
        profile_picture='https://user-images.githubusercontent.com/86431563/156970376-7b5cab91-3056-4908-8103-083f68091208.PNG'
    )
    joshua = User(
        first_name='Joshua',
        last_name='Lopez',
        email='joshua@test.io',
        password='password',
        profile_picture='https://user-images.githubusercontent.com/86431563/156971265-46c749b3-d103-4f7e-971e-ba2c51119473.PNG'
    )
    minka = User(
        first_name='Minka',
        last_name='Moore',
        email='minka@test.io',
        password='password',
        profile_picture='https://user-images.githubusercontent.com/86431563/156971266-dcf69c6c-b0b7-4c37-aa23-d521a82b2242.PNG'
    )
    crystal = User(
        first_name='Crystal',
        last_name='Clark',
        email='crystal@test.io',
        password='password',
        profile_picture='https://user-images.githubusercontent.com/86431563/156971269-cdfcff74-5018-438d-bc28-986369039602.PNG'
    )
    connor = User(
        first_name='Connor',
        last_name='Garcia',
        email='connor@test.io',
        password='password',
        profile_picture='https://user-images.githubusercontent.com/86431563/156971271-79e6ec55-be1c-42f7-b1f4-4abc047c0d55.PNG'
    )
    bennett = User(
        first_name='Bennett',
        last_name='Davis',
        email='bennett@test.io',
        password='password',
        profile_picture='https://user-images.githubusercontent.com/86431563/156971273-6048405b-88e4-4437-9ed4-9333976951ab.PNG'
    )
    valeriya = User(
        first_name='Valeriya',
        last_name='Paulis',
        email='valeriya@test.io',
        password='password',
        profile_picture='https://user-images.githubusercontent.com/86431563/156971274-166c0ce9-587c-4c72-bcd1-081e7f05f87a.PNG'
    )
    hunter = User(
        first_name='Hunter',
        last_name='Hill',
        email='hunter@test.io',
        password='password',
        profile_picture='https://user-images.githubusercontent.com/86431563/156971276-d057e23c-25c3-4019-b18e-0f25473ab4c4.PNG'
    )
    betsy = User(
        first_name='Betsy',
        last_name='Rivera',
        email='betsy@test.io',
        password='password',
        profile_picture='https://user-images.githubusercontent.com/86431563/156971560-060a9c6d-7a6f-4e43-a82e-27728da1f93a.PNG'
    )

    db.session.add(demo)
    db.session.add(michael)
    db.session.add(judy)
    db.session.add(kelly)
    db.session.add(quinn)
    db.session.add(camille)
    db.session.add(yash)
    db.session.add(nicole)
    db.session.add(raymond)
    db.session.add(kate)
    db.session.add(prab)
    db.session.add(dina)
    db.session.add(joshua)
    db.session.add(minka)
    db.session.add(connor)
    db.session.add(crystal)
    db.session.add(bennett)
    db.session.add(valeriya)
    db.session.add(hunter)
    db.session.add(betsy)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
