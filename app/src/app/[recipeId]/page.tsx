'use client';
import { useQuery } from '@tanstack/react-query';
import NextLink from 'next/link';
import { useParams } from 'next/navigation';

import { RecipeService } from '../../../generated';

export default function RecipePage() {
  const { recipeId } = useParams();

  if (typeof recipeId !== 'string') {
    throw new Error('Invalid recipeId');
  }

  const { data: recipe } = useQuery({
    queryKey: ['recipeGet'],
    queryFn: () => RecipeService.recipeGet(recipeId),
  });

  return (
    <div className="flex flex-col gap-4">
      <NextLink className="text-blue-500 underline" href="/">
        Go Back
      </NextLink>
      {recipe && (
        <div>
          {recipe.id} - {recipe.name}
        </div>
      )}
    </div>
  );
}
