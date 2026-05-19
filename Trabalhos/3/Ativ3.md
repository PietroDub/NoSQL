# Aula 3 — Operadores no MongoDB

Na aula 3 trabalhamos principalmente com operadores, que são, assim como na matemática, instruções que manipulam elementos, sendo utilizados para filtrar, modificar ou adicionar dados.

Agora vou mostrar na prática como isso funciona.

Aqui temos uma coleção de produtos, que possui os seguintes campos:

- `id`
- `nome`
- `categoria`
- `preco`
- `estoque`
- `avaliacao`

---

# 1) Utilize o operador `$gte` para encontrar todos os produtos com preço maior ou igual a 2000.

```js
db.produtos.find({ "preco": { "$gte": 2000 } })
```
Aqui acessamos a coleção produtos e utilizamos o método find() para buscar elementos onde a propriedade preco seja maior ou igual a 2000.

---

# 2) Filtre os produtos que pertencem à categoria "Móveis" e possuem avaliação superior a 4.5 usando $and.

```js
db.produtos.find({
    "$and": [
        { "categoria": "Móveis" },
        { "avaliacao": { "$gt": 4.5 } }
    ]
})
```
## duas condições:
a categoria deve ser igual a "Móveis";
a avaliação deve ser maior que 4.5.

--- 

# 3) Use $or para retornar todos os produtos que custam menos de 2000 ou têm estoque maior que 20.

```js
db.produtos.find({
    "$or": [
        { "preco": { "$lt": 2000 } },
        { "estoque": { "$gt": 20 } }
    ]
})
```
## Aqui buscamos todos os produtos que atendam a pelo menos uma das duas condições:

preço menor que 2000;
estoque maior que 20.

---

# 4) Escreva uma consulta que retorne apenas os produtos que possuem o campo avaliacao.

```js
db.produtos.find({
    "avaliacao": { "$exists": true }
})
```

Aqui utilizamos o operador $exists para verificar se um campo existe no documento. Nesse caso, retornamos apenas os produtos que possuem o campo avaliacao.
