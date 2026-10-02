import 'dotenv/config'
import bcrypt from 'bcrypt'
import pkg from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import pg from 'pg'

const { PrismaClient } = pkg

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

const NOME = process.env.SEED_NOME
const EMAIL = process.env.SEED_EMAIL
const SENHA = process.env.SEED_SENHA

async function main() {
  if (!NOME || !EMAIL || !SENHA) {
    console.error('❌ Defina SEED_NOME, SEED_EMAIL e SEED_SENHA no arquivo .env antes de rodar o seed.')
    process.exit(1)
  }

  const emailExistente = await prisma.usuario.findUnique({ where: { email: EMAIL } })

  if (emailExistente) {
    console.log(`✔  Usuário com e-mail "${EMAIL}" já existe. Nenhuma ação necessária.`)
    return
  }

  const senha_hash = await bcrypt.hash(SENHA, 12)

  const usuario = await prisma.usuario.create({
    data: { nome: NOME, email: EMAIL, senha_hash },
  })

  console.log(`✔  Usuário criado com sucesso: ${usuario.nome} (${usuario.email})`)
}

main()
  .catch((error) => {
    console.error('Erro ao criar usuário:', error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
    await pool.end()
  })
