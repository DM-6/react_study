class Component {
    constructor(props = {}) {
        this.isReactComponent = true;
        this.state = {};
        this.props = props;
    }

    setState (stateChange){
        Object.assign(this.state, stateChange);    // 原始对象 新对象 
    }
}

export default Component;
