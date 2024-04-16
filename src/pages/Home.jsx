import SearchUser from "../components/SearchUser";
import Followers from "../components/Followers";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [searchPerson, setSearchPerson] = useState("");
  const [followers, setFollowers] = useState([]);

  const getUsers = async () => {
    try {
      const res = await axios(
        "https://api.github.com/users/anthonyharold67/followers?per_page=100"
      );
      console.log(res.data);
      setFollowers(res.data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <SearchUser />
      <Followers followers={followers} />
    </div>
  );
};

export default Home;
