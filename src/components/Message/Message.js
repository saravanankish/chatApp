import { Component } from "react";

class Message extends Component {

    constructor(props){
        super(props);
        this.props = props;
        console.log(this.props.own);
    }

    render(){
        return (
            <div className={this.props.own ? "message own flex flex-col mr-3 items-end mt-6" : "message flex flex-col mt-6 ml-2"}>
                <div className={this.props.own ? "messageTop flex flex-row-reverse" : "messageTop flex"}>
                    <img className={`w-8 h-8 rounded-full object-cover pointer-events-none ${this.props.own ? 'ml-3' : 'mr-3'}`} src="https://www.koimoi.com/wp-content/new-galleries/2020/06/avengers-endgame-real-reason-behind-iron-man-robert-downey-jrs-death-after-wearing-thanos-gauntlet-will-leave-you-teary-eyed-yet-again-0001.jpg" alt="" />
                    <p className={`messageText p-3 rounded-2xl text-black max-w-xs ${this.props.own ? 'bg-gray-300':'bg-blue-400'}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
                <div className="messageBottom text-xs mt-1 ml-2">
                    1 hour ago
                </div>
            </div>
        );
    }

}

export default Message;