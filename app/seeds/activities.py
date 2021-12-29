from app.models import Activity, db

def seed_activities():
    walk = Activity(
        activity = 'Walk'
    )

    run = Activity(
        activity = 'Run'
    )

    hike = Activity(
        activity = 'Hike'
    )

    sport_other_activity = Activity(
        activity = 'Sport / Other Activity'
    )

    winter_sport_other = Activity(
        activity = 'Winter Sport / Activity'
    )

    bike_ride = Activity(
        activity = 'Bike Ride'
    )

    social = Activity(
        activity = 'Social'
    )

    volunteer = Activity(
        activity = 'Volunteer'
    )

    food = Activity(
        activity = 'Food'
    )

    db.session.add(walk)
    db.session.add(run)
    db.session.add(hike)
    db.session.add(sport_other_activity)
    db.session.add(winter_sport_other)
    db.session.add(bike_ride)
    db.session.add(social)
    db.session.add(volunteer)
    db.session.add(food)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_activities():
    db.session.execute('TRUNCATE activities RESTART IDENTITY CASCADE;')
    db.session.commit()
