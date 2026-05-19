# Aula 4 — Modificando a Estrutura de Documentos no MongoDB

Nesta aula trabalhamos a modificação de documentos através do MongoDB, utilizando operações como `update`, `pop`, `add`, `each`, `set` e outras estruturas que nos permitem atualizar documentos existentes no banco de dados.

Pensando em nossos exemplos, utilizaremos um sistema de restaurante, onde a coleção `menu` contém:

- `id`
- `dish`
- `ingredients`
- `price`

```js
db.menu.insertMany([
    {
        _id: 1,
        dish: "Pizza",
        ingredients: ["Dough", "Tomato Sauce", "Cheese"],
        price: 30
    },
    {
        _id: 2,
        dish: "Sushi",
        ingredients: ["Rice", "Fish", "Cheese"],
        price: 40
    },
    {
        _id: 3,
        dish: "Taco",
        ingredients: ["Tortilla", "Beef", "Cheese"],
        price: 20
    }
])
```

Após inserir os dados no banco, vamos para os desafios.

---

# a) O restaurante decidiu aumentar o preço de todos os pratos em 10%. Atualize os preços.

```js
db.menu.updateMany(
    {},
    {
        $mul: { price: 1.1 }
    }
)
```

Aqui, como queremos atualizar todos os pratos, utilizamos o primeiro objeto vazio `{}`, indicando que não haverá filtros na consulta.

Depois utilizamos o operador `$mul`, responsável por multiplicar o valor do atributo `price` por `1.1`, aumentando o preço em 10%.

---

# b) O Taco agora vem com "Guacamole". Adicione esse ingrediente à lista `ingredients`.

```js
db.menu.updateOne(
    { dish: "Taco" },
    {
        $addToSet: {
            ingredients: "Guacamole"
        }
    }
)
```

Aqui trabalhamos apenas com um elemento, então utilizamos o método `updateOne()`.

Filtramos o prato `"Taco"` e depois utilizamos o operador `$addToSet` para adicionar `"Guacamole"` ao array `ingredients`, evitando elementos duplicados.

---

# c) O Sushi teve um reajuste e agora custa 35. Atualize esse valor.

```js
db.menu.updateOne(
    { dish: "Sushi" },
    {
        $set: {
            price: 35
        }
    }
)
```

Aqui novamente filtramos o elemento desejado e utilizamos o operador `$set` para redefinir o valor de `price` para `35`.

---

# d) O restaurante removeu "Beef" dos Tacos e substituiu por "Chicken". Atualize a lista de ingredientes do Taco.

```js
db.menu.updateOne(
    { dish: "Taco" },
    {
        $pull: {
            ingredients: "Beef"
        }
    }
)
```

```js
db.menu.updateOne(
    { dish: "Taco" },
    {
        $push: {
            ingredients: "Chicken"
        }
    }
)
```

Aqui utilizamos duas queries:

- a primeira usa o operador `$pull` para remover `"Beef"` do array `ingredients`;
- a segunda utiliza `$push` para adicionar `"Chicken"` ao final do mesmo array.