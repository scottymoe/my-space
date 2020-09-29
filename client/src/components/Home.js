import React, { useState, useEffect}  from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { Header, Card, Icon, Image, Button } from 'semantic-ui-react';

const Home = () => {
  const [profiles, setProfiles] = useState([]);
  const friend = async (id) => {
    let res = axios.put(`/api/profiles/${id}`);

    removeFriend(id);
  };
  const removeFriend = (id) => {
    const filteredFriends = profiles.filter((friend) => friend.id !== id);
    setProfiles(filteredFriends);
  };
  const getFriends = async () => {
    try {
      let res = await axios.get('/api/profiles');
      console.log(res.data);
      setProfiles(res.data);
    } catch (error) {
      alert("Error getting your friends");
    }
  };

  
  useEffect(() => {
    getFriends();
  }, []);
  
  
  const sample = () => {
    if(profiles.length === 0){
      return null;
    }
    const index = Math.floor(Math.random() * profiles.length);
    return profiles[index];
  };
  
  const renderProfile = () =>{
    const profile = sample();
    if (profile) {
      return(
        <div>    <br />
        <Header as="h1">MySpace Discover</Header>
        <br />
        <Card key={profile.id}>
          <Card.Content>
            <Card.Header>
              {profile.name}
            </Card.Header>
            <Card.Description>{profile.status}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button color="red" icon basic onClick={removeFriend}>
              <Icon name="thumbs down" />
            </Button>
            <Button color="green" icon basic onClick={() => friend(profile.id)}>
              <Icon name="thumbs up" />
            </Button>
          </Card.Content>
        </Card>
        <Link to="/my_profiles">
          <Button color="blue">My Friends</Button>
        </Link>
      </div>

      )
    }return <Header>No Friends</Header>
  };

  return(
    <div>
      <h1>MySpace</h1>
      {renderProfile()}
    </div>
  );
};

export default Home;

