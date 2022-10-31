import React,{useState} from 'react'




export default function TextForm(props) {
    const handleclick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Text is converted to uppercase!!!','success')
    }
    const handleonchange = (event)=>{
        setText(event.target.value)
     
    }
    const ClearText = ()=>{
        setText('')
        props.showAlert('Text Cleared!!!','success')
        
    }
    const CopyText = ()=>{
       let text = document.getElementById('myBox')
       navigator.clipboard.writeText(text.value)
       props.showAlert('Text Copied!!!','success')
   
    }
    const lowerCase = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert('Text is converted to lowercase!!!','success')
    }
    const handleExtra = ()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(' '))
        props.showAlert('Extra space removed!!','success')
    }
    
    const [text,setText] = useState('');
    return (
    <> 
   
    <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
    
        <div className='container' >
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleonchange} id="myBox" rows="3" style={{color:props.mode==='light'?'black':'white',backgroundColor:props.mode==='light'?'white':'#303032fa'}}></textarea>
            </div>
            <button className="btn btn-primary " onClick={handleclick}>Convert to uppercase</button>
            <button className="btn btn-secondary mx-2" onClick={lowerCase}>Convert to lowercase</button>
            <button className='btn btn-danger mx-2' onClick={ClearText}>Clear Text</button>
            <button className='btn btn-success mx-2' onClick={CopyText}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtra}>Remove Extra space</button>
            
        </div>
        <div className='container' style={{color:props.mode}}>
            <h1>Statics</h1>
            <p> Word count : {text.split(" ").length} 
            <br/>Character count : {text.length}<br/>
            Takes {text.split(" ").length * 0.008} minutes to read.</p>
        </div>
        <div className='container' style={{color:props.mode}}>
            <h1>Preview</h1>
            <p>{text}</p>    
        </div>
    </div>
    </>
  )
}
