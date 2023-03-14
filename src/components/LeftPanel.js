import React from 'react';
import { Panel } from './styles/LeftPanel.styles';

export default function LeftPanel() {
  return (
    <Panel className='panel'>
        <ul>
            <li> First element</li>
            <li> second element</li>
            <li> Third one</li>
        </ul>
    </Panel>
  )
}
