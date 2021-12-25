from flask import Blueprint, request
from app.config import Config
import googlemaps

map_routes = Blueprint('map', __name__)
gmaps = googlemaps.Client(key=Config.GOOGLE_KEY)


@map_routes.route('/key', methods=['POST'])
def return_api_key():
    return {'api_key' : Config.GOOGLE_KEY}


@map_routes.route('/coordinates', methods=['POST'])
def return_coordinates():
    address = request.json['address']
    geocode_result = gmaps.geocode(address)
    return {'coordinates' : geocode_result}
