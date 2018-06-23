/*
* @Author: duqinzhi
* @Date:   2018-06-22 15:52:23
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-06-22 17:13:37
*/
import React,{Component} from 'react';
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

/**
 * 1. 组件的完整生命周期
 * 2. 一些代码的编写顺序
 */

/* 父组件 0   5  10    15  20   25    30
   子组件 0   0   0    15  15   15    30
   因为当时父组件是5的倍数的时候，才会重新渲染，
   那么子组件SubCounter 才会得到渲染的最新值，这样他才会给自己传过去，再与3进行取余
 */
//父组件(父计数器)
class Counter extends Component{
	constructor(){
		super();
		this.state = {num:0};
	}
	//组件将要被挂载
	componentWillMount(){
		console.log('1.componentWillMount组件将要被挂载');
	}
	handleClick = ()=>{
		//setState方法是异步的，所以不能再赋值之后立即获取最新的state的值
		//想要立即获取到，可以在回调函数中获取最新的值 
		this.setState({
			num:this.state.num+1
		},()=>{
			console.log(this.state.num);  //放在这里第一次点击之后打印的是1
		});
		//console.log(this.state.num);   //放在这里打印 那么第一次点击之后打印的是0,因为setState是异步的
	}
	shouldComponentUpdate(newProps,newState){  //组件是否进行更新
		/*newProps  新的属性的值
		  newState  新的状态的值
		*/
		console.log('4.shouldComponentUpdate组件是否进行更新，会返回布尔值');
		//逢5更新
		if(newState.num %5 === 0){
			return true;   //更新
		}else{
			return false;   //不更新
		}
	}
	render(){
		console.log('2.render 组件挂载')
		return(
			<div style={{border:'2px solid green',padding:10}}>
				<p>{this.state.num}</p>
				<button onClick={this.handleClick}> + </button>

				<SubCounter num={this.state.num}></SubCounter>  {/*子计数器*/}
			</div>
		);
	}
	componentDidMount(){
		console.log('3.componentDidMount组件挂载完成');
	}
}
 //子组件(子计数器)
class SubCounter extends Component{
	//组件将要接收到新的属性对象
	componentWillReceiveProps(newProps){
		console.log('componentWillReceiveProps');
	}
	shouldComponentUpdate(newProps,newState){ //组件是否进行更新
		console.log('shouldComponentUpdate组件是否进行更新，会返回布尔值');
		if(newProps.num%3 === 0){  //逢3更新
			return true;
		}else{
			return false;
		}
	}
	render(){
		return(
			<div style={{border:'2px solid red',paddindTop:10}}>
				<p>{this.props.num}</p>
			</div>
		)
	}
}
render(
	<Counter></Counter>,
	window.app
);