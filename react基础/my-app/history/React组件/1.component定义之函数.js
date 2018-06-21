/*
 * @Author: duqinzhi
 * @Date:   2018-06-20 10:52:29
 * @Last Modified by:   duqinzhi
 * @Last Modified time: 2018-06-21 16:44:46
 */
import React from 'react';
import ReactDOM from 'react-dom';

/**
 * 组件的2中定义方式，以及他们之间的区别
 * 	1. 第一种方式：函数  参数是属性对象  {msg:'hello',id:'5'}
 * 		1.1 组件的首字母一定是大写
 * 		1.2 组件定义完之后可以像React元素一样，使用和React元素一样
 * 		1.3 函数方式声明的组件是静态的，是不能动的（Clock时钟案例就不能用函数定义组件）
 * 组件的渲染过程：
 * 	1. 封装props对象
 * 	2. 调用组件函数，得到返回的React元素
 * 	3. ReactDOM把React元素转成真实的DOM元素并且插入到目标容器内部
 */

let Message = props => {
	console.log(props);
	return <h1 style={props.style}> {props.msg} </h1> //返回React元素,最终渲染的不是Message，而是返回的这一行
};
/*解构赋值的方法
let Message = {msg,id} => {
	return <h1>{msg}</h1>
}*/

ReactDOM.render(
	<Message msg='hello' id='5' style={{color:'red'}}/>,
	window.app
);