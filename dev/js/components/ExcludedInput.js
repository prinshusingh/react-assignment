import React, { Component } from 'react';

class ExcludedInput extends Component {
        constructor(props) {
                super(props);
                this.state = {
                    name:""
                }
        }
        render() {
            var _this = this;
                return (
                        <div className="excluded-panel">
                                <div className="col col-left"><input onKeyUp={(e) => {
                                    _this.setState({ name: e.target.value }, () => {
                                            _this.props.setName(this.props.index, this.state.name);
                                    })

                            }}
                                    type="text" placeholder="Name" /></div>
                        </div>
                )
        }
}
export default ExcludedInput;
