import gql from 'graphql-tag';

export default params => gql`
    mutation {
        itemUrl(
            itMain: ${params.itMain}, 
            url: "${params.url}", 
            itemId: ${params.itemId}, 
            discount: ${params.discount || 0}, 
            id: ${params.id}
        ) {
            id
        }
    }
`;
