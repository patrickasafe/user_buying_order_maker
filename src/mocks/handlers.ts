import { rest } from 'msw'

import { products } from './data/products'

export const handlers = [

  // Handles a POST /login request
  // rest.post('/products', null),

  // Handles a GET /user request
  rest.get('http://localhost:8000/api/products/list/', (req, res, ctx) => {
    // Return products fixture
    return res(
      ctx.status(200),
      ctx.json(products),
    )
  }),

]