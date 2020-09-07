import sqlite3
from flask_restful import Resource, reqparse
from flask_jwt import jwt_required
from models.user import UserModel

class UserRegister(Resource):

  parper = reqparse.RequestParser()
  parper.add_argument('username', 
    type=str,
    required=True,
    help="This field is require"
  )


  parper.add_argument('password', 
    type=str,
    required=True,
    help="This field is require"
  )

  def post(self):
    data = UserRegister.parper.parse_args()

    if UserModel.find_by_user_name(data['username']):
      return {"message": "User is exists" }, 400

    user = UserModel(**data)

    try:
      user.save_to_db()
    except:
      return {"message": "Error"}, 500
    
    return {"message": "User created successfully"} , 201


class UserList(Resource):
  # @jwt_required()
  def get(self):
    connection = sqlite3.connect('data.db')
    cursor = connection.cursor()
    select = "SELECT * FROM users"

    result = cursor.execute(select)
    users = []
    for row in result:
      users.append({
        'id': row[0],
        'username': row[1],
      })

    return {'users': users}

