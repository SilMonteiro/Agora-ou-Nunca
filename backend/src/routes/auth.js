import { Router } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { prisma } from '../db.js'
import { autenticar } from '../middleware/autenticar.js'

export const authRouter = Router()

authRouter.post('/login', async (request, response) => {
  const { email, senha } = request.body

  if (!email || !senha) {
    return response.status(400).json({ error: 'E-mail e senha são obrigatórios.' })
  }

  try {
    const usuario = await prisma.usuario.findUnique({
      where: { email },
    })

    if (!usuario) {
      return response.status(401).json({ error: 'Credenciais inválidas.' })
    }

    const senhaCorreta = await bcrypt.compare(senha, usuario.senha_hash)

    if (!senhaCorreta) {
      return response.status(401).json({ error: 'Credenciais inválidas.' })
    }

    const token = jwt.sign(
      { id: usuario.id, nome: usuario.nome, email: usuario.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
    )

    return response.json({
      token,
      usuario: {
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email,
      },
    })
  } catch (error) {
    console.error('[auth/login]', error)
    return response.status(500).json({ error: 'Erro interno no servidor.' })
  }
})


authRouter.post('/logout', autenticar, (_request, response) => {
  return response.json({ mensagem: 'Logout realizado com sucesso.' })
})


authRouter.get('/me', autenticar, async (request, response) => {
  try {
    const usuario = await prisma.usuario.findUnique({
      where: { id: request.usuario.id },
      select: {
        id: true,
        nome: true,
        email: true,
        criado_em: true,
      },
    })

    if (!usuario) {
      return response.status(404).json({ error: 'Usuário não encontrado.' })
    }

    return response.json({ usuario })
  } catch (error) {
    console.error('[auth/me]', error)
    return response.status(500).json({ error: 'Erro interno no servidor.' })
  }
})
