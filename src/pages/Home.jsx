import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchUser from '../components/SearchUser';
import Followers from '../components/Followers';

const Home = () => {
  const [searchPerson, setSearchPerson] = useState("");
  const [followers, setFollowers] = useState([]);
  const [filteredFollowers, setFilteredFollowers] = useState([]);

  const getUsers = async () => {
    try {
      const res = await axios("https://api.github.com/users/anthonyharold67/followers?per_page=100");
      setFollowers(res.data);
      // setFilteredFollowers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
      const filteredData = followers.filter(follower =>
        follower.login.toLowerCase().includes(searchPerson.toLowerCase())
      );
      setFilteredFollowers(filteredData);
    
  }, [searchPerson, followers]);

  const handleSearch = (e) => {
    setSearchPerson(e.target.value);
  };

  return (
    <div>
      <SearchUser searchPerson={searchPerson} handleSearch={handleSearch} />
      <Followers filteredFollowers={filteredFollowers} />
    </div>
  );
};

export default Home;
