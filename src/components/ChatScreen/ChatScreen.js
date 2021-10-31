import {  Component  } from 'react';
import Navbar from '../Navbar/Navbar';
import  LogoutBtn  from '../Navbar/NavbarBtns/LogoutBtn';
import "./ChatScreen.css";
import Conversation from '../Conversation/Conversation';

class ChatScreen extends Component {

    render(){
        return(
            <div className="bg-gray-200 h-screen">
                <Navbar btns={LogoutBtn}/>
                <div className="pt-16 pb-3 h-screen">
                    <div className="mx-28 mb-2 h-full rounded-lg flex bg-white">
                        <div className="chatMenu border-r-2 h-full border-gray-100">
                            <div className="chatMenuWrapper h-full py-3 px-1 overflow-y-hidden">
                                <input placeholder="Search" className="searchBar w-full py-2 pl-2 border-b-2 mb-3" />
                                <div className="conversationContainer overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-200">   
                                    <Conversation />
                                    <Conversation />
                                    <Conversation />
                                    <Conversation />
                                    <Conversation />
                                    <Conversation />
                                    <Conversation />
                                    <Conversation />
                                    <Conversation />
                                    <Conversation />
                                    <Conversation />
                                    <Conversation />
                                    <Conversation />
                                    <Conversation />
                                    <Conversation />
                                    <Conversation />
                                    <Conversation />
                                    <Conversation />
                                    <Conversation />
                                    <Conversation />
                                    <Conversation />
                                    <Conversation />
                                    <Conversation />
                                    <Conversation />
                                </div>
                            </div>
                        </div>
                        <div className="chatBox">
                            <div className="chatBoxWrapper py-3 px-1 border-r-2 h-full">
                                box
                            </div>
                        </div>
                        <div className="chatOnline">
                            <div className="chatOnlineWrapper p-3">
                                online
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        )
    }

}

export default ChatScreen;