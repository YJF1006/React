import React from 'react';
import ReactDOM from 'react-dom';

//render的含义即使把一个Reat元素渲染到DOM容器内部
//jsx语法 javascript+html(xml)的混合写法
ReactDOM.render(
	<h1> hello</h1>, //react元素(不是真实的dom)
	document.querySelector('#root')
);


/*上面的代码最终会编译成以下的写法
	react元素(不是真实的dom)是通过js对象来描述DOM结构的一种数据结构
	{
		tarName:'h1',
		attr:null,
		children:['hello']
	}
*/
ReactDom.render(
	React.createrElement('h1', null, ['hello'])
);