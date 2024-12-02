import { IRating } from './rating.interface'
import { Rating } from './rating.model'

const createRatingIntoDB = async (payload: IRating) => {
  const result = await Rating.findOneAndUpdate(
    {
      recipe: payload.recipe,
      user: payload.user,
    },
    { ratingCount: payload.ratingCount },
    { upsert: true, new: true },
  )
  return result
}

// get rating average
const getAverageRatingFromDB = async (id: string) => {
  const ratings = await Rating.find({ recipe: id })

  // calculate average rating
  if (ratings.length === 0) {
    return 0
  }

  const totalRating = ratings.reduce(
    (totalRating, rating) => (totalRating += rating.ratingCount),
    0,
  )
  const averageRating = parseFloat((totalRating / ratings.length).toFixed(2))
  return averageRating
}

const getSingleRatingIntoDB = async (recipe: string, user: string) => {
  const result = await Rating.findOne({
    recipe,
    user,
  })
  return result
}

export const RatingServices = {
  createRatingIntoDB,
  getAverageRatingFromDB,
  getSingleRatingIntoDB,
}
