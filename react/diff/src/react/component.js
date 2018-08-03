import { renderComponent } from "../react-dom/render";

class Component {
    constructor(props = {}){   // 构造函数
        this.isReactComponent = true;
        this.state = {};
        this.props = props;
    }

    setState(stateChange){
        Object.assign(this.state, stateChange);   // assign 新状态的更替
        // 更新DOM
        renderComponent(this);
    }
}

export default Component;
