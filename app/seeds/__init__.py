from flask.cli import AppGroup
from .users import seed_users, undo_users
from .routes import seed_routes, undo_routes
from .friends import seed_friends, undo_friends
from .comments import seed_comments, undo_comments
from .activities import seed_activities, undo_activities

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_activities()
    seed_routes()
    seed_comments()
    seed_friends()


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_friends()
    undo_comments()
    undo_routes()
    undo_activities()
    undo_users()
