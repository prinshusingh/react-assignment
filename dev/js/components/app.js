import React, { Component } from 'react';
import InputComponent from './InputComponent';
import TotalComponent from './TotalComponent';
import ExcludedInput from './ExcludedInput';
require('../../scss/style.scss');


class App extends Component {
        constructor() {
                super();
                this.date = new Date().toDateString();
                this.state = {
                        priceList: [],
                        domesticTotal: 0,
                        InternationalTotal: 0,
                        nameList: [],
                        output: ""
                }
                this.setData = this.setData.bind(this);
                this.setName = this.setName.bind(this);
        }

        clearInputComp(data) {
                data.forEach((element, index) => {
                        if (data.length && element.domecticAmnt.length < 1 && element.internationalAmnt.length < 1 && element.name.length < 1) {
                                data.pop();
                        }
                });
        }

        calculateTotal(list) {
                let domAmm = 0;
                let intAmm = 0;
                list.forEach((element) => {
                        domAmm += parseInt(element.domecticAmnt || 0);
                        intAmm += parseInt(element.internationalAmnt || 0);
                })
                return { domAmm, intAmm }
        }

        onSubmit() {

                let output = {
                        included: this.state.priceList,
                        excluded: this.state.nameList
                }
                this.setState({ output: JSON.stringify(output, null, '\t') })
        }

        setName(index, name) {
                let names = this.state.nameList;
                names[index] = name;
                if (!name) {
                        names.pop();
                }
                this.setState({ nameList: names });
        }

        setData(index, obj) {
                let list = this.state.priceList;
                list[index] = obj;
                this.clearInputComp(list);
                let totals = this.calculateTotal(list)
                this.setState({ priceList: list, domesticTotal: totals.domAmm, InternationalTotal: totals.intAmm });
        }

        render() {
                let inputComp = [];
                let nameComp = [];
                for (let i = 0; i < this.state.priceList.length + 1; i++) {
                        inputComp.push(<InputComponent key={i} index={i} setData={this.setData} />);
                }
                for (let i = 0; i < this.state.nameList.length + 1; i++) {
                        nameComp.push(<ExcludedInput key={i} index={i} setName={this.setName} />);
                }

                return (<div className="conatainer">
                        <div className="header">
                                <div className="left-panel"><p>Included</p></div>
                                <div className="right-panel"><p>{this.date}</p></div>
                        </div>
                        <div className="main-cointainer">
                                <div className="main-heading">
                                        <div className="col col-left">Name</div>
                                        <div className="col">Ammount - Domestic</div>
                                        <div className="col">Ammount - International</div>
                                </div>
                                {inputComp}

                                <TotalComponent domesticTotal={this.state.domesticTotal} InternationalTotal={this.state.InternationalTotal} />
                        </div>
                        <div className="cointainer-down">
                                <div className="title-below">Excluded</div>
                                <div className="main-cointainer">
                                        <div className="main-heading">
                                                <div className="col col-left">Name</div>
                                        </div>
                                        {nameComp}
                                </div>
                        </div>

                        <button onClick={this.onSubmit.bind(this)} className="submit-button">Submit</button>

                        {this.state.output && <div> prices = {this.state.output}</div>}
                </div>)
        }
}
export default App;
