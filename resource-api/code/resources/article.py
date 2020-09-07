import sqlite3
from flask_restful import Resource, reqparse
from flask import request
from flask_jwt import jwt_required
from utils.query import Query
from models.article import ArticleModel

class Article(Resource):
  parser =  reqparse.RequestParser()
  parser.add_argument('title', 
    type=str,
    required=False,
  )

  parser.add_argument('key', 
    type=str,
    required=False,
  )

  parser.add_argument('tag', 
    type=str,
    required=False,
  )

  parser.add_argument('sortDescription', 
    type=str,
    required=False,
  )

  parser.add_argument('date', 
    type=str,
    required=False,
  )

  parser.add_argument('handleCode', 
    type=str,
    required=False,
  )

  parser.add_argument('user_id', 
    type=int,
    required=False,
  )
  
  def post(self):
    data = Article.parser.parse_args()
    article = ArticleModel(**data)

    try:
      article.save_to_db()
    except:
      return {"message": "Something was wrong when you try to insert this article"}, 500

    return { 'article': article.json() }, 201

  @jwt_required()
  def put(self):
    data = Article.parser.parse_args()
    update_article = {
      'title': data['title'],
      'key': data['key'],
      'tag': data['tag'],
      'sortDescription': data['sortDescription'],
      'date': data['date'],
      'handleCode': data['handleCode'],
      'user_id': data['user_id']
    }
    if self.find_by_handleCode(data['handleCode']) is None:
      try:
        self.insert(update_article)
      except:
        return {"message": "Something was wrong when you try to update this article"}, 500
    else:
      try:
        self.update(update_article)
      except:
        return {"message": "Something was wrong when you try to update this article"}, 500
    
    return update_article

  @jwt_required()
  def delete(self):
    data = Article.parser.parse_args()
    if self.find_by_handleCode(data['handleCode']) is None:
      return {"message": "Article not found"}, 400

    connection = sqlite3.connect('data.db')
    cursor = connection.cursor()

    delete = "DELETE FROM articles WHERE handleCode=?"
    cursor.execute(delete, (data['handleCode'],))

    connection.commit()
    connection.close()

  @jwt_required()
  def get(self):
    data = Article.parser.parse_args()
    articles = self.find_by_user_id(data)
    return articles

class ArticleList(Resource):
  # @jwt_required()
  def get(self):
    args = request.args
    keys = args['keys']
    print(keys)
    connection = sqlite3.connect('data.db')
    cursor = connection.cursor()
    if keys.find('DEFAULT') > -1:
      select =  "SELECT * FROM articles"
      result = cursor.execute(select)
    else:
      select = "SELECT * FROM articles WHERE key=?"
      result = cursor.execute(select, (keys,))

    articles = []
    for row in result:
      articles.append({
        'id': row[0],
        'title': row[1],
        'key': row[2],
        'tag': row[3],
        'sortDescription': row[4],
        'date': row[5],
        'handleCode':row[6],
        'user_id':row[7],
      })

    return {'articles': articles}