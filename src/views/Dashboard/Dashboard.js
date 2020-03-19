/* eslint @typescript-eslint/explicit-function-return-type:0 */
/* eslint prefer-spread:0 */

import React, { Component } from 'react';
import {
    Col,
    Row,
} from 'reactstrap';

import { dispatch } from "react-redux";
import store from "../../store"

class Dashboard extends Component {
    constructor(props) {
        super(props);
        store.dispatch({ type: 'VULCAN/TODOS_FETCH', data: "test" })
        console.log(store)
    }


    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>;

    render() {
        const parent = this;
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col>
                        Hello World
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Dashboard;
