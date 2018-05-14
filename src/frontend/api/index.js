import client from './client';
import queryItems from './query/items';
import queryItemUrls from './query/itemUrls';
import mutateItem from './mutations/item';

const toQueryObj = query => ({ query });

const toMutateObj = mutate => ({ mutate });

export const getItems = (type, limit, offset) => {
    return queryItems(type, limit, offset) |> toQueryObj |> client.query;
};

export const getItemUrl = itemId => {
    return itemId |> queryItemUrls |> toQueryObj |> client.query;
};

export const saveItem = obj => {
    return obj |> mutateItem |> toMutateObj|> client.mutate;
};
