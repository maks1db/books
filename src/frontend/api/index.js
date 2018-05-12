import client from './client';
import queryItems from './query/items';

export const getItems = (type, limit, offset) => {
    return (
        queryItems(type, limit, offset)
        |> (query => ({ query }))
        |> client.query
    );
};
