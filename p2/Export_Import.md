# Importação e Exportação de Dados no MongoDB

## Visão Geral

Os comandos de importação e exportação do MongoDB permitem transferir dados entre sistemas, realizar migrações e trabalhar com arquivos externos.

### Ferramentas Principais

* **mongoimport** → Importa dados de arquivos externos para uma coleção MongoDB.
* **mongoexport** → Exporta dados de uma coleção MongoDB para arquivos JSON ou CSV.

---

# Importação de Dados com mongoimport

## Importar Arquivo JSON

```bash
mongoimport --db loja --collection produtos --file produtos.json
```

> O arquivo deve conter um documento JSON por linha.

---

## Importar JSON em Formato de Array

```bash
mongoimport \
--db loja \
--collection produtos \
--file produtos.json \
--jsonArray
```

Utilize `--jsonArray` quando o arquivo possuir o formato:

```json
[
  { "nome": "Produto 1" },
  { "nome": "Produto 2" }
]
```

---

## Importar CSV com Cabeçalho

```bash
mongoimport \
--db escola \
--collection alunos \
--type csv \
--file alunos.csv \
--headerline
```

A primeira linha do arquivo será utilizada como nome dos campos.

---

## Importar CSV sem Cabeçalho

```bash
mongoimport \
--db escola \
--collection alunos \
--type csv \
--file alunos.csv \
--fields nome,idade,turma
```

---

## Importar com Autenticação

```bash
mongoimport \
--uri="mongodb://usuario:senha@localhost:27017/escola" \
--collection alunos \
--file alunos.json
```

---

# Principais Parâmetros do mongoimport

## Conexão

| Parâmetro                  | Descrição                           |
| -------------------------- | ----------------------------------- |
| `--uri`                    | Conexão completa via URI            |
| `--host`                   | Host do servidor MongoDB            |
| `--port`                   | Porta do servidor                   |
| `--username`               | Usuário para autenticação           |
| `--password`               | Senha para autenticação             |
| `--authenticationDatabase` | Banco responsável pela autenticação |

---

## Controle de Arquivos

| Parâmetro      | Descrição                                  |
| -------------- | ------------------------------------------ |
| `--file`       | Arquivo de entrada                         |
| `--type`       | Formato do arquivo (json, csv ou tsv)      |
| `--headerline` | Usa a primeira linha como cabeçalho        |
| `--fields`     | Define os campos manualmente               |
| `--jsonArray`  | Indica que o JSON é um array de documentos |

---

## Comportamento de Inserção

| Parâmetro                  | Descrição                                          |
| -------------------------- | -------------------------------------------------- |
| `--drop`                   | Remove a coleção antes da importação               |
| `--upsert`                 | Atualiza documentos existentes ou insere novos     |
| `--upsertFields`           | Define os campos utilizados no upsert              |
| `--mode`                   | Define o modo de escrita (insert, upsert ou merge) |
| `--stopOnError`            | Interrompe ao encontrar erro                       |
| `--maintainInsertionOrder` | Mantém a ordem original dos documentos             |

---

## Performance

| Parâmetro                    | Descrição                          |
| ---------------------------- | ---------------------------------- |
| `--numInsertionWorkers`      | Número de threads paralelas        |
| `--writeConcern`             | Política de confirmação de escrita |
| `--bypassDocumentValidation` | Ignora validações da coleção       |
| `--ignoreBlanks`             | Ignora campos vazios em CSV        |

---

## Exemplo Completo de Importação

```bash
mongoimport \
--db escola \
--collection alunos \
--file alunos.csv \
--type csv \
--headerline \
--drop \
--numInsertionWorkers 4 \
--stopOnError
```

---

# mongoimport x mongorestore

| Característica   | mongoimport            | mongorestore      |
| ---------------- | ---------------------- | ----------------- |
| Entrada          | JSON, CSV, TSV         | BSON              |
| Objetivo         | Inserir dados externos | Restaurar backups |
| Preserva índices | ❌ Não                  | ✅ Sim             |
| Importa CSV      | ✅ Sim                  | ❌ Não             |
| Banco completo   | ❌ Não                  | ✅ Sim             |
| Formato legível  | ✅ Sim                  | ❌ Não             |
| Performance      | Média                  | Alta              |

## Quando usar mongoimport?

