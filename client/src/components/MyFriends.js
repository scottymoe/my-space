import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Divider} from "semantic-ui-react";
import { Link } from 'react-router-dom';

const MyFriends = () => {
  const [friends, setFriends] = useState([]);

  async function getFriends() {
    try {
      let res = await axios.get("/api/profiles/:profile_id/my_profiles");
      
      setFriends(res.data);
    } catch (err) {
      alert("you have no friends yet")
    }
  }

  useEffect(() => {
    getFriends();
  }, []);

  return (
    <Card.Group itemsPerRow={4}>
      {friends.map((friend) => (
        <Card key={friend.id}>
          <Card.Content>
            <Card.Header>{friend.name}</Card.Header>
            <Divider />
            <Card.Description>{friend.status}</Card.Description>
          </Card.Content>
          <Link to='/api/profiles/profile_id/posts'> View Posts</Link>
        </Card>
      ))}
    </Card.Group>
      
  );
};
export default MyFriends;