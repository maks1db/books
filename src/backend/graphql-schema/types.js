module.exports = `

    scalar Date
    type Item { 
        id: Int,
        title: String, 
        img: String,
        itemType: String,
        orderNumber: Int,
        owner: String,
        description: String 
    }

    type Price {
        id: Int,
        date: Date,
        price: Float,
        itemId: Int    
    }
    type Query {
        items (itemType: String): [Item],
        itemPrice (itemId: Int): [Price]
    }
    type Mutation {
        item (
            id: Int,
            title: String, 
            img: String,
            itemType: String,
            orderNumber: Int,
            owner: String,
            description: String 
        ): Item
        itemPrice (
            id: Int,
            date: Date,
            price: Float,
            itemId: Int
        ): Price
    }
`;
