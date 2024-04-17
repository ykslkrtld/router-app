import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchUser from "../components/SearchUser";
import Followers from "../components/Followers";
import loadingGif from "../assets/loading.gif";

const Home = () => {
  const [searchPerson, setSearchPerson] = useState("");
  const [followers, setFollowers] = useState([]);
  const [filteredFollowers, setFilteredFollowers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    try {
      const res = await axios(
        "https://api.github.com/users/anthonyharold67/followers?per_page=100"
      );
      setFollowers(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw new Error("User can not be found");
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      getUsers();
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const filteredData = followers.filter((follower) =>
      follower.login.toLowerCase().includes(searchPerson.toLowerCase())
    );
    setFilteredFollowers(filteredData);
  }, [searchPerson, followers]);

  const handleSearch = (e) => {
    setSearchPerson(e.target.value);
  };

  if (loading) {
    return <img src={loadingGif} />;
  } else {
    return (
      <div>
        <SearchUser searchPerson={searchPerson} handleSearch={handleSearch} />
        <Followers filteredFollowers={filteredFollowers} />
      </div>
    );
  }
};

export default Home;
