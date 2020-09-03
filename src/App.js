import React from 'react';
import Task1 from './components/Task1';
import Task2 from './components/Task2';
import Task3 from './components/Task3';
import Task4 from './components/Task4';
import Task5 from './components/Task5';
import Task6 from './components/Task6';
import Task7 from './components/Task7';
import ColorPicker from './components/ColorPicker';

function App(){
  return (
    <ul>
      <li> <Task1 /> </li>
      <li> <Task2 /> </li>
      <li> <Task3 min={-10} max={10} /> </li> 
      <li> <Task4 value={5} /> </li>
      <li> <Task5 value={5} onChange={value => console.log(value)} /> </li>
      <li> <Task6 red={5} green={7} blue={10} /> </li>
      <li> <Task7 red={255} green={0} blue={0} /> </li>
      <li> <ColorPicker value={'aaffcc'} onChange={color => console.log(color)} /> </li> 
    </ul>
  )
}

export default App;
