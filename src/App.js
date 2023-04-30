import axios from "axios";
import React,{useState,useEffect} from 'react';
import Header from './components/Header';
import BodyContainer from './components/BodyContainer';
import LeftPanel from './components/LeftPanel';
import { RedRibbon } from './components/RedRibbon';
import { NewsCard } from "./components/NewsCard";
//import { BodyConrainer } from "./components/BodyConrainer";


function App() {

 const [category, setCategory] = useState("general");

  return (
    <>
    <Header/>
    <LeftPanel setCategory={setCategory}/>
    <RedRibbon/>
    <BodyConrainer category={category}/>
    </>
  );
 
  
}

export default App;


const BodyConrainer=({category})=>{

const [articles, setArticles] = useState([]);
//const [category, setCategory] = useState("general");
console.log(category);
const apikey= '1914849ef5824acd838ae8bc2b578f20';
const apikey0='6158997032204f0abd89567fce056c9c';

  /*const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'fa5d57eca3msh76f257826403e04p177ee1jsncc4922270291',
      'X-RapidAPI-Host': 'google-news-api1.p.rapidapi.com'
    }
  };
  fetch('https://google-news-api1.p.rapidapi.com/search?language=EN', options)
  */
  useEffect(()=>{
    console.log("inside useeffect ",category);

  //console.log(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey0}&category=${category}`);
  fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey0}&category=${category}`)
  .then(resapi=>{return resapi.json();})
  .then(res=>{
    //console.log(res);
    setArticles(res.articles);
  })
    .catch(err=>{console.log(err);})

  },[category])
  
return(
  articles.map(
    article=>(
      <NewsCard data={article}></NewsCard>
    )
  )
)
}

