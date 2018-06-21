/*
* @Author: duqinzhi
* @Date:   2018-06-20 10:52:29
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-06-21 22:21:39
*/
// 加法器案例（用受控组件和非受控组件各做一个）

import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';
import PropTypes from 'prop-types';

//受控组件
class Sum extends Component{
	constructor(){
		super();
		this.state = {
			a:0,
			b:0,
			result:0
		};
	}
	handleChangeA = (event)=>{
		this.setState({
			a:parseInt(event.target.value), //获取事件源a的value,最终包裹成数字
			result:parseInt(event.target.value)+this.state.b
		})
	}
	handleChangeB = (event)=>{
		this.setState({
			b:parseInt(event.target.value), //获取事件源b的value,最终包裹成数字
			result:parseInt(event.target.value)+this.state.a
		})
	}
	render(){
		return(
			<div>
				<input type="text" value={this.state.a} onChange={this.handleChangeA} /> +
				<input type="text" value={this.state.b} onChange={this.handleChangeB}/> =
				<input type="text" value={this.state.result} />
			</div>
		)
	}
}

render(
	<Sum></Sum>,
	window.app
);