import gql from 'graphql-tag';

export default params => gql`
    mutation {
        item(
            id: ${params.id}
            title: "${params.title}"
            itemType: "${params.type}"
            orderNumber: ${params.orderNumber}
            description: "${params.description}"
            myPrice: ${params.myPrice}
            myPriceHot: ${params.myPriceHot}
            active: ${params.active}
        ) {
            id
        }
    }
`;
