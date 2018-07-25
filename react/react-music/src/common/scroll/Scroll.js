// 封装better-scroll组件   scroll通用组件,放在common文件夹里

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import BScroll from 'better-scroll';
import './scroll.styl';

class Scroll extends React.Component{    // 封装scroll
    componentDidUpdate(){     // 组件更新后
        if(this.bScroll && this.props.refresh === true){
            this.bScroll.refresh();    
        }
    }

    componentWillUnmount(){   // 在路由切换 卸载组件之前
        this.bScroll.off('scroll');
        this.bScroll = null;   // 设置为null 完成垃圾回收
    }

    componentDidMount(){       //利用生命周期 
        this.scrollView = ReactDOM.findDOMNode(this.refs.scrollView);       // findDOMNode API 返回DOM结点
        if(!this.bScroll){
            this.bScroll = new BScroll(this.scrollView, {
                probeType: 3,
                click: this.props.click
            });
            if(this.props.onScroll){
                this.bScroll.on('scroll', (scroll) => {
                    this.props.onScroll(scroll);
                })
            }
        }
    }

    refresh(){   // 调用一下refresh方法
        if(this.bScroll){
            this.bScroll.refresh(); 
        }
    }

    render(){
        return(
            <div className="scroll-view" ref="scrollView">
                { this.props.children }
            </div>
        )
    }
}

Scroll.defaultProps = {   // 给外界传参一个默认值
    click: true,
    refresh: false,
    onScroll: null
}

Scroll.propTypes = {    // 指定组件的参数类型
    click: PropTypes.bool,    // 布尔类型boolean
    refresh: PropTypes.bool,
    onScroll: PropTypes.func     // 方法function
}

export default Scroll;
