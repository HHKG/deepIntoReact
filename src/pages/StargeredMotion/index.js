import React, { Component } from 'react';
import { StaggeredMotion, spring, presets } from 'react-motion';
import '../ReactMotion/motion.css';
// 用StaggeredMotion 实现一个联动动画
class StargeredMotionCom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      length: 10
    }
  }
  addLength = () => {
    let newLength;
    if (this.state.length) {
      newLength = 0;
    } else {
      newLength = 10;
    }
    this.setState({
      length: newLength
    })
  }
  render() {
    let boxes = [];
    for (let i = 0, len = this.state.length; i < len; i++) {
      boxes.push({ scale: 0 })
    }
    return (
      <React.Fragment>
        <div>
          {this.state.length > 0 ? (
            <StaggeredMotion defaultStyles={boxes} styles={prevStyles => prevStyles.map((item, i) => i === 0?{scale: spring(1, { ...presets.noWobble })}:prevStyles[i - 1])}>
              {interpolatingStyles =>
                <div>
                  {interpolatingStyles.map((item, i) => {
                    return (
                      <div className="box2" key={i} style={{transform: `scale(${item.scale}, ${item.scale})`}}></div>)})
                  }
                </div>
              }
            </StaggeredMotion>
          ) : null}
        </div>
        <button onClick={this.addLength}>run</button>
      </React.Fragment>
    )
  }
}
export default StargeredMotionCom;