/*
* @Author: duqinzhi
* @Date:   2018-06-23 09:18:45
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-06-23 10:11:23
*/
import React,{Component} from 'react';
export default class MessageForm extends Component{
	handleSubmit = (event)=>{
		//不要提交表单，那么就阻止事件
		event.preventDefault();
		//获得用户名和内容的值，
		let userName = this.refs.userName.value;
		let content = this.refs.content.value;
		let message = {
			userName:userName,
			content:content,
			time:new Date()
		}
		this.props.addMessage(message)   //调用父组件传过来的addMessage方法
	}
	render(){
		return(
			<form onSubmit={this.handleSubmit}>
				<div className="form-group">{/*因为for是关键字，所以用了htmlFor*/}
					<label htmlFor="userName" className="control-label">用户名</label>
					<input type="text" className='form-control' ref='userName' />
				</div>	
				<div className="form-group">
					<label htmlFor="content" className="control-label" >内容</label>
					<input type="text" className='form-control' ref='content' />
				</div>
				<div className="form-group">
					<button className='btn btn-primary pull-right' >发言</button>				
				</div>
			</form>
		)
	}
}