
import { useState } from 'react';
import './App.css';
import { UC,LC,NC,SC } from './data/ParsChar';

function App() {
  let [uppercase,setUppercase] = useState(false)
  let [lowercase,setLowercase] = useState(false)
  let [number,setNumber] = useState(false)
  let [symbols,setSymbols] = useState(false)
  let [passwordlen,setPasswordLen] = useState(10)
  let [fPass,setPass] = useState('')

  let createPassword = ()=> {
    let finalPass=''
    let charSet =''
    if(uppercase || lowercase || number || symbols){
      if(uppercase) charSet += UC;
      if(lowercase) charSet += LC;
      if(number) charSet += NC;
      if(symbols) charSet += SC;
      for(let i=0;i<passwordlen;i++){
         finalPass += charSet.charAt(Math.floor(Math.random()*charSet.length))
     
        }
      setPass(finalPass)

    }
    else{
      alert("Please select atleast one checkbox!......")
    }
  }

  let copyPass = ()=> {
    navigator.clipboard.writeText(fPass)
  }

  return (
    <>
      <div className="passwordBox">
         <h2>Password Generator</h2>

         <div className="passwordBoxIn">
            <input type="text" readOnly value={fPass} /><button onClick={copyPass}>copy</button>
         </div>

         <div className="passwordLength">
         <label> Password Length :</label>
          <input type="number" value={passwordlen} max="20" min="8" onChange={(event)=>{setPasswordLen(event.target.value)}}/>
         </div>

         <div className="passwordLength">
         <label> Inculding UpperCase</label>
          <input type="checkbox" checked={uppercase} onChange={()=>{setUppercase(!uppercase)}}/>
         </div>

         <div className="passwordLength">
         <label> Inculding LowerLetters</label>
         <input type="checkbox" checked={lowercase} onChange={()=>{setLowercase(!lowercase)}}/>
         </div>

         <div className="passwordLength">
         <label>Inculding Numbers</label>
          <input type="checkbox" checked={number} onChange={()=>{setNumber(!number)}}/>
         </div>

         <div className="passwordLength">
         <label> Inculding Special Characters</label>
          <input type="checkbox"checked={symbols} onChange={()=>{setSymbols(!symbols)}}/>
         </div>

          <button className="btn" onClick={createPassword}>Generate Password</button>
     
      </div>
    </>
  );
}

export default App;
