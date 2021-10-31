import { Component } from "react";
import { HiOutlineLogin, HiPencilAlt } from 'react-icons/hi';
import { Link } from 'react-router-dom';

class LoginSignupBtn extends Component {

    render(){
        return(
            <div className="flex">
                <Link to="/login"><button type="button" className="mr-3 text-gray-100 bg-green-400 px-5 py-2 rounded-lg  text-md hover:bg-green-500 flex items-center"><HiOutlineLogin className="mr-2 text-lg"/>Login</button></Link>
                <Link to="/signup"><button type="button" className="text-black bg-white px-5 py-2 rounded-lg  text-md hover:bg-gray-200 flex items-center"><HiPencilAlt className="mr-2 text-lg"/>Sign Up</button></Link>
            </div>
        )
    }

}


export default LoginSignupBtn;