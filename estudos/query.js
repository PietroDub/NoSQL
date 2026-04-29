use("my-db");

db.customers.find()

// how to list all sales from store A

db.sales.aggregation([
    {
        $match:{
            store: "A"
        }
    }
])

// the last 2 sales

db.sales.aggregation([
    {
        $sort:{
            date: -1
        }
    },
    {
        $limit: 2
    }
])

// vendas por item

db.sales.aggregation([
    {
        $group: {
            _id: "$item",
            total_quantity: {
                $sum: "$quantity"
            }
        }
    }
])

// como eu pego o total vendido combinando loja e categoria

db.sales.aggregation([
    {
        $group: {
            _id:{
                store: "$store",
                category: "$category"
            },
            total_quantity: {
                $sum: "$quantity"
            }
        }
    }
])