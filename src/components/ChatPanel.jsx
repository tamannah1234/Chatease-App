import React from "react";
import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from 'react'
import { db } from "../../firebase.js";
import {CircleFadingPlus,MessageSquare,UserRound,ArrowLeft} from 'lucide-react';
import ThemeToggle from './ThemeToggle';
function ChatPanel() {
    const [users, setUser] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [showProfile,ShowProfile] = useState(false);
   

    useEffect(() => {
        const getUsers = async () => {
            // isme collection pass and data milta hai 
            const data = await getDocs(collection(db, "User"));
            console.log(data.docs.length);
            const arrayOfUser = data.docs.map((docs) => { return { Userdata: docs.data(), id: docs.id } });
            console.log("16", arrayOfUser);
            setUser(arrayOfUser);
            setLoading(false);
        };

        getUsers();
    }, []);

    
if (isLoading) return 

<div>Profile</div>
if(showProfile == true){
return <>
<div className="bg-green-400 text-white py-4 text-lg px-4 flex items-center gap-6">
<button onClick={()=>{ShowProfile(false)}}>
<ArrowLeft/>
</button>
Profile
</div>

</>

 

}

return (
    < >
    {/* top-bar */}
    <div className=" bg-gray-400 py-2 px-3 border-r flex justify-between items-center gap-2">
        <button onClick={()=>{ShowProfile(true)}}>
            <img src="user-Icon.png" alt="user_logo"  className="h-[50px] w-[50px] rounded-full object-cover"/>
        </button>
            <div className="flex items-end justify-center gap-6 mx-4">
            <ThemeToggle />
            <CircleFadingPlus/>
            <MessageSquare/>
            <UserRound/>
            </div>
    </div>

    {/* chatlist */}
    {
    isLoading ? <div>.....Loading</div>:
<div className="flex flex-col gap-2 ">
        {users.map(user => (
            <div key={user.id} className="flex gap-3 border-2">
                {/* <p>User ID: {user.id}</p> */}
                <img src={user.Userdata.profile_pic} alt="User" className="rounded-full h-[50px] w-[50px] "/>
                <h2>{user.Userdata.name}</h2>
            </div>
        ))}
    </div>
    }
    
    </>
);

}

export default ChatPanel;