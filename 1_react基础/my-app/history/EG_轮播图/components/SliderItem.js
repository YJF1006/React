/*
* @Author: duqinzhi
* @Date:   2018-06-23 15:25:32
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-06-23 17:19:38
*/
/*图片组件组件*/
import React,{Component} from 'react';
export default class SliderItem extends Component{
	
	render(){
		let style = {
		width:(this.props.items.length+1)*500,  //ul的宽度  图片个数(items数组的+额外的最后一张)*一个图片的宽度
		left:this.props.index*(-500),      //向右偏移量  索引值*-500
		transitionDuration:this.props.speed+ 's'
		}
		return(
			<div>
				<ul className='sliders' style={style}>
					{
						this.props.items.map((item,index)=>(
								<li className='slider' key={index}><img src={item.src}/></li>
							))
					}
				{/*无缝轮播所以在最后加第一章图片*/}
				<li className='slider' key={this.props.items.length}><img src={this.props.items[0].src}/></li>
				</ul>
			</div>
		)
	}
}