import 'dotenv/config'
import cors from 'cors'
import express from 'express'

const app = express()
const port = Number(process.env.PORT) || 3000
const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:5173'

app.use(cors({ origin: frontendUrl }))
app.use(express.json())

app.get('/api/health', (_request, response) => {
  response.json({
    status: 'ok',
    service: 'agora-ou-nunca-backend',
    timestamp: new Date().toISOString(),
  })
})

app.listen(port, () => {
  console.log(`Backend rodando em http://localhost:${port}`)
})
