import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import router from './app/routes'
import cookieParser from 'cookie-parser'
import notFound from './app/middlewares/notFound'
import globalErrorHandler from './app/middlewares/globalErrorHandler'

const app: Application = express()

// parsers
app.use(express.json())
app.use(cors())
app.use(cookieParser())

// app.use('/api/v1', router)

app.get('/', (req: Request, res: Response) => {
  res.send('Yummy Server is running...')
})

//handle not found
app.use(notFound)

//global error handler
app.use(globalErrorHandler)

export default app
