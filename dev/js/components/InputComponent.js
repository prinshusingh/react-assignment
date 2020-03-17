import React, { Component } from 'react';

class InputComponent extends Component {
        constructor(props) {
                super(props);
                this.state = {
                        name: "",
                        domecticAmnt: "",
                        internationalAmnt: "",
                }
        }
        render() {
                var _this = this;
                return (
                        <div className="input-panel">
                                <div className="col col-left"><input onKeyUp={(e) => {
                                        _this.setState({ name: e.target.value }, () => {
                                                this.props.setData(this.props.index, this.state);
                                        })

                                }}
                                        type="text" placeholder="Name" /></div>
                                <div className="col">Rs<input onKeyUp={(e) => {
                                        _this.setState({ domecticAmnt: e.target.value }, () => {
                                                this.props.setData(this.props.index, this.state);
                                        })

                                }}
                                        type="number" placeholder="Amount" /></div>
                                <div className="col">$<input onKeyUp={(e) => {
                                        _this.setState({ internationalAmnt: e.target.value }, () => {
                                                this.props.setData(this.props.index, this.state);
                                        })

                                }}
                                        type="number" placeholder="Amount" /></div>
                        </div>
                )
        }
}
export default InputComponent;
