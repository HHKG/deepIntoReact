// List2
import React, { Component } from 'react';
import emitter from '../../util/events';
class List2 extends Component {
  handleClick = (message) => {
    //  发布事件，也就是触发事件
    emitter.emit('changeMessage', message);
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this, 'List2')}>点击我改变List1组件中显示信息(没有嵌套关系的组件之间的通讯)</button>
      </div>
    );
  }
}
export default List2;