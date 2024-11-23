import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };

  const handleDownClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };

  const handleOnChange = (event) => {
    setText(event.target.value); // Update the text state on change
  };

  const [text, setText] = useState('Enter your text here');
  const [loading, setLoading] = useState(false);

  // Paraphrase the text using OpenAI API with fetch
  const handleParaphrase = async () => {
    if (!text.trim()) {
      alert('Please enter some text to paraphrase!');
      return;
    }

    setLoading(true); // Show loading state

    try {
      const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`, // Replace with your OpenAI API key
        },
        body: JSON.stringify({
          model: 'text-davinci-003', // GPT model to generate paraphrased text
          prompt: `Paraphrase the following text:\n${text}`,
          max_tokens: 200,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const paraphrasedText = data.choices[0].text.trim();
      setText(paraphrasedText); // Update text with the paraphrased version
    } catch (error) {
      console.error('Error paraphrasing text:', error);
      alert('Failed to paraphrase text. Please try again later.');
    } finally {
      setLoading(false); // Hide loading state
    }
  };

  return (
    <>
      <div className="container">
        <h1> {props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="MyBox"
            rows="8"
          ></textarea>
        </div>
        <button
          className="btn btn-primary my-3"
          onClick={handleUpClick}
        >
          Convert to Upper Case
        </button>
        <button
          className="btn btn-primary my-3"
          onClick={handleDownClick}
        >
          Convert to Lower Case
        </button>
        <button
          className="btn btn-primary my-3"
          onClick={handleParaphrase}
          disabled={loading}
        >
          {loading ? 'Paraphrasing...' : 'Paraphrase Text'}
        </button>
      </div>
      <div className="container my-2">
        <h1> Your Text Summary</h1>
        <p>Number of words: {text.split(/\s+/).filter((word) => word.length > 0).length}</p>
        <p>Number of characters: {text.length}</p>
      </div>
    </>
  );
}
