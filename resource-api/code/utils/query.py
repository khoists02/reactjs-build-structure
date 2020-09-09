class Query:
  def __init__(self, tableName, fieldConditions, fields):
    self.tableName = tableName
    self.fieldConditions = fieldConditions
    self.fields = fields

  @classmethod
  def get_query_select(cls, tableName):
    return "SELECT * FROM {}".format(tableName)

  @classmethod
  def get_query_select_condition(cls, tableName, fieldConditions):
    return "SELECT * FROM {} WHERE {}=?".format(tableName, fieldConditions)

  @classmethod
  def get_query_insert(cls, tableName, fields):
    map_sp = []
    map_fields =  ','.join(map(str, fields))
    for field in fields:
      map_sp.append("?")
    map_values = ','.join(map(str, map_sp))
    query = "INSERT INTO {} ({}) VALUES ({})".format(tableName, map_fields, map_values)
    return query