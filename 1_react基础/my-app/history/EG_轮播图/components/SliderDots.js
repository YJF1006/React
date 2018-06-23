/*
* @Author: duqinzhi
* @Date:   2018-06-23 16:22:41
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-06-23 17:14:25
*/
import React,{Component} from 'react';
export default class SliderDots extends Component{
	render(){
		return(
			<div className='slider-dots'>
					{
						this.props.items.map((item,index)=>(
								<span onClick={()=>this.props.turn(index-this.props.index)}  
								className={'dot '+(index===this.props.index || (this.props.index===this.props.items.length && index ==0)?'active':null)}></span>
							))
						/*有active的情况
							1.循环的index 等于缓存的index
							2.缓存的index是最后一个且循环index ==0 
						*/
					}
			</div>
		)
	}
}

/*
步长是： 点击的索引 - 当前的索引
 */