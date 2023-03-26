import React, { Component } from 'react';
import Controls from './Controls';
import Label from './Label';

class Counter extends Component {
  // поле статическоеб это обьект
  static defaultProps = {
    initialValue: 0,
  };
  // состояние это обьект
  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState({ value: 2 });
  };

  handleDecrement = () => {
    this.setState(p => ({ value: p.value + 1 }));
  };

  render() {
    const {value} = this.state
    return (
      <div>
      
        <Label currentValue={value}/>
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
        {/* <div>
          <button type="button" onClick={this.handleIncrement}>
            Increment by
          </button>
          <button type="button" onClick={this.handleDecrement}>
            Decrement by
          </button>
        </div> */}
      </div>
    );
  }
}

export default Counter;
