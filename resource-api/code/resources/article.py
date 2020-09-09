import sqlite3
from flask_restful import Resource, reqparse
from flask import request
from flask_jwt import jwt_required
from utils.query import Query
from models.article import ArticleModel

class Article(Resource):
  parser =  reqparse.RequestParser()
  parser.add_argument('id', 
    type=int,
    required=False,
  )

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

    if data["title"] == "":
      return {"message": "error"}, 400

    try:
      article.save_to_db()
    except:
      return {"message": "Something was wrong when you try to insert this article"}, 500

    return { 'article': article.json() }, 201

  # @jwt_required()
  def put(self):
    data = Article.parser.parse_args()
    # article = ArticleModel(**data)
    article = ArticleModel.find_by_article_id(data["id"])
    if article is None:
      article = ArticleModel(**data)
    else:
      article.id = data["id"]
      article.title = data["title"]
      article.tag = data["tag"]
      article.sortDescription = data["sortDescription"]
      article.date = data["date"]
      article.key = data["key"]
      article.handleCode = data["handleCode"]
      article.user_id = data["user_id"]

    try:
      article.save_to_db()
    except:
      return {"message": "Something was wrong when you try to update this article"}, 500

    return article.json()

  # @jwt_required()
  def delete(self):
    data = Article.parser.parse_args()
    article = ArticleModel.find_by_article_id(data['id'])
    if article:
      article.delete_db()
    return { "message": "Article deleted." }
    
  # @jwt_required()
  def get(self):
    data = Article.parser.parse_args()
    articles = self.find_by_user_id(data)
    return articles

class ArticleList(Resource):
  # @jwt_required()
  def get(self):
    if request.args:
      keys = request.args['keys']
    else:
      keys = ""
    articles = ArticleModel.get_all_article(keys)
    return {"articles": articles}, 200