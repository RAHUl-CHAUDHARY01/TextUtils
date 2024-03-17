import React,{useState} from 'react'
import PropTypes from 'prop-types'
import Alert from './Alert';



export default function Textform(props) {
const handleUpclick = ()=>{
  console.log("uppercase was clicked"+text);
  let newtext=text.toUpperCase();
  setText(newtext);
  props.showAlert("converted to upper case","success");
}
const handleloclick = ()=>{
  console.log("lowercase was clicked"+text);
  let newtext=text.toLowerCase();
  setText(newtext);
  props.showAlert("converted to lower case","success");
}
const handleclearclick = ()=>{
  let newtext='';
  setText(newtext);
  props.showAlert("Text Cleared","success");
}
const handlecopyclick = ()=>{
  navigator.clipboard.writeText(text); 
  props.showAlert("Copied to Clipboard!", "success");
}
const handleextraclick = ()=>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("Extra spaces removed!", "success");
}


const handleonchange = (event)=>{
  console.log("on change");
  setText(event.target.value);
}

  const [text, setText] = useState('enter text here');
  console.log(props.mode)

  return (
   <>
   <div className="container my-4">
        <h1 style={{color:props.mode==='dark'? 'white':'black'}}>{props.heading}</h1>
        <div className="mb-3">
        <textarea className={`form-control bg-${props.mode === 'dark'? '#494b4c':'white'}`} style={{ backgroundColor: props.mode === 'dark'? '#494b4c':'white', color: props.mode==='dark'? 'white':'black'}} value={text} onChange={handleonchange}id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpclick}>convert to uppercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleloclick}>convert to lowercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleclearclick}> Clear Text</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handlecopyclick}>Copy Text</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleextraclick}>Remove Extra Spaces</button>
    </div>
    <div className="container-my2" style={{color:props.mode==='dark'? 'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.08* text.split(/\s+/).filter((element)=>{return element.length!==0}).length}Minutes read</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  )
}
Textform.propTypes = {
    heading: PropTypes.string
}
