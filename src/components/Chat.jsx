import React from 'react'
import { useParams } from 'react-router-dom'
function Chat() {
  const params =useParams();
  console.log(params);
  return (
    <div>
        <h2>Chat : {params.uniqueId}</h2>
    </div>
  )
}

export default Chat