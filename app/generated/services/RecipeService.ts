/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Recipe } from '../models/Recipe';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class RecipeService {

    /**
     * Recipe List
     * @returns Recipe Successful Response
     * @throws ApiError
     */
    public static recipeList(): CancelablePromise<Array<Recipe>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/recipes',
        });
    }

    /**
     * Recipe Get
     * @param id
     * @returns Recipe Successful Response
     * @throws ApiError
     */
    public static recipeGet(
        id: string,
    ): CancelablePromise<Recipe> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/recipes/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
