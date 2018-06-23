/*
* @Author: duqinzhi
* @Date:   2018-06-23 10:48:12
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-06-23 10:58:26
*/

/*列表里面的一个消息*/
import React,{Component} from 'react';
export default class Message extends Component{
	render(){
		let {message,index} = this.props;  //把messsage和index从props解构出来，下面用的时候就不用写很长了
		return(   //pull-right  向右浮动
				<li className='list-group-item' key={index}>
					{message.userName}:{message.content}
					<button className='btn btn-danger btn-xs'
						onClick={()=>this.props.removeMessage(index)}>删除</button>
					<span className='pull-right'>{message.time.toLocaleString()}</span>  {/*转成字符串或者数字显示*/}
				</li>
		)
	}
}