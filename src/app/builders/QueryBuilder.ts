/* eslint-disable prefer-const */
import { FilterQuery, Query } from 'mongoose'

export class QueryBuilder<T> {
  public query: Record<string, unknown> //payload
  public modelQuery: Query<T[], T>

  constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
    this.query = query
    this.modelQuery = modelQuery
  }

  // get the total count before pagination
  async getFilteredCount() {
    const countQuery = this.modelQuery.model.find(this.modelQuery.getQuery())
    return await countQuery.countDocuments()
  }

  search(searchableFields: string[]) {
    let searchTerm = ''

    if (this.query?.searchTerm) {
      searchTerm = this.query.searchTerm as string
    }
    // {title: {$regex: searchTerm}}
    // {genre: {$regex: searchTerm}}
    this.modelQuery = this.modelQuery.find({
      $or: searchableFields.map(
        (field) =>
          ({
            [field]: new RegExp(searchTerm, 'i'),
          }) as FilterQuery<T>,
      ),
    })
    return this
  }
  paginate() {
    let limit = Number(this.query?.limit || 10)

    let skip = 0

    if (this.query?.page) {
      const page = Number(this.query?.page || 1)
      skip = Number((page - 1) * limit)
    }

    this.modelQuery = this.modelQuery.skip(skip).limit(limit)

    return this
  }
  sort() {
    let sortBy = '-createdAt'

    if (this.query?.sortBy) {
      sortBy = this.query.sortBy as string
    }

    this.modelQuery = this.modelQuery.sort(sortBy)
    return this
  }
  fields() {
    let fields = ''

    if (this.query?.fields) {
      fields = (this.query?.fields as string).split(',').join(' ')
    }

    this.modelQuery = this.modelQuery.select(fields)
    return this
  }
  filter() {
    const queryObj = { ...this.query }
    const excludeFields = ['searchTerm', 'page', 'limit', 'sortBy', 'fields']

    excludeFields.forEach((e) => delete queryObj[e])

    // Remove any fields with null, undefined, or empty values
    Object.keys(queryObj).forEach((key) => {
      if (
        queryObj[key] == null ||
        queryObj[key] === undefined ||
        queryObj[key] === ''
      ) {
        delete queryObj[key]
      }
    })

    // Apply the sanitized query object
    this.modelQuery = this.modelQuery.find(queryObj as FilterQuery<T>)

    return this
  }
}
