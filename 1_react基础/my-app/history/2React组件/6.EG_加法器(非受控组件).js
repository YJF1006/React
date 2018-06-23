/*
* @Author: duqinzhi
* @Date:   2018-06-20 10:52:29
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-06-22 09:27:39
*/

//加法器 （非受控组件,非状态元素，值不受状态控制）

import React, {Component} from 'react';
import {render} from 'react-dom';

class Sum extends Component{
	handleChange= (event)=>{
		let a = parseInt(this.a.value || 0);
		let b = parseInt(this.refs.b.value || 0);
		this.refs.result.value = a+b;
	}
	render(){
		return(   //本来onChange 事件要给a,b input和输入框绑定，为了防止代码冗余，可以直接给外层的div
			<div  onChange={this.handleChange} >
				<input  ref={ref=>this.a=ref} type="text"/> +
				<input ref='b' type="text"/> =
				<input ref='result' type="text"/>
			</div>
		)
	}
}

//渲染
render(
	<Sum></Sum>,
	window.app
);

/**扩展知识
 * 1.要是操作DOM元素，一般以下两个步骤
 *   	ref为键值对                              
 *			1. 给DOM标签里面添加ref属性      ref='属性值'       例如 ref='b'             ref={ ref=>this.属性值=ref }  例如 ref={ref=>this.a=ref}
 *			2. 想要引用该DOM的时候          this.refs.属性值    例如 this.refs.b         this.属性值                   例如  this.a
 *		ref为函数 
 *			1.  ref={ ref=>this.属性值=ref }   例如 ref={ref=>this.a=ref}
 *			2.  this.属性值                     例如  this.a
 *
 * 
 * 2.ref 等于一个函数的时候，表示当元素被挂载到页面之后会立即调用此函数，并传入渲染后的DOM元素
 *		 	ref={ ref=>this.属性值=ref }  例如 ref={ref=>this.a=ref}
 * 			this.属性值                   例如  this.a
 * 
 * 3.在React开发的时候，能看到的this都指向当前组件的实例
 */