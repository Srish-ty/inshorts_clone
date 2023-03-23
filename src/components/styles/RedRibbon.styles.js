import styled from "styled-components";

export const Ribbon =styled.div`
font-family: 'Roboto',sans-serif;
width:60%;
margin:auto;
color:white;
background-color:#f44336;
box-shadow:0vw 0.075vw 0.4vw #787878;
display:flex;
flex-direction:row;
justify-content:space-around;
padding:0.2vw;
text-align:center;

@media only screen and (max-width:800px){
    display:none;
}
`
export const AppStore = styled.img`
height:38px;
width:128 px;
margin:auto 0vw;
`