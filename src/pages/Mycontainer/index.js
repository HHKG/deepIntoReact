// 高阶组件 myContainer
import React,{Component} from 'react';

const MyContainer =(WrappedComponent)=>{
  class extends Component{
    constructor(props){
      super(props);
      this.state={
        name:'',
      };
      this.onNameChange=this.onNameChange.bind(this);

    }
    onNameChange(event){
      this.setState({
        name:event.target.value,
      })
    }
    render(){
      const newProps={
        name:{
          value:this.state.name,
          onChange:this.onNameChange
        }
      }
      return <WrappedComponent {...this.props} {...newProps}></WrappedComponent>
    }
  }
}