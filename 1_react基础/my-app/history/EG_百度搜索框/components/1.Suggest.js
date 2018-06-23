/*
* @Author: duqinzhi
* @Date:   2018-06-22 17:20:46
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-06-23 08:00:30
*/
/**关键字组件
 * 1.给input框绑定值改变事件，当值改变的时候调用对应的监听函数
 * 2.获取到input框中的值，然后调用百度的接口获取数据并修改状态中的words属性
 *
 * 百度接口：https://www.baidu.com/su   (关键字的接口)
 */

import React,{Component} from'react';
import jsonp from 'jsonp';  //引用jsonp  (需要npm事先装好jsonp)

export default class Suggest extends Component{  //默认导出
	constructor(){
		super();
		this.state = {
			words:[],
			index:-1   //当前选中的索引
		};
	}
	//输入框里面的值变化的时候
	handleChange = (event)=>{
		//1.获取输入框的值
		let wd = event.target.value;  //event.target 获取到事件源 获取输入的关键字
		this.wd = wd;  //缓存关键字
		//2.利用jsonp调用百度接口
		jsonp(`https://www.baidu.com/su?wd=${wd}`,{
			param:'cb'
		},(err,data)=>{
				//console.log(data);
				this.setState({
					words:data.s   //从百度接口取回来的关键字数组
				});
		});
	}
	//按键对于下拉的上下移动
	handleOnkeyUp = (event)=>{
		//console.log(event.keyCode);   //上38   下40
		let code = event.keyCode;
		if(code === 38 || code ===40){ //当按下 向上或者向下的键时候
			let index = this.state.index;
			if(code === 38){  //向上
				index--;
				if(index ===-2){
					index = this.state.words.length-1;
				}
			}else if(code === 40){
				index++;
				if(index===this.state.words.length){ //越界
					index=-1;
				}
			}
			this.setState({  //更新index
				index:index
			});
		}else if(event.keyCode ===13){ //跳转页面 wd：输入框里面的关键字				
			window.location=`https://www.baidu.com/s?wd=${event.target.value}`;
		}
	};
	//回车键
	enter = (event)=>{

	}
	//渲染
	render(){
		return(
			<div className='container'>
				{/*.row>.col-sm-8.col-sm-offset-2  占8列，为了居中向右偏移2列*/}
				<div className="row">
					<div className="col-sm-8 col-sm-offset-2">
						<div className="panel panel-default">
								{/*-1的时候是关键字，否则显示数组中对应的字*/}
							<div className="panel-heading"> 
								<input type="text" className='form-control' 
										value={this.state.index==-1?this.wd:this.state.words[this.state.index]} 
								 		onChange={this.handleChange}       //值改变事件，获取到input框中的值，然后调用百度的接口获取数据并修改状态中的words属性
										onKeyDown={this.handleOnkeyUp}   //利用上下键来选择关键字,按下回车键，进入关键字网页
								  /> 
							</div>
 									
							<div className="panel-body">
								<ul className="list-group">
									{
										this.state.words.map((word,index)=>{
											return (<li 
												key={index} 
												className={'list-group-item ' +(index == this.state.index ? 'active' : '')}
												
												> {word} </li>)	
										})
									}
								</ul>
							</div>

						</div>
					</div>
				</div>
			</div>
		);
	}
}

/**相当于两者之间差一个字符
 * onKeyDown  不能获取到最新输入的值
 * onKeyUp    可以获取到最新输入的值   
 *   
 */