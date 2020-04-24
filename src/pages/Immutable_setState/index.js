import React,{Component} from 'react';
import lodsh from 'lodash';

class ImmutableSetState extends Component{
  constructor(props){
    super(props);
    this.state={
      data:{times:0}
    }
  }
  componentDidMount=()=>{
    this.handleApp();
  }
  handleApp=()=>{
    let data=lodsh.cloneDeep(this.state.data);
    data.times=data.times+1;
    this.setState({
      data:data
    });
    console.log('this.state.data.times',this.state.data.times)
  }
  render(){
    return(<div onClick={this.handleApp}>
      使用lodsh深拷贝state;
    </div>)
  }
}
export default ImmutableSetState;
