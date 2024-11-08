import React from 'react'
import { storage } from "../../firebase"
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import ChatPanel from "./ChatPanel";
function Home() {

  // const handleChange = (e) => {
  //   console.log("Change event");
  //   const img = e.target.files[0];

  //   // Reference to the storage location
  //   const storageRef = ref(storage, "profile" + Math.random());

  //   // Create the upload task
  //   const uploadTask = uploadBytesResumable(storageRef, img);
  //   console.log("Upload task initiated");

  //   // Monitor state changes of the upload task
  //   uploadTask.on("state_changed", 
  //     progressCB, 
  //     errorCB, 
  //     () => finishedCB(uploadTask)  // Properly pass uploadTask when finished
  //   );

  //   // Handle upload progress (optional)
  //   function progressCB(snapshot) {
  //     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //     console.log(`Upload is ${progress}% done`);
  //   }

  //   // Handle upload errors
  //   function errorCB(err) {
  //     console.log("Upload failed", err);
  //   }

  //   // Handle successful upload completion
  //   function finishedCB(uploadTask) {
  //     console.log("File successfully uploaded");

  //     // Get the download URL of the uploaded file
  //     getDownloadURL(uploadTask.snapshot.ref)
  //       .then(function (url) {
  //         console.log("Download URL:", url);
  //       })
  //       .catch(function (error) {
  //         console.error("Error getting download URL:", error);
  //       });
  //   }
  // };

  return (
    <>
      {/* <input
        type="file"
        accept='image/png, image/jpeg, image/webp'
        onChange={handleChange}
      /> */}

      {/* <div>Chat Panel</div>
      <div>Profile</div>
      <div>Empty chat</div>
      <div>Individual chat</div> */}
        {/* <div>Home</div> */}

<ChatPanel/>
    </>
  );
}

export default Home;
