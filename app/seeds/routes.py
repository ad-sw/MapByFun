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
        user_id= 1,
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
        user_id= 2,
        name='Example 8',
        description='here is a map description',
        activity_id=8,
    )
    route9 = Route(
        user_id= 2,
        name='Example 9',
        description='here is a map description',
        activity_id=1,
    )
    route10 = Route(
        user_id= 2,
        name='Example 10',
        description='here is a map description',
        activity_id=2,
    )
    route11 = Route(
        user_id= 3,
        name='Example 11',
        description='here is a map description',
        activity_id=3,
    )
    route12 = Route(
        user_id= 3,
        name='Example 12',
        description='here is a map description',
        activity_id=4,
    )
    route13 = Route(
        user_id= 3,
        name='Example 13',
        description='here is a map description',
        activity_id=5,
    )
    route14 = Route(
        user_id= 3,
        name='Example 14',
        description='here is a map description',
        activity_id=5,
    )
    route15 = Route(
        user_id= 3,
        name='Example 15',
        description='here is a map description',
        activity_id=2,
    )
    route16 = Route(
        user_id= 4,
        name='Example 16',
        description='here is a map description',
        activity_id=1,
    )
    route17 = Route(
        user_id= 4,
        name='Example 17',
        description='here is a map description',
        activity_id=5,
    )
    route18 = Route(
        user_id= 4,
        name='Example 18',
        description='here is a map description',
        activity_id=2,
    )
    route19 = Route(
        user_id= 4,
        name='Example 19',
        description='here is a map description',
        activity_id=3,
    )
    route20 = Route(
        user_id= 4,
        name='Example 20',
        description='here is a map description',
        activity_id=1,
    )
    route21 = Route(
        user_id= 5,
        name='Example 21',
        description='here is a map description',
        activity_id=4,
    )
    route22 = Route(
        user_id= 5,
        name='Example 22',
        description='here is a map description',
        activity_id=5,
    )
    route23 = Route(
        user_id= 5,
        name='Example 23',
        description='here is a map description',
        activity_id=1,
    )
    route24 = Route(
        user_id= 5,
        name='Example 24',
        description='here is a map description',
        activity_id=2,
    )
    route25 = Route(
        user_id= 5,
        name='Example 25',
        description='here is a map description',
        activity_id=3,
    )
    route26 = Route(
        user_id= 6,
        name='Example 26',
        description='here is a map description',
        activity_id=4,
    )
    route27 = Route(
        user_id= 6,
        name='Example 27',
        description='here is a map description',
        activity_id=5,
    )
    route28 = Route(
        user_id= 6,
        name='Example 28',
        description='here is a map description',
        activity_id=6,
    )
    route29 = Route(
        user_id= 6,
        name='Example 29',
        description='here is a map description',
        activity_id=7,
    )
    route30 = Route(
        user_id= 6,
        name='Example 30',
        description='here is a map description',
        activity_id=1,
    )
    route31 = Route(
        user_id= 7,
        name='Example 31',
        description='here is a map description',
        activity_id=2,
    )
    route32 = Route(
        user_id= 7,
        name='Example 32',
        description='here is a map description',
        activity_id=3,
    )
    route33 = Route(
        user_id= 7,
        name='Example 33',
        description='here is a map description',
        activity_id=4,
    )
    route34 = Route(
        user_id= 7,
        name='Example 34',
        description='here is a map description',
        activity_id=5,
    )
    route35 = Route(
        user_id= 7,
        name='Example 35',
        description='here is a map description',
        activity_id=6,
    )
    route36 = Route(
        user_id= 8,
        name='Example 36',
        description='here is a map description',
        activity_id=7,
    )
    route37 = Route(
        user_id= 8,
        name='Example 37',
        description='here is a map description',
        activity_id=1,
    )
    route38 = Route(
        user_id= 8,
        name='Example 38',
        description='here is a map description',
        activity_id=2,
    )
    route39 = Route(
        user_id= 8,
        name='Example 39',
        description='here is a map description',
        activity_id=3,
    )
    route40 = Route(
        user_id= 8,
        name='Example 40',
        description='here is a map description',
        activity_id=4,
    )
    # route41 = Route(
    #     user_id= 9,
    #     name='Example 41',
    #     description='here is a map description',
    #     activity_id=5,
    # )
    # route42 = Route(
    #     user_id= 9,
    #     name='Example 42',
    #     description='here is a map description',
    #     activity_id=6,
    # )
    # route43 = Route(
    #     user_id= 9,
    #     name='Example 43',
    #     description='here is a map description',
    #     activity_id=7,
    # )
    # route44 = Route(
    #     user_id= 9,
    #     name='Example 44',
    #     description='here is a map description',
    #     activity_id=1,
    # )
    # route45 = Route(
    #     user_id= 9,
    #     name='Example 45',
    #     description='here is a map description',
    #     activity_id=2,
    # )
    # route46 = Route(
    #     user_id= 10,
    #     name='Example 46',
    #     description='here is a map description',
    #     activity_id=3,
    # )
    # route47 = Route(
    #     user_id= 10,
    #     name='Example 47',
    #     description='here is a map description',
    #     activity_id=4,
    # )
    # route48 = Route(
    #     user_id= 10,
    #     name='Example 48',
    #     description='here is a map description',
    #     activity_id=5,
    # )
    # route49 = Route(
    #     user_id= 10,
    #     name='Example 49',
    #     description='here is a map description',
    #     activity_id=6,
    # )
    # route50 = Route(
    #     user_id= 10,
    #     name='Example 50',
    #     description='here is a map description',
    #     activity_id=4,
    # )
    # route51 = Route(
    #     user_id= 11,
    #     name='Example 51',
    #     description='here is a map description',
    #     activity_id=5,
    # )
    # route52 = Route(
    #     user_id= 11,
    #     name='Example 52',
    #     description='here is a map description',
    #     activity_id=6,
    # )
    # route53 = Route(
    #     user_id= 11,
    #     name='Example 53',
    #     description='here is a map description',
    #     activity_id=7,
    # )
    # route54 = Route(
    #     user_id= 11,
    #     name='Example 54',
    #     description='here is a map description',
    #     activity_id=4,
    # )
    # route55 = Route(
    #     user_id= 11,
    #     name='Example 55',
    #     description='here is a map description',
    #     activity_id=3,
    # )
    # route56 = Route(
    #     user_id= 12,
    #     name='Example 56',
    #     description='here is a map description',
    #     activity_id=7,
    # )
    # route57 = Route(
    #     user_id= 12,
    #     name='Example 57',
    #     description='here is a map description',
    #     activity_id=4,
    # )
    # route58 = Route(
    #     user_id= 12,
    #     name='Example 58',
    #     description='here is a map description',
    #     activity_id=3,
    # )
    # route59 = Route(
    #     user_id= 12,
    #     name='Example 59',
    #     description='here is a map description',
    #     activity_id=4,
    # )
    # route60 = Route(
    #     user_id= 12,
    #     name='Example 60',
    #     description='here is a map description',
    #     activity_id=7,
    # )
    # route60 = Route(
    #     user_id= 13,
    #     name='Example 60',
    #     description='here is a map description',
    #     activity_id=6,
    # )
    # route61 = Route(
    #     user_id= 13,
    #     name='Example 61',
    #     description='here is a map description',
    #     activity_id=1,
    # )
    # route62 = Route(
    #     user_id= 13,
    #     name='Example 62',
    #     description='here is a map description',
    #     activity_id=2,
    # )
    # route63 = Route(
    #     user_id= 13,
    #     name='Example 63',
    #     description='here is a map description',
    #     activity_id=3,
    # )
    # route64 = Route(
    #     user_id= 13,
    #     name='Example 64',
    #     description='here is a map description',
    #     activity_id=4,
    # )
    # route65 = Route(
    #     user_id= 14,
    #     name='Example 65',
    #     description='here is a map description',
    #     activity_id=7,
    # )
    # route66 = Route(
    #     user_id= 14,
    #     name='Example 66',
    #     description='here is a map description',
    #     activity_id=6,
    # )
    # route67 = Route(
    #     user_id= 14,
    #     name='Example 67',
    #     description='here is a map description',
    #     activity_id=5,
    # )
    # route68 = Route(
    #     user_id= 14,
    #     name='Example 68',
    #     description='here is a map description',
    #     activity_id=4,
    # )
    # route69 = Route(
    #     user_id= 14,
    #     name='Example 69',
    #     description='here is a map description',
    #     activity_id=3,
    # )
    # route70 = Route(
    #     user_id= 15,
    #     name='Example 70',
    #     description='here is a map description',
    #     activity_id=1,
    # )
    # route71 = Route(
    #     user_id= 15,
    #     name='Example 71',
    #     description='here is a map description',
    #     activity_id=2,
    # )
    # route72 = Route(
    #     user_id= 15,
    #     name='Example 72',
    #     description='here is a map description',
    #     activity_id=3,
    # )
    # route73 = Route(
    #     user_id= 15,
    #     name='Example 73',
    #     description='here is a map description',
    #     activity_id=4,
    # )
    # route74 = Route(
    #     user_id= 15,
    #     name='Example 74',
    #     description='here is a map description',
    #     activity_id=5,
    # )
    # route75 = Route(
    #     user_id= 16,
    #     name='Example 75',
    #     description='here is a map description',
    #     activity_id=6,
    # )
    # route76 = Route(
    #     user_id= 16,
    #     name='Example 76',
    #     description='here is a map description',
    #     activity_id=7,
    # )
    # route77 = Route(
    #     user_id= 16,
    #     name='Example 77',
    #     description='here is a map description',
    #     activity_id=1,
    # )
    # route78 = Route(
    #     user_id= 16,
    #     name='Example 78',
    #     description='here is a map description',
    #     activity_id=2,
    # )
    # route79 = Route(
    #     user_id= 16,
    #     name='Example 79',
    #     description='here is a map description',
    #     activity_id=3,
    # )
    # route80 = Route(
    #     user_id= 17,
    #     name='Example 80',
    #     description='here is a map description',
    #     activity_id=4,
    # )
    # route81 = Route(
    #     user_id= 17,
    #     name='Example 81',
    #     description='here is a map description',
    #     activity_id=5,
    # )
    # route82 = Route(
    #     user_id= 17,
    #     name='Example 82',
    #     description='here is a map description',
    #     activity_id=1,
    # )
    # route83 = Route(
    #     user_id= 17,
    #     name='Example 83',
    #     description='here is a map description',
    #     activity_id=2,
    # )
    # route84 = Route(
    #     user_id= 17,
    #     name='Example 84',
    #     description='here is a map description',
    #     activity_id=3,
    # )
    # route85 = Route(
    #     user_id= 18,
    #     name='Example 85',
    #     description='here is a map description',
    #     activity_id=4,
    # )
    # route86 = Route(
    #     user_id= 18,
    #     name='Example 86',
    #     description='here is a map description',
    #     activity_id=5,
    # )
    # route87 = Route(
    #     user_id= 18,
    #     name='Example 87',
    #     description='here is a map description',
    #     activity_id=6,
    # )
    # route88 = Route(
    #     user_id= 18,
    #     name='Example 88',
    #     description='here is a map description',
    #     activity_id=7,
    # )
    # route89 = Route(
    #     user_id= 18,
    #     name='Example 89',
    #     description='here is a map description',
    #     activity_id=6,
    # )
    # route90 = Route(
    #     user_id= 19,
    #     name='Example 90',
    #     description='here is a map description',
    #     activity_id=5,
    # )
    # route91 = Route(
    #     user_id= 19,
    #     name='Example 91',
    #     description='here is a map description',
    #     activity_id=4,
    # )
    # route92 = Route(
    #     user_id= 19,
    #     name='Example 92',
    #     description='here is a map description',
    #     activity_id=3,
    # )
    # route93 = Route(
    #     user_id= 19,
    #     name='Example 93',
    #     description='here is a map description',
    #     activity_id=2,
    # )
    # route94 = Route(
    #     user_id= 19,
    #     name='Example 94',
    #     description='here is a map description',
    #     activity_id=7,
    # )
    # route95 = Route(
    #     user_id= 20,
    #     name='Example 95',
    #     description='here is a map description',
    #     activity_id=6,
    # )
    # route96 = Route(
    #     user_id= 20,
    #     name='Example 96',
    #     description='here is a map description',
    #     activity_id=5,
    # )
    # route97 = Route(
    #     user_id= 20,
    #     name='Example 97',
    #     description='here is a map description',
    #     activity_id=4,
    # )
    # route98 = Route(
    #     user_id= 20,
    #     name='Example 98',
    #     description='here is a map description',
    #     activity_id=3,
    # )
    # route99 = Route(
    #     user_id= 20,
    #     name='Example 99',
    #     description='here is a map description',
    #     activity_id=1,
    # )
    route99 = Route(
        user_id= 1,
        name='Example Z',
        description='here is a map description',
        activity_id=2,
    )
    # route100 = Route(
    #     user_id= 2,
    #     name='Example Z',
    #     description='here is a map description',
    #     activity_id=2,
    # )
    route101 = Route(
        user_id= 3,
        name='Example Z',
        description='here is a map description',
        activity_id=1,
    )
    route102 = Route(
        user_id= 4,
        name='Example Z',
        description='here is a map description',
        activity_id=4,
    )
    route103 = Route(
        user_id= 5,
        name='Example Z',
        description='here is a map description',
        activity_id=2,
    )
    route104 = Route(
        user_id= 6,
        name='Example Z',
        description='here is a map description',
        activity_id=3,
    )
    route105 = Route(
        user_id= 7,
        name='Example Z',
        description='here is a map description',
        activity_id=6,
    )
    route106 = Route(
        user_id= 8,
        name='Example Z',
        description='here is a map description',
        activity_id=1,
    )
    # route107 = Route(
    #     user_id= 9,
    #     name='Example Z',
    #     description='here is a map description',
    #     activity_id=2,
    # )
    # route108 = Route(
    #     user_id= 10,
    #     name='Example Z',
    #     description='here is a map description',
    #     activity_id=3,
    # )
    # route109 = Route(
    #     user_id= 11,
    #     name='Example Z',
    #     description='here is a map description',
    #     activity_id=4,
    # )
    # route110 = Route(
    #     user_id= 12,
    #     name='Example Z',
    #     description='here is a map description',
    #     activity_id=5,
    # )
    # route111 = Route(
    #     user_id= 13,
    #     name='Example X',
    #     description='here is a map description',
    #     activity_id=6,
    # )
    # route112 = Route(
    #     user_id= 14,
    #     name='Example X',
    #     description='here is a map description',
    #     activity_id=7,
    # )
    # route113 = Route(
    #     user_id= 15,
    #     name='Example X',
    #     description='here is a map description',
    #     activity_id=6,
    # )
    # route114 = Route(
    #     user_id= 16,
    #     name='Example X',
    #     description='here is a map description',
    #     activity_id=5,
    # )
    # route115 = Route(
    #     user_id= 17,
    #     name='Example X',
    #     description='here is a map description',
    #     activity_id=4,
    # )
    # route116 = Route(
    #     user_id= 18,
    #     name='Example X',
    #     description='here is a map description',
    #     activity_id=3,
    # )
    # route117 = Route(
    #     user_id= 19,
    #     name='Example X',
    #     description='here is a map description',
    #     activity_id=2,
    # )
    # route118 = Route(
    #     user_id= 20,
    #     name='Example X',
    #     description='here is a map description',
    #     activity_id=1,
    # )
    # route119 = Route(
    #     user_id= 21,
    #     name='Example 100',
    #     description='here is a map description',
    #     activity_id=2,
    # )
    # route120 = Route(
    #     user_id= 21,
    #     name='Example 101',
    #     description='here is a map description',
    #     activity_id=3,
    # )
    # route121 = Route(
    #     user_id= 21,
    #     name='Example 102',
    #     description='here is a map description',
    #     activity_id=4,
    # )
    # route122 = Route(
    #     user_id= 21,
    #     name='Example 103',
    #     description='here is a map description',
    #     activity_id=5,
    # )
    # route123 = Route(
    #     user_id= 21,
    #     name='Example 104',
    #     description='here is a map description',
    #     activity_id=6,
    # )
    # route124 = Route(
    #     user_id= 21,
    #     name='Example 105',
    #     description='here is a map description',
    #     activity_id=7,
    # )

    # db.session.add(route0)
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
    db.session.add(route14)
    db.session.add(route15)
    db.session.add(route16)
    db.session.add(route17)
    db.session.add(route18)
    db.session.add(route19)
    db.session.add(route20)
    db.session.add(route21)
    db.session.add(route22)
    db.session.add(route23)
    db.session.add(route24)
    db.session.add(route25)
    db.session.add(route26)
    db.session.add(route27)
    db.session.add(route28)
    db.session.add(route29)
    db.session.add(route30)
    db.session.add(route31)
    db.session.add(route32)
    db.session.add(route33)
    db.session.add(route34)
    db.session.add(route35)
    db.session.add(route36)
    db.session.add(route37)
    db.session.add(route38)
    db.session.add(route39)
    db.session.add(route40)
    # db.session.add(route41)
    # db.session.add(route42)
    # db.session.add(route43)
    # db.session.add(route44)
    # db.session.add(route45)
    # db.session.add(route46)
    # db.session.add(route47)
    # db.session.add(route48)
    # db.session.add(route49)
    # db.session.add(route50)
    # db.session.add(route51)
    # db.session.add(route52)
    # db.session.add(route53)
    # db.session.add(route54)
    # db.session.add(route55)
    # db.session.add(route56)
    # db.session.add(route57)
    # db.session.add(route58)
    # db.session.add(route59)
    # db.session.add(route60)
    # db.session.add(route61)
    # db.session.add(route62)
    # db.session.add(route63)
    # db.session.add(route64)
    # db.session.add(route65)
    # db.session.add(route66)
    # db.session.add(route67)
    # db.session.add(route68)
    # db.session.add(route69)
    # db.session.add(route70)
    # db.session.add(route71)
    # db.session.add(route72)
    # db.session.add(route73)
    # db.session.add(route74)
    # db.session.add(route75)
    # db.session.add(route76)
    # db.session.add(route77)
    # db.session.add(route78)
    # db.session.add(route79)
    # db.session.add(route80)
    # db.session.add(route81)
    # db.session.add(route82)
    # db.session.add(route83)
    # db.session.add(route84)
    # db.session.add(route85)
    # db.session.add(route86)
    # db.session.add(route87)
    # db.session.add(route88)
    # db.session.add(route89)
    # db.session.add(route90)
    # db.session.add(route91)
    # db.session.add(route92)
    # db.session.add(route93)
    # db.session.add(route94)
    # db.session.add(route95)
    # db.session.add(route96)
    # db.session.add(route97)
    # db.session.add(route98)
    db.session.add(route99)
    # db.session.add(route100)
    db.session.add(route101)
    db.session.add(route102)
    db.session.add(route103)
    db.session.add(route104)
    db.session.add(route105)
    db.session.add(route106)
    # db.session.add(route107)
    # db.session.add(route108)
    # db.session.add(route109)
    # db.session.add(route110)
    # db.session.add(route111)
    # db.session.add(route112)
    # db.session.add(route113)
    # db.session.add(route114)
    # db.session.add(route115)
    # db.session.add(route116)
    # db.session.add(route117)
    # db.session.add(route118)
    # db.session.add(route119)
    # db.session.add(route120)
    # db.session.add(route121)
    # db.session.add(route122)
    # db.session.add(route123)
    # db.session.add(route124)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_routes():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
