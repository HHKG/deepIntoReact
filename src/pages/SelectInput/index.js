import React,{Component} from 'react';
import {Icon,Input} from 'antd';

class SelectInput extends Component{
  static dispalyName="SelectInput";
  render(){
    // const {selecedItem,isActive,onClickHeader,placeholder}=this.props;
    // const {text}=selecedItem;
    console.log(this.props);
    return(<div>
      廿三里的空间啊
      <Input></Input>
      <Icon name="angle-down"></Icon>
      {/* <div onClick={onClickHeader}>
          <Input type="text" disabled value={text} placeholder={placeholder}></Input>
          <Icon className={isActive} name="angle-down"></Icon>
      </div> */}
    </div>);
  }
}

export default SelectInput;