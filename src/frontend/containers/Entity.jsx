import { setTitle as setTitleAction } from '../actions/app.js';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import Form from 'Entity/Form.jsx';
import BtnSave from 'Entity/BtnSave.jsx';

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        setTitle: title => title |> setTitleAction |> dispatch
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
    render() {
        return [
            <Form
                key="form"
                onSubmit={e => {
                    var a = 1;
                    console.log(e);
                }}
            >
                <BtnSave />
            </Form>
        ];
    }
}
