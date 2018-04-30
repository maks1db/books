module.exports = `
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
        
    }
    type Query {
        items (itemType: String): [Item]
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
    }
`;
