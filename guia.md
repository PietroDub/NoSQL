````md
# 📘 Resumo Progressivo — MongoDB (Slides 1 ao 6, Organizado e Corrigido)

---

# 1. Apresentação e Conceitos NoSQL

O MongoDB faz parte do universo **NoSQL (Not Only SQL)**, criado para lidar melhor com:

✔️ Grandes volumes de dados  
✔️ Flexibilidade estrutural  
✔️ Escalabilidade horizontal  
✔️ Alta disponibilidade  

---

## 🔹 Principais categorias NoSQL

---

### Chave-Valor

Armazena pares simples de chave e valor.

```json
{
  "usuario:1": "Anna"
}
````

👉 Exemplo: Redis

---

### Orientado a Documentos (MongoDB)

Armazena documentos JSON/BSON flexíveis.

```json
{
  "nome": "Anna",
  "idade": 28,
  "cidade": "Jaú"
}
```

---

### Orientado a Colunas

Organiza dados por colunas.

👉 Exemplo: Cassandra

---

### Orientado a Grafos

Ideal para relações complexas.

```txt
Anna -> conhece -> Carlos
```

👉 Exemplo: Neo4j

---

# 🚀 Vantagens do MongoDB

✔️ Schema flexível
✔️ Fácil escalabilidade
✔️ JSON intuitivo
✔️ Boa performance
✔️ Ideal para APIs e aplicações modernas

---

# 2. Introdução ao MongoDB

---

## 🔹 Equivalência SQL vs MongoDB

| SQL            | MongoDB    |
| -------------- | ---------- |
| Banco de Dados | Database   |
| Tabela         | Collection |
| Linha          | Documento  |
| Coluna         | Campo      |

---

## 🔹 Exemplo de documento

```json
{
  "_id": 1,
  "nome": "Carlos",
  "idade": 32
}
```

---

# 🔹 Operações CRUD

---

## insertOne()

```js
db.usuarios.insertOne({
  nome: "Anna",
  idade: 28
});
```

---

## insertMany()

```js
db.usuarios.insertMany([
  { nome: "Carlos", idade: 32 },
  { nome: "Marina", idade: 25 }
]);
```

---

## find()

```js
db.usuarios.find();
```

---

## Projeção

```js
db.usuarios.find(
  {},
  { nome: 1, _id: 0 }
);
```

👉 Mostra apenas `nome`

---

## findOne()

```js
db.usuarios.findOne({
  nome: "Anna"
});
```

---

# 3. Operadores

---

# 🔹 Comparação

## `$eq`

```js
db.usuarios.find({
  idade: { $eq: 28 }
});
```

---

## `$ne`

```js
db.usuarios.find({
  cidade: { $ne: "Jaú" }
});
```

---

## `$gt`, `$gte`, `$lt`, `$lte`

```js
db.usuarios.find({
  idade: { $gt: 18 }
});
```

---

## `$in`

```js
db.usuarios.find({
  cidade: { $in: ["Jaú", "Bauru"] }
});
```

---

## `$nin`

```js
db.usuarios.find({
  cidade: { $nin: ["Jaú"] }
});
```

---

# 🔹 Lógicos

## `$and`

```js
db.usuarios.find({
  $and: [
    { idade: { $gt: 18 } },
    { cidade: "Jaú" }
  ]
});
```

---

## `$or`

```js
db.usuarios.find({
  $or: [
    { cidade: "Jaú" },
    { cidade: "Bauru" }
  ]
});
```

---

## `$not`

```js
db.usuarios.find({
  idade: {
    $not: { $gt: 30 }
  }
});
```

---

# 🔹 Elemento

## `$exists`

```js
db.usuarios.find({
  telefone: { $exists: true }
});
```

---

## `$type`

```js
db.usuarios.find({
  idade: { $type: "int" }
});
```

---

# 🔹 Regex

```js
db.usuarios.find({
  nome: { $regex: "^A" }
});
```

---

# 🔹 Arrays

## `$all`

```js
db.usuarios.find({
  habilidades: { $all: ["C#", "MongoDB"] }
});
```

---

## `$size`

```js
db.usuarios.find({
  habilidades: { $size: 3 }
});
```

---

## `$elemMatch`

```js
db.pedidos.find({
  produtos: {
    $elemMatch: {
      nome: "Mouse",
      preco: { $gt: 50 }
    }
  }
});
```

---

# 4. Operadores Matemáticos

---

## `$sum`

```js
db.pedidos.aggregate([
  {
    $group: {
      _id: "$clienteId",
      totalGasto: { $sum: "$valor" }
    }
  }
]);
```

---

## `$sum: 1`

👉 Conta documentos

---

## `$subtract`

```js
{
  $subtract: ["$precoVenda", "$precoCusto"]
}
```

---

## `$multiply`

```js
{
  $multiply: ["$quantidade", "$preco"]
}
```

---

## `$divide`

```js
{
  $divide: ["$total", "$quantidade"]
}
```

---

## `$avg`

```js
{
  $avg: "$valor"
}
```

---

## `$mod`

```js
{
  $mod: ["$numero", 2]
}
```

---

# 5. Modificando Estrutura de Documentos

---

## `$set`

```js
db.usuarios.updateOne(
  { nome: "Anna" },
  { $set: { idade: 29 } }
);
```

---

## `$push`

```js
db.usuarios.updateOne(
  { nome: "Anna" },
  { $push: { hobbies: "Leitura" } }
);
```

---

## `$unset`

```js
db.usuarios.updateOne(
  { nome: "Anna" },
  { $unset: { telefone: "" } }
);
```

---

## `$pull`

```js
db.usuarios.updateOne(
  { nome: "Anna" },
  { $pull: { hobbies: "Leitura" } }
);
```

---

## deleteOne()

```js
db.usuarios.deleteOne({
  nome: "Carlos"
});
```

---

## deleteMany()

```js
db.usuarios.deleteMany({
  idade: { $lt: 18 }
});
```

---

# 6. Índices

---

# 🔹 Índice textual

```js
db.usuarios.createIndex({
  nome: "text"
});
```

---

## Busca textual

```js
db.usuarios.find({
  $text: { $search: "Anna" }
});
```

---

# 🔹 Índice geoespacial

## Criar:

```js
db.locais.createIndex({
  localizacao: "2dsphere"
});
```

---

## Listar:

```js
db.locais.getIndexes();
```

---

## Remover:

```js
db.locais.dropIndex("localizacao_2dsphere");
```

---

# 7. Aggregation Pipeline

MongoDB processa dados em etapas.

---

## `$match`

```js
db.multas.aggregate([
  {
    $match: {
      valor: { $gt: 200 }
    }
  }
]);
```

---

## `$group`

```js
db.multas.aggregate([
  {
    $group: {
      _id: "$grau",
      total: { $sum: 1 }
    }
  }
]);
```

---

## `$project`

```js
db.multas.aggregate([
  {
    $project: {
      artigo: 1,
      valor: 1
    }
  }
]);
```

---

## `$sort`

```js
{
  $sort: { valor: -1 }
}
```

---

## `$limit`

```js
{
  $limit: 5
}
```

---

## `$unwind`

```js
{
  $unwind: "$veiculos"
}
```

---

# 8. `$lookup` (JOIN no MongoDB)

---

## Exemplo:

### Multa:

```json
{
  "agenteId": "AGT1001"
}
```

### Agente:

```json
{
  "matricula": "AGT1001",
  "nome": "Anna"
}
```

---

## Consulta:

```js
db.multas.aggregate([
  {
    $lookup: {
      from: "agentes",
      localField: "agenteId",
      foreignField: "matricula",
      as: "agente"
    }
  }
]);
```

---

# 🔥 Resultado:

```json
{
  "agente": [
    {
      "nome": "Anna"
    }
  ]
}
```

---

## `$unwind`

```js
{
  $unwind: "$agente"
}
```

👉 Transforma array em objeto

---

# 9. Referência vs Embedding

---

# 🔹 Referência

```json
{
  "agenteId": "AGT1001"
}
```

---

## Melhor para:

✔️ Dados reutilizados
✔️ Atualização centralizada
✔️ Menos duplicação

---

# 🔹 Embedding

```json
{
  "agente": {
    "matricula": "AGT1001",
    "nome": "Anna"
  }
}
```

---

## Melhor para:

✔️ Leitura rápida
✔️ Dados locais
✔️ Menos joins

---

# 🎯 Regra prática

👉 Dados estáveis e locais → Embedding
👉 Dados reutilizados ou mutáveis → Referência + `$lookup`

---

# 🚀 Pipeline mental

```txt
find → match → lookup → unwind → group → project → sort → limit
```

---

# 🧠 Resumo Final

MongoDB é ideal para:

✔️ APIs modernas
✔️ Sistemas escaláveis
✔️ Dados sem schema rígido
✔️ Relatórios com aggregation
✔️ Estruturas flexíveis

---

# 🔥 Filosofia MongoDB

## SQL:

```txt
Estrutura primeiro
```

## MongoDB:

```txt
Dados primeiro
```

