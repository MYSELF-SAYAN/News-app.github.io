import React, { useEffect, useState } from 'react';
import "./Home.css"
import NewsCard from '../../Components/NewsCard/NewsCard';
import axios from "axios"

const Home = () => {
const [data,setData]=useState([])
const getData=((data)=>(
  axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=0173492337704bd0b66c331c777097ef`)
  .then(res=>{
    data=res.data;
    setData(data.articles)
  })
))
useEffect(()=>{
getData();
},[])
console.log(data)
  return (
    <div className='Home'>
   {data.map((item)=>{
    return(
<NewsCard Item={item}/>
    )
   })}
</div>
  );
}

export default Home;
//https://newsapi.org/v2/top-headlines?country=us&apiKey=dbe57b028aeb41e285a226a94865f7a7