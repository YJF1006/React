/*
 * @Author: duqinzhi
 * @Date:   2018-06-20 10:52:29
 * @Last Modified by:   duqinzhi
 * @Last Modified time: 2018-06-21 09:30:49
 */
import React from 'react';
import ReactDOM from 'react-dom';
/*react是由React元素 和 React组件构成
1.首字母小写，凡是首字母小写的都会被认为是React元素
2.React元素的属性不能随便写，要写原生DOM里面有的属性，例如 id  className  style 等等
*/
ReactDOM.render(
	<div><span className='red' style={{backgroundColor:'pink'}}>hello</span></div>,
	document.querySelector('#root')
);