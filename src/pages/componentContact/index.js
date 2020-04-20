// 没有嵌套关系的组件通讯
import React,{PropTypes, Component} from 'react';
import ReactDom from 'react-dom';
import emitter from '../../util/events';

class ListItem extends Component{
  static defaultProps={
    checked:false,
  }
  constructor(props){
    super(props);
    this.state={}
  }
  render(){
    return (
      <li>
        <input type="checkbox" checked={this.props.checked} onChange={this.props.onChange}></input>
        <span>{this.props.value}</span>
      </li>
    );
  }
}

class List extends Component{
  constructor(props){
    super(props);
    this.state={
      list:this.props.list.map(entry=>({
        text:entry.text,
        checked:entry.checked||false
      }))
    }
  }
  onItemChange(entry){
    const {list}=this.state;
    this.setState({
      list:list.map(preEntry=>({
        text:preEntry.text,
        checked:preEntry.text===entry.text?!preEntry.checked:preEntry.checked,
      }))
    });
    emitter.emit('ItemChange',entry);
  }
  render(){
    return(
      <div>
        <ul>
          {this.state.list.map((entry,index)=>(
            <ListItem key={`list-${index}`} value={entry.text} checked={entry.checked} onChange={this.onItemChange.bind(this,entry)} />
          ))}
        </ul>
      </div>
    );
  }
}


class Target extends Component{
  componentDidMount(){
    this.itemChange=emitter.on('ItemChange',(data)=>{
      console.log(data);
    })
  }
  componentWillUnmount(){
    emitter.removeListener(this.itemChange);
  }
  render(){
    return(
      <List list={[{text:1},{text:2}]} />
    )
  }
}
