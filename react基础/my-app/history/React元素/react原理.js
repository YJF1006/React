/*
 * @Author: duqinzhi
 * @Date:   2018-06-20 10:52:29
 * @Last Modified by:   duqinzhi
 * @Last Modified time: 2018-06-21 09:24:50
 */
import React from 'react';
import ReactDOM from 'react-dom';

/**
 * 1.react 是一个用户界面的库
 * 2.React元素  JSX元素  其实就是一个用JS来描述界面的对象
 * 		<div><span>hello</span></div>
 * 		
 */

//JSX
ReactDOM.render( //渲染的时候把虚拟DOM转换成真实的DOM，然后插入root容器中
	<div><span>hello</span></div>,
	document.querySelector('#root')
);

//经过webpack转译之后变成下列形式
ReactDOM.render(
	React.createElement('div', null, [React.createElement('span', null, ['hello'])]), //是个方法有返回值是js对象
	document.querySelector('#root')
);

/*js对象 
{
	type:'div',
	props:{
		children:[
			{
				type:'span',
				props:{
					children:['hello']
				}
			}
		]
	}
	
}
 */