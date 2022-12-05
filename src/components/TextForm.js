import React,{useState} from 'react'
import PropTypes from "prop-types"

export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked");
    setText(text.toUpperCase());
  }

  const handleCopy = ()=>{
    var text = document.getElementById('myBox')
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleOnChange = (event)=>{
    // console.log("onChange");
    setText(event.target.value);
  }

  const handleLowClick = ()=>{
    // console.log("Clicked on lowerCase");
    setText(text.toLowerCase());
  }

  const handleClearClick = ()=>{
    // console.log("Clicked on Clear");
    setText("");
  }

  const [text,setText] = useState('');
  let l = 0;
      if(text.endsWith(" ")){
        l = text.split(" ").length - 1
      }
      else if(text.length===0){
        l = 0
      }
      else{
        l = text.split(' ').length
      }
  return (
    <>
    <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3 my-3" >
            <textarea className="form-control " value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}} id="myBox" rows="8" ></textarea>
        </div>
        <button className={`btn btn-${props.mode==='dark'?'dark':'primary'} mx-2`} onClick={handleUpClick}>Convert to UpperCase</button>
        <button className={`btn btn-${props.mode==='dark'?'dark':'primary'} mx-2`} onClick={handleLowClick}>Convert to LowerCase</button>
        <button className={`btn btn-${props.mode==='dark'?'dark':'primary'} mx-2`} onClick={handleClearClick}>Clear</button>
        <button className={`btn btn-${props.mode==='dark'?'dark':'primary'} mx-2`} onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
      <h2>Your Text Summary</h2>
      <p>{l} words and {text.length} characters</p>
      <p>{0.008 * l} minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Your text will preview here'}</p>
    </div>
    </>
  )
}

TextForm.propTypes = {
    heading : PropTypes.string.isRequired
}

TextForm.defaultProps = {
    heading : "Enter your text"
}