# 2) Crie uma coleção de 100 mil documentos e registre o
# tempo de consulta sem índices e depois com índices:

```js
for (let i = 0; i < 100000; i++) {
  db.usuarios.insertOne({
    nome: `Usuario${i}`,
    email: `usuario${i}@email.com`,
    idade: Math.floor(Math.random() * 80) + 18,
  });
}.explain("executionStats");

```
## inserimos aqui 100.000 usuários sem índice
## agora iremos rodar e ver o output, e quanto tempo demorou

# Inserindo Indexes
## inserimos abaixo index para todos o s usuários

```js
    for(let i = 0; i =< 100000; i++) {
        db.usuarios.createIndex(
            {id: i}
        )
    }
```
## depois realize o mesmo teste com o indice

```js
for (let i = 0; i < 100000; i++) {
  db.usuarios.insertOne({
    nome: `Usuario${i}`,
    email: `usuario${i}@email.com`,
    idade: Math.floor(Math.random() * 80) + 18,
  }).hint({
nome: 1, status: 1 }).explain("executionStats")
}
```