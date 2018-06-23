/*
* @Author: duqinzhi
* @Date:   2018-06-23 11:12:50
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-06-23 11:39:20
*/
import React,{Component} from 'react';
import {render} from 'react-dom';
import Slider from './components/Slider.js'

let IMAGE_DATA = [
	{src:require('./images/1.jpg')},
	{src:require('./images/2.jpg')},
	{src:require('./images/3.jpg')}
];

//轮播图渲染调用
render(
	<Slider   //下面这些都是自定义的
		items={IMAGE_DATA} //图片源
		speed={1.2}        //图片的轮播速度
		delay={2.1}        //延迟时间
		pause={true}       //暂停，如果为true：当鼠标滑过的时候自动停止轮播
		auto={true}    //当页面加载完成后自动开始轮播
		dots={true}        //是否显示下面小点导航
		arrows={true}      //是否显示左右的箭头导航
	></Slider>,
	window.app
)
	



/*一般引用图片的时候
1. 要是远程地址，那么就https
2. 要不不是远程地址，那么就要用require引一下，否则不能作为图片地址  
	因为图片打包之后路径会变，requeire引的时候引的是打包后的路径
*/