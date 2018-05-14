import tableConst from '../constants/table';
import { getItems as getItemsApi } from '../api';

export const getItems = (type, pagination) => async dispatch => {
    dispatch({ type: tableConst.itemsRequest });

    const result = await getItemsApi(
        type,
        pagination.rowsPerPage,
        (pagination.page - 1) * pagination.rowsPerPage
    );

    dispatch({
        type: tableConst.itemsReceive,
        payload: result.data.items
    });
};

export const clearItems = () => ({
    type: tableConst.itemsClear
});

export const changePagination = (key, value) => ({
    type: tableConst.CHANGE_PAGINATION,
    payload: { key, value }
});
