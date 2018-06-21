/*
 * @Author: duqinzhi
 * @Date:   2018-06-20 10:52:29
 * @Last Modified by:   duqinzhi
 * @Last Modified time: 2018-06-21 18:05:43
 */

import React, {
	Component
} from 'react';
import ReactDOM, {
	render
} from 'react-dom'; //render 是ReactDOM的一个属性，解构出来就不用ReactDOM.render

//计时器 Clock  因为函数方式声明式静态的，是不能动的，所以不能用
/*let Clock = () => {
	return <h1>{new Date().toLocaleString()}</h1> // toLocaleString()  根据本地时间把 Date 对象转换为字符串：
};*/

/*定义组件的方法二：利用类来声明组件，类需要继承自Component
	1.函数不可以声明状态，但是类可以声明状态
 
 */
class Clock extends Component {
	constructor() {
		super();
		//状态可以用来存放组件内部的一些变化的值，状态只能由组件内部初始化，内部改变
		this.state = { //自定义组件状态对象
			time: new Data.toLocaleString()
		}
	}
	//生命周期函数  (componentDidMount组件挂载完成)
	componentDidMount() {
		//每隔1秒重新修改状态，当调用setState之后，状态会更新，还会再次调用render方法进行重新渲染
		window.setInterval(() => {
			this.setState({ //this.setState  更新数据
				time: new Data.toLocaleString()
			})
		}, 1000)
	}
	//render方法指的是该组件将如何渲染，一定要返回一个React元素，
	//而且只能返回一个React元素，所以一般在最外面包裹一个div
	render()(
		return <div><h1>{this.state.time}</h1></div>;
	)
}

render(
	<Clock></Clock>,
	window.app;
);