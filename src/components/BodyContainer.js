import React from 'react';
import { MainContainer, StyledCard } from './styles/BodyContainer.styles';
import {NewsCard} from './NewsCard';

export default function BodyContainer({newsArray, newsResult}) {
  return (
    <>
    <MainContainer>
    {
      newsArray.map((item)=>{

        <StyledCard newsItem={item} key={item.title}/>
      })
    }

    <StyledCard>first news</StyledCard>
    <NewsCard>second sectionfor news</NewsCard>
    </MainContainer>
    </>
  )
}

 