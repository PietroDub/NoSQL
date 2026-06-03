# Backup e Restore no MongoDB

## Visão Geral

Backup e Restore são operações essenciais para garantir a segurança, integridade e recuperação dos dados em caso de falhas, erros humanos ou migrações.

### Ferramentas Principais

* **mongodump** → Exporta dados do MongoDB para backup.
* **mongorestore** → Restaura dados a partir de backups criados com o mongodump.

---

# Backup com mongodump

## Comando Básico

```bash
mongodump --out ./backup
```

## Backup de um Banco Específico

```bash
mongodump --db loja --out ./backup
```

## Backup de uma Coleção

```bash
mongodump --db loja --collection clientes --out ./backup
```

## Backup com Autenticação

```bash
mongodump --uri="mongodb://usuario:senha@localhost:27017/loja" --out ./backup
```

## Principais Parâmetros

| Parâmetro                        | Descrição                          |
| -------------------------------- | ---------------------------------- |
| `--db`                           | Define o banco de dados a exportar |
| `--collection`                   | Exporta apenas uma coleção         |
| `--query`                        | Filtra documentos utilizando JSON  |
| `--excludeCollection`            | Exclui coleções específicas        |
| `--excludeCollectionsWithPrefix` | Exclui coleções por prefixo        |
| `--uri`                          | Conexão completa via URI           |
| `--host`                         | Define host e porta                |
| `--username` / `--password`      | Autenticação manual                |
| `--out`                          | Diretório de destino do backup     |
| `--archive`                      | Gera um único arquivo de backup    |
| `--gzip`                         | Compacta os arquivos gerados       |
| `--oplog`                        | Backup consistente em Replica Sets |
| `--readPreference`               | Escolhe o nó para leitura          |
| `--verbose`                      | Exibe detalhes da operação         |
| `--quiet`                        | Oculta mensagens                   |

## Exemplo Completo

```bash
mongodump \
--uri="mongodb://usuario:senha@localhost:27017/loja" \
--collection vendas \
--query '{"ano":2025}' \
--out ./backups/loja \
--gzip \
--archive=vendas2025.archive
```

---

# Backup Físico

Consiste em copiar diretamente os arquivos do diretório `dbPath` configurado no `mongod.conf`.

### Vantagem

* Simples e rápido.

### Desvantagem

* Não é recomendado com o servidor em execução, pois pode causar inconsistências ou corrupção de dados.

---

# MongoDB Atlas

O MongoDB Atlas oferece:

* Backups automáticos.
* Backups incrementais.
* Agendamento de backups.
* Restauração através de interface gráfica.

---

# Restore com mongorestore

## Restaurar um Banco Inteiro

```bash
mongorestore ./backup
```

## Restaurar uma Coleção Específica

```bash
mongorestore \
--db loja \
--collection vendas \
./backup/loja/vendas.bson
```

## Restaurar Sobrescrevendo Dados

```bash
mongorestore --drop ./backup
```

O parâmetro `--drop` remove os dados existentes antes da restauração.

---

## Principais Parâmetros

| Parâmetro                  | Descrição                             |
| -------------------------- | ------------------------------------- |
| `--dir`                    | Diretório contendo os arquivos BSON   |
| `--archive`                | Restaura a partir de um arquivo único |
| `--gzip`                   | Lê arquivos compactados               |
| `--db`                     | Banco de destino                      |
| `--collection`             | Coleção específica                    |
| `--nsInclude`              | Inclui namespaces específicos         |
| `--nsExclude`              | Exclui namespaces                     |
| `--drop`                   | Remove coleções antes de restaurar    |
| `--maintainInsertionOrder` | Mantém a ordem dos documentos         |
| `--preserveUUID`           | Preserva UUID das coleções            |
| `--stopOnError`            | Interrompe ao primeiro erro           |
| `--writeConcern`           | Define confirmação de escrita         |
| `--batchSize`              | Define tamanho dos lotes              |
| `--verbose`                | Exibe detalhes                        |
| `--quiet`                  | Oculta mensagens                      |

## Exemplo Completo

```bash
mongorestore \
--uri="mongodb://usuario:senha@localhost:27017" \
--db loja \
--collection vendas \
--drop \
--gzip \
--archive=vendas2025.archive
```

---

# Boas Práticas

✅ Teste periodicamente seus backups para garantir que possam ser restaurados.

✅ Automatize os backups utilizando:

* Linux: `cron`
* Windows: Agendador de Tarefas

✅ Armazene backups em locais seguros:

* Outro disco
* Servidores externos
* Serviços de nuvem

✅ Em ambientes de produção, utilize:

* Replica Sets
* Snapshots
* Estratégias de alta disponibilidade

✅ Utilize compressão (`--gzip`) para economizar espaço de armazenamento.

✅ Considere o uso do `--oplog` em Replica Sets para garantir consistência dos dados durante o backup.

---

# Resumo Rápido

| Operação                           | Ferramenta     |
| ---------------------------------- | -------------- |
| Exportar dados                     | `mongodump`    |
| Restaurar dados                    | `mongorestore` |
| Compactar backup                   | `--gzip`       |
| Gerar arquivo único                | `--archive`    |
| Sobrescrever dados existentes      | `--drop`       |
| Backup consistente em Replica Sets | `--oplog`      |

**Fluxo básico:**

1. Criar backup:

```bash
mongodump --db loja --out ./backup
```

2. Restaurar backup:

```bash
mongorestore --db loja ./backup/loja
```
