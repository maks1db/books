import tableConst from '../constants/table';
const initialState = {
    items: {
        data: [],
        isFetching: false
    },
    pagination: {
        page: 1,
        rowsPerPage: 10
    }
};
const R = require('ramda');

export default (state = initialState, action) => {
    switch (action.type) {
    case tableConst.itemsRequest:
        return R.assocPath(['items', 'isFetching'], true, state);

    case tableConst.itemsReceive:
        return (
            R.assocPath(['items', 'data'], action.payload, state)
                |> R.assocPath(['items', 'isFetching'], false, R.__)
        );
    case tableConst.itemsClear:
        return R.assocPath(['items', 'data'], [], state);
    case tableConst.CHANGE_PAGINATION:
        return R.assocPath(
            ['pagination', action.payload.key],
            action.payload.value,
            state
        );
    }

    return state;
};
