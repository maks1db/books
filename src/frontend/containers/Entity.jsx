import { setTitle as setTitleAction } from '../actions/app.js';
import { connect } from 'react-redux';
import { saveItem as saveItemAction } from '../actions/table';
import React, { Component } from 'react';
import Form from 'Entity/Form.jsx';
import BtnSave from 'Entity/BtnSave.jsx';

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        setTitle: title => title |> setTitleAction |> dispatch,
        saveItem: obj => obj |> saveItemAction |> dispatch
    };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Entity extends Component {
    componentDidMount() {
        const { match, setTitle } = this.props;

        if (match.params.id === 'new') {
            switch (match.params.type) {
            case 'books':
                setTitle('Новая книга');
                break;
            case 'item':
                setTitle('Новый товар');
                break;
            }
        }
    }

    onSave = obj => {
        const { saveItem } = this.props;
        saveItem(obj);
    }

    render() {
        return [
            <Form
                key="form"
                onSubmit={this.onSave}
            >
                <BtnSave />
            </Form>
        ];
    }
}
