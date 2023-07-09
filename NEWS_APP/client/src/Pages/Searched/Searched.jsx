import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios"
import NewsCard from '../../Components/NewsCard/NewsCard';
import "./Searched.css"
function Searched() {
  const params=useParams();
const [datas,setDatas]=useState("")
  const getData=((data)=>(
    axios.get(`https://newsapi.org/v2/everything?q=${params.search}&apiKey=0173492337704bd0b66c331c777097ef`)
    .then(res=>{
      data=res.data;
      setDatas(data.articles)
    })
  ))
  useEffect(()=>{
    getData(params.search)
      },[params.search])
      console.log(datas)
  return (
    <div className="searchedCont">

      <h1>Search resault for {params.search}</h1>
    <div className='Searched'>

      {datas.map((item)=>{
        return(
          <NewsCard Item={item}/>
          )
        })}
    </div>
        </div>
  );
}

export default Searched;
