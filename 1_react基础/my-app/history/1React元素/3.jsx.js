//有条件的渲染（如果是空字符串就不渲染在页面上了）
import React from 'react';
import ReactDOM from 'react-dom';
let names = ['dqz', '', 'yjf'];
//{} 里放的是JS表达式，表达式是由变量运行符组合而成的     1+1   a+b  fn(1) 必须返回一个值
ReactDOM.render(
	//map返回一个新数组，里面有span  (加上key属性，使得每一个都变得唯一)
	<div>
		{
			names.map((item, index) => {   //有值就返回span，没有(空字符串)就返回null
				return item.length>0 ? <span key={index} style = {{backgroundColor:"pink"}}  className='red'> {item}</span> : null
			})  //这里style 里面写的是个对象，但是渲染出来还是backgroun-color:pink ,class= 'red'
		}
	</div>,
	document.querySelector('#root')
);