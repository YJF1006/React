/*
* @Author: duqinzhi
* @Date:   2018-06-23 08:17:19
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-06-23 11:01:57
*/
import React,{Component} from 'react';
import MessageList from './MessageList.js'; //引入留言列表组件
import MessageForm from './MessageForm.js';
export default class MessageBox extends Component{
	constructor(){
		super();
		this.state = {
			messages:[]  //定义默认状态对象  messages 是消息的数组 
		};
	}
	addMessage = (message)=>{
		let messages = [...this.state.messages,message]   //新数组=老数组展开和新提交的message的合并
		this.setState({
			messages:messages
		})
	}
	//此方法从MessageBox传给MessageList,再传给Message
	removeMessage = (index)=>{ 
		//先从数组中删除指定元素
		this.state.messages.splice(index,1)
		//修改状态
		this.setState({
			messages:[...this.state.messages] 
		});
	}
	render(){
		return(
			<div className='container'>
				{/*.row>.col-sm-8.col-sm-offset-2>.panel.panel-dafault>.panel-heading+.panel-body+.panel-footer*/}
				<div className="row">
					<div className="col-sm-8 col-sm-offset-2">
						<div className="panel panel-dafault">
							<div className="panel-heading">
								<h2 className='text-center'>欢迎来到DQZ留言板</h2>
							</div>
							<div className="panel-body">
								<MessageList messages={this.state.messages} removeMessage={this.removeMessage}></MessageList> 
							</div> {/*把messages属性传给子组件,把删除方法传给子组件*/}
							<div className="panel-footer">
								<MessageForm addMessage={this.addMessage}></MessageForm>  {/*把addMessage方法传给子组件*/}
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}