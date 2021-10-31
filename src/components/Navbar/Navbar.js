import { Component } from "react";


class Navbar extends Component {

    constructor(props){
        super(props);
        this.props = props;
    }

    render() {
        const Btns = this.props.btns;
        return (
            <div className="navbar h-14 w-screen flex pl-28 pr-28 items-center justify-between absolute">
                <div className="title text-2xl font-semibold text-white cursor-default">Chat App</div>
                <Btns />
            </div>
        )
    }

}


export default Navbar
