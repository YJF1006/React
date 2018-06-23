/*
* @Author: duqinzhi
* @Date:   2018-06-20 10:52:29
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-06-22 08:23:25
*/

//双向数据绑定

import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';
import PropTypes from 'prop-types';
/**受控组件：输入框的值受当前状态控制
 *非受控组件:不受状态的控制
 *
 * 
 */
class Input extends Component{
	constructor(){
		super();
		this.state = {val:''};
	}
	handleChange=(event)=>{
		let val = event.target.value;  //event.target拿到事件源
		this.setState({val});
	}
	//渲染
	render(){
		return (
			<div>
				<p>{this.state.val}</p>
				<input onChange= {this.handleChange} type="text" value = {this.state.val}/>
			</div>

		)
	}
};
render(
	<Input></Input>,
	window.app
);