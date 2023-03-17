import React, {useState} from 'react'//import react hoo


export default function Form(props){

  const ToUpperCase =()=>{
    //console.log('convert into ToUpperCase'+text)
  let newText= text.toUpperCase();
  setText(newText)
  props.showAlert('convert to uppercase')}

  const ToLowerCase =()=>{
    let newText1 = text.toLowerCase();
    setText(newText1)
    props.showAlert('Convert to Lowercase' , 'success')
  }

  const ClearText=()=>{
    let newText2= text.slice(text.length);
    setText(newText2)
    props.showAlert('Convert to ClearText')
  }

  const ClearSpace=()=>{
    let newText3 = text.split(/[ ]+/);
    setText(newText3.join(' '));
    props.showAlert('Convert to ClearText')
  
  }

  const boldText=() => {
    let textarea = document.getElementById('form4Example3')
    textarea.style.fontWeight = "bold";
    props.showAlert('Convert to ClearText')
    
  }

  const italicText=() => {
    let textarea = document.getElementById('form4Example3');
    textarea.style.fontStyle = "italic";
    props.showAlert('Convert to ClearText')
  }

  const underlineText=() => {
   let textarea = document.getElementById('form4Example3');
  //  document.body.innerHTML.replace(window.getSelection());
   textarea.style.textDecoration = "underline ";
   props.showAlert('Convert to underline')
  }

  const Text = () => {
    let textarea = document.getElementById('form4Example3');
    textarea.style.textTransform = "capitalize"
    props.showAlert('Convert to Text')
   }

   const textAlign = () => {
    let textarea = document.getElementById('form4Example3');
    textarea.style.textAlign = "right"
   }

   const textAlign1 = () => {
    let textarea = document.getElementById('form4Example3');
    textarea.style.textAlign = "Left"
   }

  const CopyText=()=>{
    let textarea = document.getElementById('form4Example3')
    textarea.select();
    navigator.clipboard.writeText(textarea.value);
  }
  


  const OnChange =(event)=>{
    //console.log('OnChange')
    setText(event.target.value)
  }

  const [text,setText]= useState ('Enter your text here')

  return(
        <>
        <div style={{color: props.colour === 'dark'?'white':'black'}}>
          <p className="text-center fs-1 mt-3">{props.heading}</p>   
        <div className="form-outline mb-4">
        <textarea className="form-control" id="form4Example3" rows="4"  value={text} onChange={OnChange}></textarea> 
        </div> 
        <button type="submit" className ="btn btn-primary btn-block mx-4 " onClick={ToUpperCase}>convert to Uppercase</button>
        <button type="submit" className ="btn btn-primary btn-block mx-4 " onClick={ToLowerCase}> convert to LowerCase</button>
        <button type="submit" className ="btn btn-primary btn-block mx-4" onClick={ClearText}> ClearText</button>
        <button type="submit" className ="btn btn-primary btn-block mx-4" onClick={ClearSpace}>ClearSpace</button>
        <button type="submit" className ="btn btn-primary btn-block mx-4" onClick={CopyText}>Copy</button>
        <button type="submit" className ="btn btn-primary btn-block mx-4" onClick={boldText}>Bold</button>
        <button type="submit" className ="btn btn-primary btn-block mx-4" onClick={italicText}>Italic</button>
        <button type="submit" className ="btn btn-primary btn-block mx-4" onClick={underlineText}>Underline</button>
        <button type="submit" className ="btn btn-primary btn-block mx-4" onClick={Text}>firstletter</button>
        <button type="submit" className ="btn btn-primary btn-block mx-4" onClick={textAlign}>Right</button>
        <button type="submit" className ="btn btn-primary btn-block mx-4" onClick={textAlign1}>Left</button>
        </div><br/>
        <div style={{color: props.colour === 'dark'?'white':'black'}}><br/>
        <h1>Word counter</h1>
         <p>{text.length} charecter</p>  
         <p>{text==='' ? 0 :text.split(" ").length} words & {text.length} character</p>
         <p>{0.008*text.length} minutes </p>
        <h1>Preview</h1> 
         <p>{text.length}charecter</p>  
         <p>{text==='' ? 0 :text.split(" ").length} words & {text.length} character</p>
        </div>
        </>
 );
      
}