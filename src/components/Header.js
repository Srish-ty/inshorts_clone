import React from 'react';
import { Bar,ImgContainer,Logo_img } from './styles/headers.styles';
//import {logo} from '../images/logo_inshorts';

export default function Header() {
  return (
    <Bar className='navBar'><header>
      <ImgContainer>      <Logo_img src='https://assets.inshorts.com/website_assets/images/logo_inshorts.png'/>
      </ImgContainer>
      </header></Bar>
  )
}
