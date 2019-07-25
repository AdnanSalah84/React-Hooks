import React, {useState} from 'react';
import './App.css';
import ImageToggleOnMouseOver  from './ImageToggleOnMouseOver';
import ImageToggleOnScroll from './ImageToggleOnScroll';


function App() {
  return (
    <div className="App">
      <InputElement /> 
      <ImageChangeOnMouseOver />
      <hr/>
      <ImageChangeOnScroll/>
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

function ImageChangeOnScroll(){
  return (
    <div>
      {[1124,187,823,1269,1530].map(speakerId => {
        return (
          <div key={speakerId}>
             <ImageToggleOnScroll primaryImg={`./speakers/bw/Speaker-${speakerId}.jpg`} 
                              secondaryImg={`./speakers/Speaker-${speakerId}.jpg`} alt=""/>
          </div>
        )
      })}
     

   </div>
  );
}


// function Syntax () {
// const [checkBoxValue, setCheckBoxValue] = useState(false);

//   useEffect(() =>{
//     console.log('in useEffect');
//     return () =>{
//       console.log('in useEffect CleanUp');
//     }
//   },[]);
//   return (
//     <div></div>
//   );
// }

export default App;
