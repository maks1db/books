import tableConst from '../constants/table';
import { getItems as getItemsApi, saveItem as saveItemApi } from '../api';

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

export const saveItem = obj => dispatch => {
    dispatch({ type: tableConst.SAVE_REQUEST });
    return saveItemApi(obj).then(x => {
        dispatch({
            type: tableConst.SAVE_COMPLETE,
            payload: x.data.item
        });
    });
};

export const clearItems = () => ({
    type: tableConst.itemsClear
});

export const changePagination = (key, value) => ({
    type: tableConst.CHANGE_PAGINATION,
    payload: { key, value }
});
