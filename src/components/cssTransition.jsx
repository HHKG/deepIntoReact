import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Button } from 'antd';
import '../componentStyle/CssTransition.css';


// css动画，可以根据className的变化来实现动画效果；


class CssTransition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      list:[]
    }
  }

  //执行动画
  handleToggole = () => {
    // this.setState((prevState)=>{
    //   return{
    //     list: [...prevState.list, 'item']
    //   }
    // })
    this.setState({
      show: !this.state.show
    })
  }

  handleAddItem=()=>{
    this.setState((prevState) => {
      console.log(prevState);
        return {
            list: [...prevState.list, 'item']
        }
    })
}

  render() {
    return (
      <div>
        {/* 一个动画 */}
        <CSSTransition
          in={this.state.show}   //控制动画是否入场，boolean值为true时，动画进场，boolean为false时动画出场
          timeout={1000}         //动画执行时间
          classNames="fade"      //自定义的类名（定义动画效果，进场前，进场后直到结束，结束前，结束后）
          unmountOnExit          //可选属性，当动画出场后，在页面上移除包裹的节点
          onEnter={(el) => {
            el.style.color = 'blue' //可选属性，动画进场后的回调，el指被包裹的dom
          }}
          onExited={() => {
            //出场后的回调，可以在吃操作setSate操作
          }}
        >
          <div>玩转React Transition</div>
        </CSSTransition>
        <Button type="primary" onClick={this.handleToggole}>Animation</Button>
        
        
        {/* 一组动画 */}
        <TransitionGroup>
          {
            this.state.list.map((item, index) => {
              return (
                <CSSTransition
                  timeout={1000}
                  classNames='fade'
                  unmountOnExit
                  onEntered={(el) => { el.style.color = 'blue' }}
                  appear={true}
                  key={index}
                >
                  <div>{item}</div>
                </CSSTransition>
              )
            })
          }
        </TransitionGroup>
        <Button onClick={this.handleAddItem}>AddItem</Button>
      </div>
    )
  }
}
export default CssTransition;