import React from 'react';
import { Ribbon,AppStore } from './styles/RedRibbon.styles';

export const RedRibbon = () => {
  return (
    <>
    <Ribbon> <p>For the best experience use <b>inshorts</b> app on your smartphone</p>

    <AppStore src='https://assets.inshorts.com/website_assets/images/appstore.png'/>
    <AppStore src='https://assets.inshorts.com/website_assets/images/playstore.png'/>
    </Ribbon>
    </>
  )
}
