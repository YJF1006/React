/*
* @Author: duqinzhi
* @Date:   2018-06-23 09:13:32
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-06-23 11:00:08
*/
import React,{Component} from 'react';
import Message from './Message.js'
export default class MessageList extends Component{
	render(){
		return(
			<div>{/*循坏迭代父组件传的messages属性*/}
				<ul className='list-group'>
									{  
										this.props.messages.map((message,index)=>{
											return <Message message={message} index={index} removeMessage={this.props.removeMessage}></Message>
											// 把message属性、index属性、removeMessage方法 通过属性方式，传递给子组件
										})
									}
								</ul>
			</div>
		)
	}
}