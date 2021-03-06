import React, { Component } from 'react';
import { TransitionMotion, spring } from 'react-motion';
import '../ReactMotion/motion.css';

class TransitionMo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    }
  }
  componentDidMount = () => {
    this.setState({
      show: false
    })
  }
  clickHandler = () => {
    this.setState({
      show: !this.state.show
    })
  }
  willEnter = styleThatEnter => {
    return { scale: 0 }
  }

  willLeave = styleThatLeft => {
    return { scale: spring(0) }
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>run</button>
        <TransitionMotion styles={this.state.show ? [{ key: 'test', style: { scale: spring(1) } }] : []}
          willEnter={this.willEnter}
          willLeave={this.willLeave}>
          {inStyles => (
            inStyles[0] ? (
              <div className="box3"
                key={inStyles[0].key}
                style={{
                  transform: `scale(${inStyles[0].style.scale},${inStyles[0].style.scale})`
                }}></div>
            ) : null
          )}
        </TransitionMotion>

      </div>
    );
  }
}

export default TransitionMo;