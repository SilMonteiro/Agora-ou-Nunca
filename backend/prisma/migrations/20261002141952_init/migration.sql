
CREATE TABLE "usuarios" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha_hash" TEXT NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);


CREATE TABLE "publicacoes" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "resumo" TEXT,
    "conteudo" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "imagem_url" TEXT,
    "status" TEXT NOT NULL DEFAULT 'rascunho',
    "publicado_em" TIMESTAMP(3),
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP(3) NOT NULL,
    "autor_id" TEXT NOT NULL,

    CONSTRAINT "publicacoes_pkey" PRIMARY KEY ("id")
);


CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");


CREATE UNIQUE INDEX "publicacoes_slug_key" ON "publicacoes"("slug");


ALTER TABLE "publicacoes" ADD CONSTRAINT "publicacoes_autor_id_fkey" FOREIGN KEY ("autor_id") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;
