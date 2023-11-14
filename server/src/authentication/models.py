from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base

AuthenticationBase = declarative_base()


class User(AuthenticationBase):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
