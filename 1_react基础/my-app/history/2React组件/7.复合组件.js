/*
* @Author: duqinzhi
* @Date:   2018-06-20 10:52:29
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-06-22 15:50:51
*/

/*复合组件(做一个面板组件模仿bootstrap里面的面板组件)（此案例是一个大组件里面嵌套三个小组件）
* 1. 属性传递的时候要一层一层的传递，不知直接传给孙子 
*/

import React,{Component} from 'react';
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

class Panel extends Component{
	constructor(){
		super();
		this.state = {color:'block'}
	}
	changeRed = ()=>{
		this.setState({color:'red'})
	}
	changeGreen = ()=>{
		this.setState({color:'green'})
	}

	render(){
		return(   
			<div className='panel panel-default'> 
				<button onClick={this.changeRed}>红</button>  <button onClick={this.changeGreen}>绿</button>
				<PanelHead color={this.state.color} head={this.props.head}></PanelHead>
				<PanelBody color={this.state.color}body={this.props.body}></PanelBody>
				<PanelFooter color={this.state.color}footer={this.props.footer}></PanelFooter>
			</div>
		)/*此处的this.state.color 是取自己里面的状态 并且属性名命名为color*/
	}

}
class PanelHead extends Component{  
	render(){
		return <div style={{color:this.props.color}}className='panel-heading'>{this.props.head}</div>
	} /*此处的 this.props.color是取继承于父级的属性color  给style */
}
class PanelBody extends Component{
	render(){
		return <div style={{color:this.props.color}} className='panel-body'>{this.props.body}</div>
	}
}
class PanelFooter extends Component{
	render(){
		return <div style={{color:this.props.color}} className='panel-footer'>{this.props.footer}</div>
	}
}

render(
	<Panel head="头" body="体" footer="尾" ></Panel>,
	window.app
);