from db import db

class ArticleModel(db.Model):

  __tablename__ = "articles"

  id = db.Column(db.Integer, primary_key=True)
  title = db.Column(db.String(200))
  tag = db.Column(db.String(80))
  sortDescription = db.Column(db.String(10000))
  date = db.Column(db.String(20))
  key = db.Column(db.String(20))
  handleCode =  db.Column(db.String(100))
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
  user = db.relationship('UserModel')

  def __init__(self, title, tag, sortDescription, date, key, handleCode, user_id):
    self.title = title
    self.tag = tag
    self.sortDescription = sortDescription
    self.date = date
    self.key = key
    self.handleCode = handleCode
    self.user_id = user_id

  def json(self):
    return { 'id': self.id, 'title': self.title, 'tag': self.tag, 'sortDescription': self.sortDescription, 'date': self.date, 'key': self.key, 'handleCode': self.handleCode, 'user_id': self.user_id } 

  @classmethod
  def find_by_handleCode(cls, handleCode):
    return cls.query.filter_by(handleCode=handleCode).first()

  @classmethod
  def find_article_by_user_id(cls, user_id):
    return cls.query.filter_by(user_id=user_id)

  def save_to_db(self):
    db.session.add(self)
    db.session.commit()

  def delete_db(self):
    db.session.delete(self)
    db.commit()