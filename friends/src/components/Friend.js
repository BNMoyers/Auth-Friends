import React from 'react'

const Friend = ({ friend }) => {
   return( 
   <div>
       <h3>{friend.name}</h3>
       <span>{friend.age}</span>
       <p>{friend.email}</p>
   </div>
   )}

export default Friend