✅ Importar planilhas CSV.

✅ Importar arquivos JSON.

✅ Integrar MongoDB com outros sistemas.

✅ Inserir ou atualizar dados de forma simples.

## Quando usar mongorestore?

✅ Restaurar backups criados com mongodump.

✅ Preservar índices e configurações.

✅ Migrar bancos completos.

✅ Trabalhar com grandes volumes de dados.

---

# Exportação de Dados com mongoexport

## Exportar Coleção para JSON

```bash
mongoexport \
--db loja \
--collection produtos \
--out produtos.json
```

---

## Exportar Utilizando Filtros

```bash
mongoexport \
--db loja \
--collection produtos \
--query '{"ativo": true}' \
--out ativos.json
```

---

## Exportar para CSV

```bash
mongoexport \
--db escola \
--collection alunos \
--type=csv \
--fields nome,idade,turma \
--out alunos.csv
```

---

## Exportar com Autenticação

```bash
mongoexport \
--uri="mongodb://usuario:senha@localhost:27017/escola" \
--collection alunos \
--out alunos.json
```

---

# Principais Parâmetros do mongoexport

## Conexão

| Parâmetro                  | Descrição               |
| -------------------------- | ----------------------- |
| `--uri`                    | URI completa de conexão |
| `--host`                   | Host do servidor        |
| `--port`                   | Porta do servidor       |
| `--username`               | Usuário                 |
| `--password`               | Senha                   |
| `--authenticationDatabase` | Banco de autenticação   |

---

## Saída de Dados

| Parâmetro     | Descrição                          |
| ------------- | ---------------------------------- |
| `--out`       | Arquivo de saída                   |
| `--type`      | JSON ou CSV                        |
| `--jsonArray` | Exporta JSON como array            |
| `--pretty`    | Formata o JSON para leitura humana |

---

## Controle dos Dados Exportados

| Parâmetro        | Descrição                      |
| ---------------- | ------------------------------ |
| `--query`        | Filtra documentos              |
| `--fields`       | Define quais campos exportar   |
| `--fieldFile`    | Arquivo contendo os campos     |
| `--sort`         | Ordena os resultados           |
| `--skip`         | Ignora os primeiros documentos |
| `--limit`        | Limita a quantidade exportada  |
| `--noHeaderLine` | Remove cabeçalho do CSV        |

---

## Exemplo Completo de Exportação

```bash
mongoexport \
--db escola \
--collection alunos \
--type=csv \
--fields nome,idade,curso \
--query '{"curso":"Informática"}' \
--sort '{"idade":-1}' \
--out alunos_informatica.csv
```

---

# mongoexport x mongodump

| Característica   | mongoexport                   | mongodump       |
| ---------------- | ----------------------------- | --------------- |
| Saída            | JSON ou CSV                   | BSON            |
| Objetivo         | Compartilhar e integrar dados | Backup completo |
| Preserva índices | ❌ Não                         | ✅ Sim           |
| Exporta CSV      | ✅ Sim                         | ❌ Não           |
| Banco completo   | ❌ Não                         | ✅ Sim           |
| Formato legível  | ✅ Sim                         | ❌ Não           |
| Performance      | Média                         | Alta            |

## Quando usar mongoexport?

✅ Exportar dados para Excel, Power BI ou Pandas.

✅ Compartilhar informações em JSON ou CSV.

✅ Exportar apenas parte de uma coleção usando filtros.

✅ Integrar MongoDB com outros sistemas.

## Quando usar mongodump?

✅ Criar backups completos.

✅ Migrar bancos de dados.

✅ Preservar índices e estrutura.

✅ Restaurar posteriormente com mongorestore.

---

# Resumo Rápido

| Operação              | Ferramenta     |
| --------------------- | -------------- |
| Importar JSON/CSV     | `mongoimport`  |
| Exportar JSON/CSV     | `mongoexport`  |
| Restaurar Backup BSON | `mongorestore` |
| Criar Backup BSON     | `mongodump`    |

### Fluxo Básico

Importar dados:

```bash
mongoimport --db loja --collection produtos --file produtos.json
```

Exportar dados:

```bash
mongoexport --db loja --collection produtos --out produtos.json
```

Backup completo:

```bash
mongodump --db loja --out ./backup
```

Restauração completa:

```bash
mongorestore ./backup
```
