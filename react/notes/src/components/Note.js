import React, { Component } from 'react';
import _ from 'lodash';
import moment from 'moment';
import 'moment/locale/zh-cn';      // 指定时区
moment.locale('zh-CN');


class Note extends Component {
    state = {
        entity: this.props.entity,
        text: this.props.entity.text,
        open: false,
        updated: this.props.entity.meta.updated || this.props.entity.meta.created,   // 修改/创建时间
        destoryEntity: this.props.destoryEntity
    }
    render(){
        return(
            <div className="item">
                <div className="meta">
                    { this.updated() }
                </div>
                <div className="content">
                    <div className="header" onClick={ this.toggle.bind(this) }>
                        { this.header() }
                    </div>
                    <div className="extra">
                        { this.words() } 字
                        { this.state.open && <i className="right floated trash icon" onClick={() => this.state.destoryEntity(this.state.entity)}></i>}
                    </div>
                </div>
            </div>
        )
    }
    updated(){
        return moment(this.state.updated).fromNow()
    }
    toggle(){
        this.setState((prevState) => {     // prevState=this.state 状态
            return {
                open: !prevState.open
            }
        })
    }
    header(){
        return _.truncate(this.state.text, { length: 30 }) || '新建笔记';    // lodash  truncate 去除text空格,限制长度 30字符
    }
    words(){
        return this.state.text.length
    }
}

export default Note;