// List
import React, { Component } from 'react';
import emitter from '../../util/events';
class List extends Component {
 constructor(props) {
  super(props);
  this.state = {
   message: 'List1',
  };
 }
 componentDidMount() {
  // 组件装载完成以后声明一个自定义事件，也就是订阅事件
  this.eventEmitter = emitter.addListener('changeMessage', (message) => {
   this.setState({
    message,
   });
  });
 }
 componentWillUnmount() {
  //取消订阅，就是销毁事件
  emitter.removeListener(this.eventEmitter);
 }
 render() {
  return (
   <div>
    {this.state.message}
   </div>
  );
 }
}
export default List;