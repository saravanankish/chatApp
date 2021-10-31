import { Component } from "react";
import img from '../../images/signup_page.svg';
import { Link } from 'react-router-dom';
import { HiPhone, HiLockClosed, HiUser } from 'react-icons/hi';
import Navbar from "../Navbar/Navbar";
import LoginSignupBtn from "../Navbar/NavbarBtns/LoginSignUpBtn";

class Signup extends Component {

    render() {
        return (
            <div>
                <Navbar btns={LoginSignupBtn}/>
                <div className="container flex h-screen justify-evenly items-center pt-11">
                    <img src={img} width="500" alt="Login" className="hidden md:inline-grid"/>
                    <div className="shadow-md bg-indigo-50 px-5 py-14 rounded-xl w-96 flex  justify-center items-center flex-col">
                        <h1 className="text-4xl mb-8 font-semibold text-blue-600">Sign Up</h1>
                        <div className="flex items-center bg-white relative w-4/5 rounded-md">
                            <div className="absolute inset-y-0 flex items-center pointer-events-none">
                                <HiUser className="text-lg mx-3"/>
                            </div>
                            <input type="text" placeholder="Username" className="rounded-md h-12 w-full pl-10 border-none focus:ring-black"/>
                        </div>
                        <div className="flex items-center bg-white relative w-4/5 rounded-md mt-3">
                            <div className="absolute inset-y-0 flex items-center pointer-events-none">
                                <HiPhone className="text-lg mx-3"/>
                            </div>
                            <input type="tel" placeholder="Phone Number" className="rounded-md h-12 w-full pl-10 border-none focus:ring-black"/>
                        </div>
                        <div className="flex items-center bg-white relative w-4/5 rounded-md mt-3">
                            <div className="absolute inset-y-0 flex items-center pointer-events-none">
                                <HiLockClosed className="text-lg mx-3"/>
                            </div>
                            <input type="password" placeholder="Password" className="rounded-md h-12 w-full pl-10 border-none focus:ring-black"/>
                        </div>
                        <div className="flex items-center bg-white relative w-4/5 rounded-md mt-3">
                            <div className="absolute inset-y-0 flex items-center pointer-events-none">
                                <HiLockClosed className="text-lg mx-3"/>
                            </div>
                            <input type="password" placeholder="Confirm Password" className="rounded-md h-12 w-full pl-10 border-none focus:ring-black"/>
                        </div>
                        <button type="button" className="bg-blue-500 border-2 px-6 py-2 mt-8 rounded-lg text-white text-lg hover:bg-transparent hover:text-blue-500 hover:border-blue-500">Sign Up</button>
                        <p className="mt-4">Already a User? <Link to="/login" className="text-blue-400 hover:underline">Login</Link></p>
                    </div>
                </div>
            </div>
        )   
    }

}

export default Signup;