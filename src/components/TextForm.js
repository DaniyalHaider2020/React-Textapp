import React from 'react'

export default function TextForm(props) {
  return (
    <div>
        <h1> {props.heading}</h1>
        <div className="mb-3">
        <label for="MyBox" class="form-label"> Example text area </label>
        <textarea className="form-control" id="MyBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary">Convert to Upper Case </button>
    </div>
  )
}
