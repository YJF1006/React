/*
* @Author: duqinzhi
* @Date:   2018-06-23 16:18:40
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-06-23 16:20:39
*/
import React,{Component} from 'react';
export default class SliderArrows extends Component{
	render(){
		return(
			<div className='slider-arrows'>
				<span className='arrow arrow-left' onClick={()=>this.props.turn(-1)}> &lt;</span>  {/*小于号*/}
				<span className='arrow arrow-right'  onClick={()=>this.props.turn(1)}> &gt;</span>  {/*大于号*/}
			</div>
		)
	}
}