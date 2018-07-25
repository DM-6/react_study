import React, { Component } from 'react';  
import { getCarousel, getNewAlbum } from '@/api/recommend';
import Swiper from 'swiper';
import "swiper/dist/css/swiper.css";
import './recommend.styl';
import * as AlbumModel from '@/model/album';
import { CODE_SUCCESS } from '../../api/config';
import Scroll from '@/common/scroll/Scroll';

class Recommend extends Component{
    constructor(props){
        super(props);
        this.state = {   // 当前组件的状态
            sliderList: [],
            newAlbums: [],
            refreshScroll: false
        }
    }

    componentDidMount(){
        getCarousel().then(res => {
            console.log(res);
            if(res){
                if(res.code === CODE_SUCCESS){
                    this.setState({
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
        getNewAlbum().then(res => {
            if(res){
                if(res.code === CODE_SUCCESS){
                    let albumList = res.albumlib.data.list;
                    // console.log(albumList);
                    albumList.sort((a, b) => {    // 根据public_time降序排序  sort：相邻的对象比较，b>a不变，a>b对调  冒泡排序 
                        return new Date(b.public_time).getTime() - new Date(a.public_time).getTime();
                    })
                    // console.log(albumList);
                    this.setState({
                        newAlbums: albumList
                    }, () => {
                        this.setState({refreshScroll: true})
                    })
                }
            }
        })
    }

    render(){
        const albums = this.state.newAlbums.map(item => {
            console.log(item);
            const album = AlbumModel.createAlbumByList(item);
            return(
                <div className="album-wrapper" key={album.mId}>
                    <div className="left">
                        <img src={album.img} width="100%" height="100%" alt={album.name}/>
                    </div>
                    <div className="right">
                        <div className="album-name">
                            {album.name}
                        </div>
                        <div className="singer-name">
                            {album.singer}
                        </div>
                        <div className="public-time">
                            {album.publicTime}
                        </div>
                    </div>
                </div>
            )
        });
        return(
            <div className="music-recommend">
                <Scroll refresh={this.state.refreshScroll}>
                    <div>
                        <div className="slider-container">
                            <div className="swiper-wrapper">
                                {
                                    this.state.sliderList.map(slider => {    // 循环输出
                                        return(
                                            <div className="swiper-slide" key={slider.id}>
                                                <a href="#" className="slider-nav" onClick={this.toLink(slider.linkUrl)}>
                                                    <img src={slider.picUrl} width="100%" height="100%" alt="推荐"/>
                                                </a>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                        <div className="album-container">
                                <h1 className="title">最新专辑</h1>
                                <div className="album-list">
                                    { albums }
                                </div>
                        </div>
                    </div>
                </Scroll>
            </div>
        )
    }

    toLink(linkUrl){
        return() => {    // return一个箭头函数
            // console.log(this);
            window.location.href = linkUrl;
        }
    }
};

export default Recommend;