/* jsx的原理，虚拟dom转真实dom
	render的封装函数
		1.解构赋值
		2.循环这个对象的所有属性
			2.1.对于children属性的处理
			2.2.对于className属性的处理
			2.3.其他属性的处理
		3.把这个子元素放进他的父元素里面
 */

import React from 'react';
import ReactDOM from 'react-dom';
/*
	//声明一个React元素

	let ele = <h1>hello</h1>;
	//等价于 (内部编译成这样的)let ele = React.createElement('h1',null,[hello]);

	let _ele2 = <div><span>hello</span></div>
	//等价于 let _ele2 = React.createElement('div', null, [React.createElement('span', null, ['hello'])]);

	console.log(ele);
	console.log(_ele2);

	React.render(
		_ele2,
		document.querySelector('#root')
	);
*/

//最终的React元素是这样的 举例 let ele = React.createElement('h1',{className:'red'},[hello]);
let eleObj = {
	type: 'h1',
	props: {
		className: 'red',
		id: 1,
		children: ['hello', { // 文本节点，和对象节点
			type: 'span',
			props: {
				className: 'blue',
				children: ['world']
			}
		}]
	}
}
//自己封装render函数  (对children和className要特殊处理)
function render(eleObj, container) { //把eleObj转成真实的DOM元素，插入到container父容器中

	let {
		type,
		props
	} = eleObj; //1.解构赋值 解构解构出标签的类型和属性对象
	let ele = document.createElement(type); //创建一个DOM元素

	for (let attr in props) { //2.循环这个对象的所有属性
		if (attr == 'children') { ////3.children的处理如果属性是children,那么就遍历
			props[attr].forEach(item => {
				if (typeof item == 'string') { //如果是文本
					let textNode = document.createTextNode(item);
					ele.appendChild(textNode);
				} else { //如果是子元素，就要递归
					render(item, ele); //render 的子元素的是item,父元素是ele
				}
			})
		} else if (attr == 'className') { //4.className的处理
			ele.setAttribute('class', props[attr]);
		} else { //5.其他的处理
			ele.setAttribute(attr, props[attr]); //如果属性不是children那么就给ele新增一个属性，attr属性名，props[atttr]属性值
		}

	}
	container.appendChild(ele);
}
//调用自己封装的render
render(eleObj, document.querySelector('#root'));


/*扩展的知识
.createElement('h1',null,[hello]);  //参数  标签的类型 属性对象 子元素     
	1.此处写的属性名都要转换成驼峰命名法  backgroundColor   因为JSX 的特性更接近 JavaScript 而不是 HTML 
	2.有写属性是JS关键字，要换一种写法  class->className    for->htmlFor
 */