from typing import List

from fastapi import APIRouter, Depends
from sqlalchemy import select
from sqlalchemy.orm import Session
from src.database import get_db

from .models import Recipe as RecipeModel
from .schemas import Recipe as RecipeSchema

router = APIRouter(
    tags=["recipe"],
    prefix="/recipes",
)


@router.get("")
def recipe_list(db: Session = Depends(get_db)) -> List[RecipeSchema]:
    recipes = db.scalars(select(RecipeModel)).all()
    return recipes


@router.get("/{id}")
def recipe_get(id: str, db: Session = Depends(get_db)) -> RecipeSchema:
    recipe = db.scalars(select(RecipeModel).where(RecipeModel.id == int(id))).one()
    return recipe
