import tableConst from '../constants/table';
import { getItems as getItemsApi } from '../api';

export const getItems = (type, pagination) => dispatch => {
    dispatch({ type: tableConst.itemsRequest });

    getItemsApi(
        type,
        pagination.rowsPerPage,
        (pagination.page - 1) * pagination.rowsPerPage
    ).then(x =>
        dispatch({
            type: tableConst.itemsReceive,
            payload: x.data.items
        })
    );
};

export const clearItems = () => ({
    type: tableConst.itemsClear
});

export const changePagination = (key, value) => ({
    type: tableConst.CHANGE_PAGINATION,
    payload: { key, value }
});
