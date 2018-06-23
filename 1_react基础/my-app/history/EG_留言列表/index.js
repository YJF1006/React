/*
* @Author: duqinzhi
* @Date:   2018-06-23 08:09:54
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-06-23 10:20:38
*/
import React,{Component} from 'react';
import {render} from 'react-dom';
import MessageBox from './components/MessageBox.js';
import 'bootstrap/dist/css/bootstrap.css';
import './components/MessageBox.css'

render(
	<MessageBox></MessageBox>,
	window.app
);