import React from 'react';
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