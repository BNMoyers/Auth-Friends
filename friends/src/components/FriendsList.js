import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Loader from 'react-loader-spinner';
import Friend from './Friend';

import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendList = props => {
const [Friends, setFriends] = useState({});
const getData = () => {
    axiosWithAuth()
    .get('/api/friends')
    .then(res => {
        setFriends(res.data)
    })
    .catch(err => console.log('error: ',err.response));
}

useEffect(() =>{
    getData()},[]);

 console.log('Friends',Friends)   
return(
<div>
    {Friends.map(friend => (
        <Friend key = {friend.id} friend={friend} />
    ))}
</div>
)
}
export default FriendList