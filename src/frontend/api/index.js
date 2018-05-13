import client from './client';
import queryItems from './query/items';
import mutateItem from './mutations/item';

const toQueryObj = query => ({ query });

export const getItems = (type, limit, offset) => {
    return queryItems(type, limit, offset) |> toQueryObj |> client.query;
};

export const saveItem = obj => {
    return obj |> mutateItem |> toQueryObj |> client.mutate;
};
