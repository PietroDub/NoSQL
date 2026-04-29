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

// valor total por conmpra

db.sales.aggregation([
    {
        $group:{
            _id: 1,
            total_by_sale: {
                $sum:{
                    $multiply: ["$price", "$quantity"]
                }
            }
        }
    }
])

// adicionar um campo com essa mult

db.sales.aggregation([
    {
        $addFields:{
            revenue: {
                $multiply: ["$price", "$quantity"]
        },
            otherfield: "abc"
    }
    }
])

//quantidade média de vendas por loja
db.sales.aggregation([
    {
        $group:{
            loja: "$store",
            media_venda: {
                $avg: "$quantity"
            }
        }
    }
])

// vendas depois de 2024-06-01T12:00:00Z

db.sales.aggregation([
    {
        $match:{
            date: {$gte: ISODate('2024-06-01T12:00:00Z') }
        }
    }
])

// tratar usuario
db.sales.aggregation([
    {
        $lookup:{
            from: "customers",
            localfield: "customer_id",
            foreignField: "_id",
            as: "customer"
        }
    }, 
    {
        $unwind: "$customer"
    },
    {
        $project: {
            item:1,
            store: 1,
            customer_name: "$customer.name",
            date: 1,
            _id: 0
        }
    }, 
    // filtrar 
    {
        $match: {
            "customer.loyality": true
        }
    }
])

// quantidade por dia

db.sales.aggregation([
    {
        $group:{
            date: "$date",
            quantidade: "$quantity"
        }
    }
])

//forma correta

db.sales.aggregate([
  {
    $group: {
      _id: {
        $dateToString: {
          format: "%Y-%m-%d",
          date: "$date"
        }
      },
      totalQuantity: {
        $sum: "$quantity"
      }
    }
  }
])