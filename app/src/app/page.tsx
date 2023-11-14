'use client';
import { useQuery } from '@tanstack/react-query';
import NextLink from 'next/link';

import { Recipe, RecipeService } from '../../generated';
export default function Home() {
  const { data: recipes } = useQuery({
    queryKey: ['recipeList'],
    queryFn: () => RecipeService.recipeList(),
  });

  return (
    <div className="flex flex-col gap-4">
      {recipes?.map((recipe: Recipe) => (
        <div key={recipe.id}>
          <NextLink className="text-blue-500 underline" href={`/${recipe.id}`}>
            {recipe.name}
          </NextLink>
        </div>
      ))}
    </div>
  );
}
