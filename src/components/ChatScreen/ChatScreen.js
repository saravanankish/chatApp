import {  Component  } from 'react';
import Navbar from '../Navbar/Navbar';
import  LogoutBtn  from '../Navbar/NavbarBtns/LogoutBtn';
import "./ChatScreen.css";
import { HiSearch, HiPaperAirplane } from 'react-icons/hi';
import Conversation from '../Conversation/Conversation';
import Message from '../Message/Message';
import Profile from '../Profile/Profile';

class ChatScreen extends Component {

    render(){
        return(
            <div className="bg-gray-200 h-screen">
                <Navbar btns={LogoutBtn}/>
                <div className="pt-16 pb-3 h-screen">
                    <div className="mx-28 mb-2 h-full rounded-lg flex bg-white">
                        <div className="chatMenu border-r-2 h-full border-gray-100">
                            <div className="chatMenuWrapper h-full py-3 px-1 overflow-y-hidden">
                                <div className="relative border-2 mb-4">
                                    <div className="absolute flex items-center h-full pl-2 text-xl">
                                        <HiSearch />
                                    </div>
                                    <input placeholder="Search" className="searchBar w-full py-2 pl-8  " />
                                </div>
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
                            <div className="chatBoxWrapper py-2 px-1 border-r-2 flex flex-col h-full shadow">
                                <div className="overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-100">
                                    <Message own={true}/>
                                    <Message />
                                    <Message own={true}/>
                                    <Message />
                                    <Message own={true}/>
                                    <Message />
                                    <Message own={true}/>
                                    <Message />
                                    <Message />
                                    <Message />
                                </div>
                                <div className="pt-2 px-2 pb-1 border-t-2 flex items-center">
                                    <textarea placeholder="Type Message" className="w-full h-24 scrollbar-thin scrollbar-thumb-gray-300 focus:ring-black focus:border-black resize-none"></textarea>
                                    <button className="bg-green-500 hover:bg-green-600 p-2 ml-3 rounded-full"><HiPaperAirplane className="transform rotate-90 text-3xl"/></button>
                                </div>
                            </div>
                        </div>
                        <div className="chatOnline">
                            <div className="chatOnlineWrapper p-3">
                                <Profile />
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        )
    }

}

export default ChatScreen;