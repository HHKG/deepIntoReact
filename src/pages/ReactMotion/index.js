import React,{Component} from 'react';
import {Motion,spring,presets} from 'react-motion';
import './motion.css';

class ReactMotion extends Component{
  constructor(props){
    super(props);
    this.state={
      left:0
    }
  }
  clickHandler=()=>{
    let targetX=0;
    if(this.state.left===0){
      targetX=200;
    }else{
      targetX=0;
    }
    this.setState({
      left:targetX
    })
  }
  componentDidMount=()=>{
    this.clickHandler();
  }
  render(){

    const box={
    
        width:'100px',
      height:'100px',
      backgroundColor:'#000'
      
    }
    return(
      <div className="container">
        <Motion style={{x:spring(this.state.left,presets.wobbly)}}>
          {
            interpolatingStyle=>{
              return(
                <div
                style={{transform:`translateX(${interpolatingStyle.x}px)`}}
                className='box'
                ></div>
              )
            }
          }

        </Motion>
        <button onClick={this.clickHandler}>run</button>

      </div>
    )
  }
}

export default ReactMotion;