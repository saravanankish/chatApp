import { Component } from "react";


class Profile extends Component {

    render(){
        return (
            <div className="flex flex-col items-center pt-12">
                <div className="relative">
                    <div className="w-8 h-8 absolute bg-red-400 rounded-full right-5 top-2"></div>
                    <img className="w-60 h-60 rounded-full object-cover p-1 border-4" src="https://www.koimoi.com/wp-content/new-galleries/2020/06/avengers-endgame-real-reason-behind-iron-man-robert-downey-jrs-death-after-wearing-thanos-gauntlet-will-leave-you-teary-eyed-yet-again-0001.jpg" alt="" />
                </div>
                <div className="flex w-60 items-center justify-center mt-2 flex-col">
                    <p className="text-3xl font-bold">Saravanan K</p>
                    <p className="text-sm">+91-9094705411</p>
                </div>
            </div>
        )
    }

}

export default Profile;