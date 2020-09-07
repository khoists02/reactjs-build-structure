from flask import Flask, request
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS, cross_origin
from flask_jwt import JWT, jwt_required
from security import authenticate, identity
from resources.user import UserRegister, UserList
from resources.article import Article, ArticleList
from db import db

# CONFIGURATION
app = Flask(__name__)
app.secret_key = 'khoile22071993'
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///data.db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# CORS
CORS(app)

# DEFINE API
api = Api(app)

# CREATE TABLES
@app.before_first_request
def create_tables():
  db.create_all()

# JWT
jwt = JWT(app, authenticate, identity)

# ADD RESOURCES
api.add_resource(Article, '/article')
api.add_resource(ArticleList, '/articles')
api.add_resource(UserRegister, '/register')
api.add_resource(UserList, '/users')

# RUN MAIN
if __name__ == "__main__":
  db.init_app(app)
  app.run(port=5000, debug=True)
