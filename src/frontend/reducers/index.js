import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as toastr } from 'react-redux-toastr';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    toastr,
    routing: routerReducer,
    form: formReducer
});
