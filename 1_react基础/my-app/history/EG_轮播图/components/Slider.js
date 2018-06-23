/*
* @Author: duqinzhi
* @Date:   2018-06-23 11:14:06
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-06-23 17:30:26
*/
import React,{Component} from 'react';
import SliderItem from './SliderItem.js';   //图片组件
import SliderArrows from './SliderArrows.js';  //箭头组件
import SliderDots from './SliderDots.js'    //小点点组件
import './slider.css';
export default class Slider extends Component{
	constructor(){
		super();
		this.state = {
			index:0  //索引 通过修改index值就可以改变left的值
		};
	}
	//传入步长，得到新的index值
	turn = (step)=>{
		let index = this.state.index + step; 
		//向右超过了
		if(index>this.props.items.length){
			this.$slider.style.transitionDuration = '0s';   //取消动画效果，立即拉回到第一张(持续时间0秒)
			this.$slider.style.left = 0 +'px';  //立即拉回到第一张
			setTimeout(()=>{  //炸弹定时器  （因为渲染的时候回合并，所以会导致前面取消动画效果失败，这里采用定时器异步处理）
				index = 1;   
				this.$slider.style.transitionDuration = this.props.speed +'s'; //重新使用动画效果
				this.setState({index});  //更新index值
				
			},0)
			return;
		}
		//向左超过了
		if(index<0){
			this.$slider.style.transitionDuration = '0s';  //取消动画
			this.$slider.style.left = -500*this.props.items.length +'px';  //立即拉回到最后一张(额外的那个)
			setTimeout(()=>{
				index = this.props.items.length-1;
				this.$slider.style.transitionDuration = this.props.speed +'s';
				this.setState({index});
				
			},0)
			return;
		}
		this.setState({index});  //更新index值
	}
	//启动自动轮播
	go = ()=>{	
		this.$timer = setInterval(()=>{
			this.turn(1);  //步长为1
		},this.props.delay*1000)
		
	}
	//组件	挂载完成
	componentDidMount(){
		this.$slider = document.querySelector('.sliders');
		if(this.props.auto){		//如果自动轮播为true，开启轮播(开启定时器)	
			this.go();
		}
	}
	render(){
		return(
			<div onMouseOver={()=>clearInterval(this.$timer)}  //鼠标滑上去的时候清除定时器
				 onMouseOut={()=>this.go()}                    //鼠标移开的时候开启定时器
				 className='slider-wrapper'>
				<SliderItem items={this.props.items} index={this.state.index} speed={this.props.speed}></SliderItem>  {/*图片组件*/}
				<SliderArrows turn={this.turn} ></SliderArrows>  {/*箭头组件*/}
				<SliderDots items={this.props.items}
							index={this.state.index}
							turn={this.turn}
				></SliderDots>	
			</div>
		)
	}
}				