import React, { Component, Fragment } from 'react';
import Animate from 'react-smooth';

class ReactSmooth extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const steps = [{
      style: {
        opacity: 0
      },
      duration: 400//该对象中的执行样式持续400s
    }, {
      style: {
        opacity: 1,
        transform: 'translate(0,0)'
      },
      duration: 1000//该对象中的执行样式持续1s
    }, {
      style: {
        transform: 'translate(100px,100px)',
      },
      duration: 1200//该对象中的执行样式持续1.2s
    }];
    return (
      <React.Fragment>
        <Animate steps={steps}>
          <div>
            动画插件 动画插件 动画插件 动画插件 动画插件 动画插件 动画插件 动画插件 动画插件 动画插件 动画插件 动画插件 动画插件 动画插件 动画插件 动画插件
          </div>
        </Animate>
        {/* 子组件可以是一个函数 */}
        <Animate from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          easing="ease-in"
        >
          {
            ({ opacity }) => <div style={{ opacity }}>子组件子组件子组件子组件子组件子组件子组件子组件子组件子组件子组件子组件子组件子组件</div>
          }
        </Animate>
      </React.Fragment>
    )
  }
}

export default ReactSmooth;