import { z } from 'zod'
import { POST_STATUS } from './recipe.constant'

const createRecipeValidationSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
    image: z.string({
      required_error: 'Image is required',
    }),
    content: z.string({
      required_error: 'Content is required',
    }),
    user: z.string({
      required_error: 'User is required',
    }),
    status: z.nativeEnum(POST_STATUS).default(POST_STATUS.UNPUBLISHED),
  }),
})

const updateRecipeValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    image: z.string().optional(),
    content: z.string().optional(),
  }),
})

const changeRecipeStatusValidationSchema = z.object({
  body: z.object({
    status: z.nativeEnum(POST_STATUS, {
      message: 'Status is not valid format',
    }),
  }),
})

export const RecipeValidation = {
  createRecipeValidationSchema,
  updateRecipeValidationSchema,
  changeRecipeStatusValidationSchema,
}
