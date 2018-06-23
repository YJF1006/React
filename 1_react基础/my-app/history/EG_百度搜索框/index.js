/*
* @Author: duqinzhi
* @Date:   2018-06-22 15:52:23
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-06-22 18:07:43
*/
/**百度搜索框
 * 
 */
import React,{Component} from 'react';
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Suggest from './components/1.Suggest.js';  //关键字组件

render(
	<Suggest></Suggest>,
	window.app
);