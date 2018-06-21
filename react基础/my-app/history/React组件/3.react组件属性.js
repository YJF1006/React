/*
 * @Author: duqinzhi
 * @Date:   2018-06-20 10:52:29
 * @Last Modified by:   duqinzhi
 * @Last Modified time: 2018-06-21 21:48:14
 */
/*组件属性
 * 	1. 可以给组件加默认属性   static defaultProps = {}
 * 	2. 
 *
 *组件的状态与组件的属性
 *	1.相同点：都可以用来渲染视图
 *			this.state(状态渲染)    this.props(属性渲染)
 *	2.不同点：
 *		2.1 存放数据不一样
 *			状态：
 *				是自己初始化的，
 *				自己能改别人改不了的（可以变化的例如心情，） 
 *					this.setState()   进行修改  1.用新的状态替换老的状态  2. 重新render(不会全部重新render只会重新render有差异的，因此效率高 )
 *			属性：
 *				存放的是外界传进来的，
 *				自己只能读不能改的数据 （例如姓名，性别，人的出生）
 *			
 */
import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import PropTypes from 'prop-types';

//看一个组件先看render（是个核心的方法），用来指定到底渲染的什么   类里面不加,(逗号)
class Person extends Component {
	constructor() {
		super();
		this.state = { //为组件增加一个初始的状态，默认值为true
			happy: true
		};
	}
	//默认属性对象
	static defaultProps = {
		name: '无名'
	}
	//如果定义组件的时候希望传入组件的属性有类型和是否必填属性的限制
	static propTypes = {
		name: PropTypes.string,
		age: PropTypes.number.isRequired //isRequired 必填
	}
	handleClick = () => {
		this.setState({
			happy:!this.state.happy
		})
	}
	render() { //表示组件应该如何渲染
		let heart = this.state.happy ? '开心' : '难过';
		return (
			<div>
				<p>姓名：{this.props.name}</p>  {/*从属性上取所需要的值*/}
				<p>年龄：{this.props.age}</p>
				<p>心情：{heart}</p>
				<button onClick = {this.handleClick}>改变心情</button>    {/*因为要驼峰命名所以是onClick  不是onclick*/}
			</div>
		)
	}
}
//将传递的信息， 给属性， 若此处不传， 则用默认属性 window.app
render( 
	<Person name='dqz' age={18} ></Person>, 
	window.app
);