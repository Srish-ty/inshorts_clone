import styled from 'styled-components';
import {NewsCard} from '../NewsCard';

export const MainContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
`

export const StyledCard= styled(NewsCard)`
width:60%;
margin:1vw auto;
padding: 2vw;
height:15vw;
border:0px solid red;
box-shadow: 0vw 0.075vw 0.4vw #787878;
`
