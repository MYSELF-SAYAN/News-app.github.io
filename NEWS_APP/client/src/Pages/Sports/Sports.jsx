import NewsCard from '../../Components/NewsCard/NewsCard';
import axios from "axios"
import React, { useEffect, useState } from 'react';
import "./Sports.css"
function Sports() {
  const [data,setData]=useState([])
const getData=((data)=>(
  axios.get(`https://newsapi.org/v2/everything?q=sports&apiKey=0173492337704bd0b66c331c777097ef`)
  .then(res=>{
    data=res.data;
    setData(data.articles)
  })
))
useEffect(()=>{
getData();
},[])
  return (
    <div className='Sports'>
   {data.map((item)=>{
    return(
<NewsCard Item={item}/>
    )
   })}
</div>
  );
}

export default Sports;
