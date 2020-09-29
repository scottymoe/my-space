import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Divider,} from "semantic-ui-react";

const MyFriends = () => {
  const [profiles, setProfiles] = useState([]);

  async function getFriends() {
    try {
      let res = await axios.get("/api/my_profiles");
      setProfiles(res.data);
    } catch (err) {
      alert("you have no friends yet")
    }
  }

  useEffect(() => {
    getFriends();
  }, []);

  return (
    <Card.Group itemsPerRow={4}>
      {profiles.map((profile) => (
        <Card key={profile.id}>
          <Card.Content>
            <Divider />
            <Card.Header>{profile.name}</Card.Header>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
      
  );
};
export default MyFriends;