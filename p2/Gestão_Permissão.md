# Gestão de Usuários e Permissões no MongoDB

## Visão Geral

A gestão de usuários e permissões no MongoDB é baseada no modelo **RBAC (Role-Based Access Control)**, que controla o acesso aos recursos do banco através de funções (roles).

### Conceitos Fundamentais

**Autenticação**

* Verifica a identidade do usuário.
* Realizada através de login, senha ou mecanismos externos.

**Autorização**

* Define quais operações o usuário pode executar.
* Baseada nas roles atribuídas ao usuário.

---

# Habilitando Autenticação

## Criando o Primeiro Usuário Administrador

```javascript
db.createUser({
  user: "adminUser",
  pwd: "Fatec@2025",
  roles: [
    {
      role: "userAdminAnyDatabase",
      db: "admin"
    },
    "readWriteAnyDatabase"
  ]
})
```

---

## Ativando a Autorização

No arquivo `mongod.conf`:

```yaml
security:
  authorization: enabled
```

Após alterar:

1. Salve o arquivo.
2. Reinicie o serviço MongoDB.

---

# Principais Roles do MongoDB

## Roles de Banco de Dados

| Role                   | Descrição                                                  |
| ---------------------- | ---------------------------------------------------------- |
| `read`                 | Apenas leitura de dados                                    |
| `readWrite`            | Leitura e escrita                                          |
| `dbAdmin`              | Administração do banco (índices, validações, estatísticas) |
| `userAdmin`            | Gerenciamento de usuários                                  |
| `dbOwner`              | Controle total sobre um banco                              |
| `readAnyDatabase`      | Leitura em qualquer banco                                  |
| `readWriteAnyDatabase` | Leitura e escrita em qualquer banco                        |
| `dbAdminAnyDatabase`   | Administração de qualquer banco                            |
| `userAdminAnyDatabase` | Gerenciamento de usuários em qualquer banco                |

---

## Roles de Cluster

| Role             | Descrição                         |
| ---------------- | --------------------------------- |
| `clusterAdmin`   | Administração completa do cluster |
| `clusterManager` | Gerencia replicação e shards      |
| `clusterMonitor` | Monitoramento do cluster          |
| `hostManager`    | Gerencia instâncias MongoDB       |
| `backup`         | Permite realizar backups          |
| `restore`        | Permite restaurar backups         |

---

## Roles Especiais

| Role                   | Descrição                     |
| ---------------------- | ----------------------------- |
| `root`                 | Acesso total ao MongoDB       |
| `__system`             | Uso interno do sistema        |
| `restore`              | Operações de restauração      |
| `readWriteAnyDatabase` | Administração ampla de bancos |

---

# Consultando Roles

## Listar Todas as Roles

```javascript
db.getRoles({
  showBuiltinRoles: true
})
```

---

## Listar Apenas Roles Personalizadas

```javascript
db.getRoles({
  showBuiltinRoles: false
})
```

---

## Ver Detalhes de uma Role

```javascript
db.getRole(
  "leitorClientes",
  {
    showPrivileges: true
  }
)
```

---

# Criando Roles Personalizadas

## Exemplo: Role Apenas para Leitura da Coleção Clientes

```javascript
db.createRole({
  role: "leitorClientes",
  privileges: [
    {
      resource: {
        db: "vendas",
        collection: "clientes"
      },
      actions: ["find"]
    }
  ],
  roles: []
})
```

---

## Remover uma Role

```javascript
db.dropRole("leitorClientes")
```

---

# Gerenciando Privilégios de uma Role

## Adicionar Privilégio

```javascript
db.grantPrivilegesToRole(
  "leitorClientes",
  [
    {
      resource: {
        db: "meuBanco",
        collection: "clientes"
      },
      actions: ["count"]
    }
  ]
)
```

---

## Remover Privilégio

```javascript
db.revokePrivilegesFromRole(
  "leitorClientes",
  [
    {
      resource: {
        db: "meuBanco",
        collection: "clientes"
      },
      actions: ["find"]
    }
  ]
)
```

---

# Atribuindo Roles aos Usuários

## Conceder Role

```javascript
db.grantRolesToUser(
  "joao",
  [
    {
      role: "leitorClientes",
      db: "meuBanco"
    }
  ]
)
```

---

## Remover Role

```javascript
db.revokeRolesFromUser(
  "joao",
  [
    {
      role: "leitorClientes",
      db: "meuBanco"
    }
  ]
)
```

---

# Gerenciamento de Usuários

## Criar Usuário

```javascript
db.createUser({
  user: "joao",
  pwd: "senha123",
  roles: [
    {
      role: "readWrite",
      db: "meuBanco"
    }
  ]
})
```

---

## Consultar Usuário

### Dados de um Usuário

```javascript
db.getUser("joao")
```

### Todos os Usuários

```javascript
db.getUsers()
```

---

## Atualizar Usuário

### Alterar Senha e Roles

```javascript
db.updateUser(
  "joao",
  {
    pwd: "novaSenha456",
    roles: [
      {
        role: "read",
        db: "meuBanco"
      }
    ]
  }
)
```

### Alterar Apenas a Senha

```javascript
db.changeUserPassword(
  "joao",
  "outraSenha789"
)
```

---

## Remover Usuários

### Remover um Usuário

```javascript
db.dropUser("joao")
```

### Remover Todos os Usuários

```javascript
db.dropAllUsers()
```

---

# Boas Práticas

✅ Utilize o princípio do menor privilégio.

✅ Crie usuários específicos para cada aplicação.

✅ Separe perfis de leitura, escrita e administração.

✅ Nunca utilize o usuário `root` em aplicações.

✅ Ative autenticação em ambientes de produção.

✅ Utilize TLS/SSL para conexões seguras.

✅ Crie roles personalizadas quando necessário.

✅ Revise permissões periodicamente.

---

# Comandos Mais Importantes

| Ação              | Comando                    |
| ----------------- | -------------------------- |
| Criar usuário     | `db.createUser()`          |
| Listar usuários   | `db.getUsers()`            |
| Consultar usuário | `db.getUser()`             |
| Atualizar usuário | `db.updateUser()`          |
| Alterar senha     | `db.changeUserPassword()`  |
| Remover usuário   | `db.dropUser()`            |
| Criar role        | `db.createRole()`          |
| Consultar role    | `db.getRole()`             |
| Remover role      | `db.dropRole()`            |
| Atribuir role     | `db.grantRolesToUser()`    |
| Remover role      | `db.revokeRolesFromUser()` |

---

# Resumo Rápido

### Fluxo Básico

1. Criar usuário:

```javascript
db.createUser({
  user: "joao",
  pwd: "senha123",
  roles: [
    {
      role: "readWrite",
      db: "meuBanco"
    }
  ]
})
```

2. Consultar usuários:

```javascript
db.getUsers()
```

3. Alterar senha:

```javascript
db.changeUserPassword(
  "joao",
  "novaSenha"
)
```

4. Remover usuário:

```javascript
db.dropUser("joao")
```

### Conceito Principal

**Autenticação = Quem é o usuário.**

**Autorização = O que o usuário pode fazer.**

O MongoDB utiliza o modelo **RBAC (Role-Based Access Control)** para controlar permissões através de roles atribuídas aos usuários.
