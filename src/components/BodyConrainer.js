import React,{useState,useEffect} from 'react';
import { NewsCard } from './NewsCard';

/*
const inshorts = require('inshorts-news-api');


var options = {
    lang: 'en',
    category: 'startup'
  }
  
inshorts.getNews(options ,function(result, news_offset){
    createPost(result);
    console.log(news_offset);
  });
  
var newobj ={};
var i=0;
const createPost=(obj)=>{
obj.forEach(news => {
    newobj[i] = news;
    i++;
});
}

function Contain(){
    return(<div className='cntner'>
      <img></img>
      <p></p>
    </div>)
}

export default function BodyConrainer() {
  return (
    <Contain/>
  )
}
console.log(<Contain/>);
*/
const BodyConrainer=()=>{

const [articles, setArticles] = useState([]);


useEffect(()=>{


  fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=6158997032204f0abd89567fce056c9c')
  .then(resapi=>{return resapi.json();})
  .then(res=>{
    //console.log(res);
    setArticles(res.articles);
  })
    .catch(err=>{console.log(err);})

},[])

return(
  articles.map(
    article=>(
      <NewsCard>{article}</NewsCard>
    )
  )
)
}



export {BodyConrainer};