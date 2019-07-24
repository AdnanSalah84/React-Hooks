import React, {useState} from 'react';
import './App.css';

function App() {

  const [inputText, setInputText] = useState('');
  const [historyList, setHistoryList] = useState([]);

  return (
    <div className="App">

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

export default App;
