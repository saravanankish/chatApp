import { Link } from 'react-router-dom';
import { HiOutlineLogout } from 'react-icons/hi';
import { Component } from 'react';

class LogoutBtn extends Component {
    render(){
        return (
            <div>
                <Link to="/login"><button type="button" className="mr-3 text-gray-100 bg-red-500 px-5 py-2 rounded-lg  text-md hover:bg-red-600 flex items-center"><HiOutlineLogout className="mr-2 text-lg"/>Logout</button></Link>
            </div>
        )
    }
}

export default LogoutBtn;