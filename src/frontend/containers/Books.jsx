import { setTitle } from '../actions/app.js';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import Table from '../components/Table/Table.jsx';

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        setTitle: title => dispatch(setTitle(title))
    };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Books extends Component {
    componentDidMount() {
        this.props.setTitle('Цены на книги');
    }

    render() {
        return <Table />;
    }
}
