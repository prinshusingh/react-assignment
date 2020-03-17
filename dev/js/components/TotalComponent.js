import React, { Component } from 'react';

class TotalComponent extends Component {
        constructor(props) {
                super(props);
        }
        render() {
                return (
                        <div className="total-panel">
                                <div className="col col-left">Total</div>
                                <div className="col">Rs {this.props.domesticTotal} (Estimate)</div>
                                <div className="col">$ {this.props.InternationalTotal} (Estimate)</div>
                        </div>
                )
        }
}
export default TotalComponent;
