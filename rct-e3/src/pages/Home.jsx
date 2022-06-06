import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(()=>{
    axios({
      url: "https://reqres.in/api/users",
      method: "GET"
    })
    .then((res)=>{
      setData(res.product.name);

    })
    .catch((err)=>{})
  },[])
  return <div>{data.map((item)=>(
    <div></div>
  )})</div>;
};

export default Home;