import React, { useState } from 'react';
import './TextForm.css';

export default function TextForm(props) {
  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showalert ("Converted to UpperCase!","success");
  };

  const handleDownClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showalert ("Converted to LowerCase!","success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value); // Update the text state on change
  };

  const handlecleartext = () => {
    setText(''); // Update the text state on change
    props.showalert ("Text is cleared!","success");
  };
  
  const handledownload =()=>{
    const element = document.createElement('a');
    const file = new Blob([text], {type: 'text/plain'});
    element.href= URL.createObjectURL(file)
    element.download='text.file';
    document.body.appendChild(element);
    element.click();
    props.showalert ("Text File is downloaded","success");
  };

  const handleRemoveExtraSpaces = () => {
    let newText = text.replace(/\s+/g, ' ').trim();
    setText(newText);
    props.showalert ("Extra spaces has been removed","success");
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    props.showalert("Text copied to clipboard!","success");
  };

  const handleWordCount = () => {
    if (!wordToFind.trim()) {
      alert('Please enter a word to find!');
      return;
    }
    const count = text.toLowerCase().split(' ').filter((word) => word === wordToFind.toLowerCase()).length;
    setWordCount(count);
  };

  const handleFindAndReplace = () => {
    if (!wordToFind.trim()) {
      alert('Please enter a word to find!');
      return;
    }
    if (!wordToReplace.trim()) {
      alert('Please enter a word to replace with!');
      return;
    }

    const newText = text.replaceAll(wordToFind, wordToReplace); // Replace all occurrences
    setText(newText);
    alert(`Replaced all occurrences of "${wordToFind}" with "${wordToReplace}"`);
  };
  
  // const handleTextToSpeech = () => {
  //   if (!text.trim()) {
  //     alert('Please enter some text to speak!');
  //     return;
  //   }
  //   let speech = new SpeechSynthesisUtterance(text);
  //   // Set language
  //   speech.lang = 'en-US';
  //   // Set a voice
  //   const voices = window.speechSynthesis.getVoices();
  //   if (voices.length > 0) {
  //     speech.voice = voices[0];
  //   }
  //   // Speak the text
  //   window.speechSynthesis.speak(speech);
  // };
  
  const [text, setText] = useState('Enter your text here');
  const [wordToFind, setWordToFind] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [wordToReplace, setWordToReplace] = useState('');

  return (
    <>
      <div className="container" style= {{backgroundColor: props.Mode==='dark'?'grey':'white',
                    color: props.Mode==='dark'?'White':'Black'}}>
        <h1 style= {{backgroundColor: props.Mode==='dark'?'grey':'white',
                    color: props.Mode==='dark'?'White':'Black'}}> {props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style= {{backgroundColor: props.Mode==='dark'?'grey':'white',
                    color: props.Mode==='dark'?'White':'Black'
            }}
            id="MyBox"
            rows="8"
          ></textarea>
        </div>

        <button className="btn btn-primary mx-2"onClick={handleUpClick}>
            Convert to Upper Case
        </button>

        <button className="btn btn-primary mx-3 my-3" onClick={handleDownClick}>
          Convert to Lower Case
        </button>

        <button className="btn btn-primary mx-2" onClick={handleCopyText}>
          Copy Text
        </button>

        {/* <button className="btn btn-primary mx-2" onClick={handleTextToSpeech}>
          Speak Text
        </button> */}

        <button className="btn btn-primary mx-2" onClick={handlecleartext}>
          Clear Text
        </button>

        <button className="btn btn-primary mx-2" onClick={handleRemoveExtraSpaces}>
          Remove Extra Spaces
        </button>

        <button className='btn btn-primary mx-2' onClick={handledownload}>
          Download Text
        </button>

      </div>

      <div className="container my-2" style= {{backgroundColor: props.Mode==='dark'?'grey':'white',
                    color: props.Mode==='dark'?'White':'Black'}}>
        <h2 style= {{backgroundColor: props.Mode==='dark'?'grey':'white',color: props.Mode==='dark'?'White':'Black'}}> 
                       Your Text Summary</h2>

        <p style= {{backgroundColor: props.Mode==='dark'?'grey':'white',color: props.Mode==='dark'?'White':'Black'}}>
                      Number of words: {text.split(/\s+/).filter((element)=>{ //filter array method jo return krta ha true ya false based on us filter me jo array element gya ha uspy
                      return element.length!==0}).length}</p>

        <p style= {{backgroundColor: props.Mode==='dark'?'grey':'white',color: props.Mode==='dark'?'White':'Black'}}>
                       Number of characters: {text.length}</p>

        <p style= {{backgroundColor: props.Mode==='dark'?'grey':'white', color: props.Mode==='dark'?'White':'Black'}}>
                      Time required to read the text is: {0.008*text.split(/\s+/).filter((element)=>{ 
                      return element.length!==0}).length} minutes </p>
      </div>

      {/* Count Specific Word Occurrence Feature */}
      <div className="container my-3"  style= {{backgroundColor: props.Mode==='dark'?'grey':'white', color: props.Mode==='dark'?'White':'Black'}}>
        <h2  style= {{backgroundColor: props.Mode==='dark'?'grey':'white', color: props.Mode==='dark'?'White':'Black'}}> 
                 Count Specific Word Occurrence  </h2>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter the word to find"
            value={wordToFind}
            onChange={(e) => setWordToFind(e.target.value)}
          />
        </div>
        <button className="btn btn-primary mx-2" onClick={handleWordCount}>
          Count Word Occurrence
        </button>
        {wordToFind && (
          <p>
            The word <strong>"{wordToFind}"</strong> occurs{' '}
            <strong>{wordCount}</strong> times.
          </p>
        )}
        </div>

        {/* Find and Replace Feature */}
      <div className="container my-3" style= {{backgroundColor: props.Mode==='dark'?'grey':'white',color: props.Mode==='dark'?'White':'Black'}}>
        <h2 style= {{backgroundColor: props.Mode==='dark'?'grey':'white',color: props.Mode==='dark'?'White':'Black'}}>
            Find and Replace</h2>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter the word to find"
            value={wordToFind}
            onChange={(e) => setWordToFind(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter the word to replace with"
            value={wordToReplace}
            onChange={(e) => setWordToReplace(e.target.value)}
          />
        </div>
        <button className="btn btn-primary mx-2" onClick={handleFindAndReplace}>
          Find and Replace
        </button>
      </div>
    </>
  );
}
