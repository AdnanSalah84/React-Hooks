import React, {useState} from 'react';
import './App.css';
import ImageToggleOnMouseOver  from './ImageToggleOnMouseOver';


function App() {
  return (
    <div className="App">
      {/* <InputElement />   */}
      <ImageChangeOnMouseOver />
    </div>
  );
}

function InputElement(){
  const [inputText, setInputText] = useState('');
  const [historyList, setHistoryList] = useState([]);

  return (
    <div>
        <input 
          onChange={(e)=>{ 
            setInputText(e.target.value);
            setHistoryList([...historyList,e.target.value]);
          }} 
          placeholder="Enter some text"/>
        <br/>
        {inputText}
        <hr/> <br/>
        <ul>
          {historyList.map((rec)=>{
            return <div>{rec}</div>
          })}
        </ul> 
    </div>
  );
}

function ImageChangeOnMouseOver(){
  return (
    <div>
      {/* <img src="./speakers/bw/Speaker-187.jpg" alt=""/>
      <img src="./speakers/bw/Speaker-1124.jpg" alt=""/> */}
      <ImageToggleOnMouseOver primaryImg="./speakers/bw/Speaker-187.jpg" 
                              secondaryImg="./speakers/Speaker-187.jpg" alt=""/>
      <ImageToggleOnMouseOver primaryImg="./speakers/bw/Speaker-1124.jpg"
                              secondaryImg="./speakers/Speaker-1124.jpg" alt=""/>
   </div>
  );
}

export default App;
