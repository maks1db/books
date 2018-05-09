import appConst from '../constants/app';

const init = store => next => action => {
    if (action.type === appConst.SET_TITLE) {
        document.title = action.payload;
    }

    next(action);
};

export default init;
