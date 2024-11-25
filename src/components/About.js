import React, { useState } from 'react'

export default function About() {

    const [mystyle, setmystyle] = useState( {
        color: 'black',
        backgroundColor : 'white' 
    })

    const [btntext,setbutton]= useState("Enable Dark Mode")

    const darkmode =()=>{
        if (mystyle.color==='white'){
            setmystyle({
                color: 'black',
                backgroundColor : 'white' ,
                border: '2px solid white'
            })
            setbutton ("Enable Dark Mode")
        }
        else {
            setmystyle({
                color: 'white',
                backgroundColor : 'black' 
            })
            setbutton ("Enable Light Mode")
        }
    }
   
    return (
        <div classNameName='container' style={mystyle}>
            <h1 className='my-3' style={mystyle}> About Us </h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header"> 
                    <button style={mystyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Accordion Item #1
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={mystyle}>
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
    </div>
    <div className="accordion-item"  style={mystyle}>
        <h2 className="accordion-header">
        <button style={mystyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Accordion Item #2
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={mystyle}>
            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
        </div>
    </div>
    <div className="accordion-item"  style={mystyle}>
        <h2 className="accordion-header">
        <button style={mystyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Accordion Item #3
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={mystyle}>
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
        </div>
    </div>
    </div>
        <div className='conatiner'>
            <button className="btn btn-primary mx-2" onClick={darkmode}>{btntext}
                </button> 
        </div>
        </div>

    )
}
