import React from 'react';
import { Panel } from './styles/LeftPanel.styles';
import './styles/panelItem.styles.css';



export const PanelItem=({setCategory})=>{
  const categories=["general","business",'sports','technology','startup','entertainment','science',"health"];
  
  return(
    categories.map(cat=>(
      <li className='panIt' key={cat} onClick={() => {setCategory(cat); }}>{cat}</li>
    ))
      
  )
}


export default function LeftPanel({setCategory}) {
  return (
    <Panel className='panel'>
        <ul>
            
              <PanelItem setCategory={setCategory}></PanelItem>
            
        </ul>
    </Panel>
  )
}

