import React from 'react';
import { Bar,ImgContainer,Logo_img, HambIcon } from './styles/headers.styles';
//import {logo} from '../images/logo_inshorts';

export default function Header() {
  const show=()=>{
    //alert('haha');
    var sideBar =document.getElementsByClassName('panel')[0];
var hambu = document.getElementsByClassName('hamb')[0];
var micon =document.getElementsByClassName('icon')[0];
    if(sideBar.style.display=='block'){
      sideBar.style.display='none';
      hambu.style.marginLeft='0vw';
      micon.style.marginLeft='40vw';
      hambu.src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX///8AAADPz89LS0uWlpaPj4/4+PhfX1/29vawsLAdHR3b29v8/PzExMQzMzOEhIRzc3MPDw+hoaGysrLq6uo8PDwXFxfh4eFkZGRXV1fGxsZGRkaHh4fX19d6enqnp6e7u7sLhoRgAAAChUlEQVR4nO3di1LCQAyF4eWOCIgIqPWC7/+UWhm8jZNs2Z3JJP2/J8gZK+1u02xKAAAAAAAAAAAAAAAAABDfcjWZjfyYTVbLTvl2rwN/Nrv8gBPrYi80ycw33VtXerH9NCvgwbrOAoeciGvrKous9YA31jUWutEC3ltXWOxeSfhgXWCxBzng3Lq+CuZiwivr8iq4EhNurMurYCMm9H2rOJFvGNbVVdHzhJ6f2M4WYsJH6/IqeBQTel03/SSvoYbW5VUwFBOmW+v6it3KAdPRusBiRyVhWlhXWEj+JW29WJdY6EVN6PzhW71GW1vrKgtscwKm1FjXebEmL+DHOtjjhvDHskle+/7JOPa2abofd9jyPpleD/24ztoKBgAAAAAAAAAAPs2b49iPY9PlvVPrbWT9Lqmz0VuHfEOf7QoLpZPm27N1qRdT29hPZtZ1FpjlBPTdJiw3CH+6s66x0J0W0H+zvnbb8P7JzGDwLAdcWtdXgfyp5cq6vApWwS9S7ab4ZF1eBU9iQv8twlqTsHV1VfT8bxj//zD+b2n8+2GEZxoxoOfV75nyXBpgbaH20vr+GCFjfdiDNX4P9mk8/9povzJfwu+Xpvh73q3o7y0AAAAAAAAAAIAjwedE7cbeZiavO836mvt8050/r83vzD25WehL+LmJvme0Zsy+jD+/1GeTwjd1Bq3va7SlXaf+m4SVWdDx53nHn8kef65+hLMRDmJC6+qq6HlCb2um/8jnzPhcNv0mtwl77/JuyZ3e/lv11Q+Bw5+71oOz89x/25UxOML3DSPjDMsenEMa/yzZ5HcNlXsecHJ6pvNrtwMulo2zc7mbbudyAwAAAAAAAAAAAAAAAIBP7y86VZGfUH/eAAAAAElFTkSuQmCC'
  
    }
    else{ 
      sideBar.style.display='block'; 
      hambu.style.marginLeft='200px';
      micon.style.marginLeft='27.5vw';
      hambu.src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAVFBMVEX///8AAADv7+/t7e3x8fErKyv19fUxMTHq6uolJSU3Nzf39/cpKSkdHR08PDwvLy8UFBQhISFERERJSUkbGxtTU1M/Pz9MTExeXl7g4ODZ2dlXV1c6HLawAAAEj0lEQVR4nO2dbXuqMAyGB1ac4nRO93r+//88OmWXCUFLadrU67m/z1BImyckYU9PAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACww1edwEjz1SawItK+V+tndStuVe0bdSsixwVW1WKmbMVtjlb2eZ7ivjqx1L2/7eLXyoeqkQHT5wVW1UFzLzbzi5WP5E+x/aw6tnp7sd78WUm9F68WeFyi1lNsNldWEu/Fr+qaF537286JlXcVI0O4BTG+1DhRmY2d9qnNqFfEvELQcBtiYa4feRk1daG5i/z7Lb2FL8kXeLyEJb2EuEts6A18jX0DvXD0Lkd1I/bb68R7sGOmthfZHkygfocuhDrqLlbQaOkp+prpCf5eCt0tL3FCv2O/mmUPdrCgEUXA1bnDBLsc6lARBFxDF7jMvMDjBbGgMXUvMsd/TfEW4Q4NfYoTD3YWJpYGFhhXwGWXajJMwK3Dzz4m1Q5GFhhPwHGplukFlISLEjRqG1JNhgu4kAPCjFSTcZODRrulLmrqCZ5o6AWOzsgd+/usUk2GB41xTmY0TFBq+hRGZf0NvT07kwvsCzj/JXKpZtBFz7hAAcczehNSTSYs6y9iD3awoOFVtjGU0fvQrulevO9wTKodDEk1mbFZv7GM3ofZqKzfXEbvwxgBZzCj96HxLtvwAo/ZOMjxzfqLChMUv7JNIVJNxifrN1F8CYeXbfqOaqT4Es49AWc8o/fhtoArTKrJ3Crb8OKLeakmM5z1FyjVZIYEXJFSTUYu2xQq1WQkAcelWtELlIJGwVJNpqYp8fabLtBO8SUcJuAoloov4TB5Rly0yEDfZza0xBKlmoyTHbVMqSbDyjZnLBZfwqn7jlp+mKCwvptH2oMd32yFP7kvKDa9kLF9oGPmBJNqJ9SnbZLS8l14QnnaJinsrVpHpGZNAwih4rIXH+Q8Ffbg3158iKfYyi56cdQH2IusT2b9w9oriz9R+2/V9KdtkiIVX6b03ZhDLr6E992YY6id8n7ZphCG36rpTdsk5VbxJaTvxhy3iy860zZJuVd8mdasaQAWJoTiS/xpm6T4FF9iT9skxa/44t93Yw7f4kuxAs5/SFl7XFqJMZMvuuPSStSjJBmftinAUcf2ycSYtknK+MkXrXFpJZhU8yq+sNi5M/0Uw/pkChJw96WaDBdwZk/U8MmXQgTclMmX0GmbpEzrkykg62cZ/WHsJbK+m7U5R50++WJcwI2TajKmBVyclmbWrGlJwMVqpzQr4OINKbO+GytZf8yWZpNZf9zJF1a2sSDgYk++MAGXvzWMF1+mn3/GyjYaLc2mBJzO5Iuhso1TGlIePy6thN7ki5Gg4RQnX0wION3JFwNZv/aQcvayjf70Wea92HgXX8LJW7ah34JWmnxhWX/ab0GT73mrCSsi4FJ/lf1qiYpd91cC7i35adq+dS6qeQT8CbhVDul2XqLyO7FL1F2pGhk0/qkTJii/QSO9i55p9ymGlOtFtgWe/ktJCr3o/mX7PzMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOjzHyIvJpKl8sSBAAAAAElFTkSuQmCC';
  
    }
  }

  return (
    <Bar className='navBar'><header>
      
        <HambIcon className='hamb' onClick={show} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX///8AAADPz89LS0uWlpaPj4/4+PhfX1/29vawsLAdHR3b29v8/PzExMQzMzOEhIRzc3MPDw+hoaGysrLq6uo8PDwXFxfh4eFkZGRXV1fGxsZGRkaHh4fX19d6enqnp6e7u7sLhoRgAAAChUlEQVR4nO3di1LCQAyF4eWOCIgIqPWC7/+UWhm8jZNs2Z3JJP2/J8gZK+1u02xKAAAAAAAAAAAAAAAAABDfcjWZjfyYTVbLTvl2rwN/Nrv8gBPrYi80ycw33VtXerH9NCvgwbrOAoeciGvrKous9YA31jUWutEC3ltXWOxeSfhgXWCxBzng3Lq+CuZiwivr8iq4EhNurMurYCMm9H2rOJFvGNbVVdHzhJ6f2M4WYsJH6/IqeBQTel03/SSvoYbW5VUwFBOmW+v6it3KAdPRusBiRyVhWlhXWEj+JW29WJdY6EVN6PzhW71GW1vrKgtscwKm1FjXebEmL+DHOtjjhvDHskle+/7JOPa2abofd9jyPpleD/24ztoKBgAAAAAAAAAAPs2b49iPY9PlvVPrbWT9Lqmz0VuHfEOf7QoLpZPm27N1qRdT29hPZtZ1FpjlBPTdJiw3CH+6s66x0J0W0H+zvnbb8P7JzGDwLAdcWtdXgfyp5cq6vApWwS9S7ab4ZF1eBU9iQv8twlqTsHV1VfT8bxj//zD+b2n8+2GEZxoxoOfV75nyXBpgbaH20vr+GCFjfdiDNX4P9mk8/9povzJfwu+Xpvh73q3o7y0AAAAAAAAAAIAjwedE7cbeZiavO836mvt8050/r83vzD25WehL+LmJvme0Zsy+jD+/1GeTwjd1Bq3va7SlXaf+m4SVWdDx53nHn8kef65+hLMRDmJC6+qq6HlCb2um/8jnzPhcNv0mtwl77/JuyZ3e/lv11Q+Bw5+71oOz89x/25UxOML3DSPjDMsenEMa/yzZ5HcNlXsecHJ6pvNrtwMulo2zc7mbbudyAwAAAAAAAAAAAAAAAIBP7y86VZGfUH/eAAAAAElFTkSuQmCC'/>
        
      <ImgContainer>      <Logo_img className='icon' src='https://assets.inshorts.com/website_assets/images/logo_inshorts.png' alt='logo'/>
      </ImgContainer>
      </header></Bar>
  )
}




