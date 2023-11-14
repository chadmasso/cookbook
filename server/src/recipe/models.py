from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base

RecipeBase = declarative_base()


class Recipe(RecipeBase):
    __tablename__ = "recipes"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True)
    description = Column(String)
