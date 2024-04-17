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
  const [currentPage, setCurrentPage] = useState(1);
  const [followersPerPage] = useState(10);

  const getUsers = async () => {
    try {
      const res = await axios(
        "https://api.github.com/users/anthonyharold67/followers?per_page=100"
      );
      setFollowers(res.data);
      // setFilteredFollowers(res.data) //UseEffect kullanmazsak bu şekilde olmalı
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
    console.log("filteredData:", filteredData);
    
    setFilteredFollowers(filteredData);
    setCurrentPage(1);
  }, [searchPerson, followers]);

  
  // UseEfect kullanmadan handleSearch bu şekilde kullanılarak da olabilir

  // const handleSearch = (e) => {
  //   const searchTerm = e.target.value.toLowerCase();
  //   setSearchPerson(searchTerm);
    
  //     const filteredData = followers.filter((follower) =>
  //       follower.login.toLowerCase().includes(searchTerm)
  //     );
  //     setFilteredFollowers(filteredData);
    
  //   setCurrentPage(1);
  // };

  const handleSearch = (e) => {
    setSearchPerson(e.target.value);
  };

  const indexOfLastFollower = currentPage * followersPerPage;
  const indexOfFirstFollower = indexOfLastFollower - followersPerPage;
  const currentFollowers = filteredFollowers.slice(
    indexOfFirstFollower,
    indexOfLastFollower
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <img src={loadingGif} alt="loading" />;
  } else {
    return (
      <div>
        <SearchUser searchPerson={searchPerson} handleSearch={handleSearch} />
        <Followers
          filteredFollowers={currentFollowers}
          currentPage={currentPage}
          totalPages={Math.ceil(filteredFollowers.length / followersPerPage)}
          onPageChange={paginate}
        />
      </div>
    );
  }
};

export default Home;