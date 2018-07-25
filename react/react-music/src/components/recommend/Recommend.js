import React, { Component } from 'react';  
import { getCarousel } from '@/api/recommend';
import Swiper from 'swiper';
import "swiper/dist/css/swiper.css";
import './recommend.styl';
import { CODE_SUCCESS } from '../../api/config';

class Recommend extends Component{
    constructor(props){
        super(props);
        this.state = {   // 当前组件的状态
            sliderList: []
        }
    }

    componentDidMount(){
        getCarousel().then(res => {
            console.log(res);
            if(res){
                if( res.code === CODE_SUCCESS ){
                    this,this.setState({
                        sliderList: res.data.slider
                    }, () => {
                        if(!this.sliderSwiper){ 
                            this.sliderSwiper = new Swiper('.slider-container', {
                                loop: true,
                                autoplay: 3000,    // 自动播放 3秒更换一页 
                                autoplayDisableOnTnteraction: false,   // 当光标在幻灯片上时不自动播放
                                pagination: '.swiper-pagination'
                            })
                        } 
                    })
                }
            }
        })
    }

    render(){
        return(
            <div className="music-recommend">
                <div className="slider-container">
                    <div className="swiper-wrapper">
                        {
                            this.state.sliderList.map(slider => {    // 循环输出
                                return(
                                    <div className="swiper-slide" key={slider.id}>
                                        <a href="#" className="slider-na">
                                            <img src={slider.picUrl} width="100%" height="100%" alt="推荐"/>
                                        </a>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        )
    }
};

export default Recommend;