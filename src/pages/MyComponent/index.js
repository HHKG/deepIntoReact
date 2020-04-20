//需要用高阶组件中的peops的组件
import React,{Component} from 'react';
import MyContainer from '../Mycontainer/index';

@MyContainer
class MyComponent extends Component{
  componentDidMount=()=>{
    console.log(this.props)
  }
  render(){
    return <input name="MyComponent" {...this.props.name} onChange={this.props.name.onChange}></input>
  }
}
export default MyComponent;