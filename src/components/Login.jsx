import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket} from '@fortawesome/free-solid-svg-icons';
import { Fingerprint } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

//Firebase auth
import { signInWithPopup } from "firebase/auth";
import { auth, db } from '../../firebase';
import { GoogleAuthProvider } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';



async function createUser(authData) {
  const userObject = authData.user; 
  const { uid, photoURL, displayName, email } = userObject;
  const date = new Date();
  const timeStamp = date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
  });

  await setDoc(doc(db,"User",uid), {
      email,
      profile_pic: photoURL,
      name: displayName,
      lastSeen: timeStamp,
  })
}

function Login({ setIsLoggedIn }) {
  // const setIsLoggedIn=props.setIsLoggedIn;
  const navigate = useNavigate();
  const handleLogin = async () => {
    try{
      const userData = await signInWithPopup(auth,new GoogleAuthProvider());
      console.log(userData);
      await createUser(userData);
      setIsLoggedIn(true);
      navigate("/");
    

    }
    catch(error){
      // Handle the specific error when the user closes the popup
      if (error.code === 'auth/popup-closed-by-user') {
        console.log("Popup was closed before completing the sign-in.");
        // Optionally, you can show a message to the user
      } else {
        // Handle other errors
        console.error("An error occurred during sign-in:", error.message);
      }
    }
  }
  return (
    <>
    <div className='h-[220px] bg-emerald-500 '>
      <div className='text-white flex ml-[200px] pt-[100px]  gap-5  text-2xl'>
      <img src="./WA-Logo.jpg" alt="Logo"width={"50px"} />
      <div className='uppercase font-semibold'>Chatease</div>
      </div>
    </div>
    <div className='bg-gray-100 h-[73vh] flex justify-center items-center relative'>
    {/* <FontAwesomeIcon icon="fa-solid fa-fingerprint" /> */}
    
    <div className='bg-white h-[80%] w-[50%] items-center shadow-2xl flex flex-col gap-6 justify-center items-center absolute -top-[50px]'>
  
      <Fingerprint   className='h-[90px] w-[90px]' style={{color:'rgb(16 185 129)'}} strokeWidth={1}/>
      <div className='text-2xl font-bold'>Sign In</div>
      <div className='flex flex-row w-[32%]  justify-center items-center'><span className='text-center'>Sign In with your google account to get started</span></div>
      <button onClick={handleLogin} className='flex  bg-emerald-500 p-[13px]  text-white gap-2 rounded-[5px]' style={{ color: 'white' }} > Sign in with google
      <FontAwesomeIcon icon={faArrowRightToBracket}  className='w-[20px] h-[20px] '/>
      </button>
     
      
      </div>
    </div>
    </>
  )
}

export default Login



