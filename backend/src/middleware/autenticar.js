import jwt from 'jsonwebtoken'

export function autenticar(request, response, next) {
  const authHeader = request.headers['authorization']
  const token = authHeader && authHeader.startsWith('Bearer ')
    ? authHeader.slice(7)
    : null

  if (!token) {
    return response.status(401).json({ error: 'Acesso não autorizado. Token não fornecido.' })
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    request.usuario = payload
    next()
  } catch {
    return response.status(401).json({ error: 'Token inválido ou expirado.' })
  }
}
