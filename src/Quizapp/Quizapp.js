import React, { createRef, useState } from 'react'
import './quiz.css'
function Quizapp() {
 let arr=[
  {
    "id":"1",
    "question":"Find 2+2",
    "option1":"2",
    "option2":"5",
    "option3":"4",
    "option4":"3"
  },
  {
    "id":"2",
    "question":"Find 2*3",
    "option1":"2",
    "option2":"5",
    "option3":"6",
    "option4":"3"
  },
  {
    "id":"3",
    "question":"Find 4/2",
    "option1":"2",
    "option2":"5",
    "option3":"7",
    "option4":"3"
  },
  {
    "id":"4",
    "question":"Find 6*2",
    "option1":"2",
    "option2":"12",
    "option3":"14",
    "option4":"36"
  },
  {
    "id":"5",
    "question":"Find 7*2",
    "option1":"2",
    "option2":"12",
    "option3":"14",
    "option4":"36"
  },
  {
    "id":"6",
    "question":"Find 8*8",
    "option1":"64",
    "option2":"72",
    "option3":"64",
    "option4":"36"
  }
 ]
 const val1=createRef();
 const val2=createRef();
 const val3=createRef();
 const val4=createRef();
 const btnsave=(e)=>
 {
    
 }
 


  return (
    <>
     <div id="outer">
      <div id="top">Quiz App</div>
      <div id="bottom">
        <div id="left">
        <div className="left-top" id={arr[0].id}>
         Question -{arr[0].id}
         <p>{arr[0].question}</p>
         <input type="radio" name="a" id="val1" ref={val1} value="2"></input><span>{arr[0].option1}</span><br></br>
         <input type="radio" name="a" id="val2" ref={val2} value="5"></input><span>{arr[0].option2}</span><br></br>
         <input type="radio"  name="a" id="val3" ref={val3} value="4"></input><span>{arr[0].option3}</span><br></br>
         <input type="radio" name="a" id="val4" ref={val4} value="3"></input><span>{arr[0].option4}</span><br></br>
         </div>
         <div className="left-top display" id={arr[1].id}>
         Question -{arr[1].id}
         <p>{arr[1].question}</p>
         <input type="radio"></input><span>{arr[1].option1}</span><br></br>
         <input type="radio"></input><span>{arr[1].option2}</span><br></br>
         <input type="radio"></input><span>{arr[1].option3}</span><br></br>
         <input type="radio"></input><span>{arr[1].option4}</span><br></br>
         </div>
         <div className="left-top display" id={arr[2].id}>
         Question -{arr[2].id}
         <p>{arr[1].question}</p>
         <input type="radio"></input><span>{arr[2].option1}</span><br></br>
         <input type="radio"></input><span>{arr[2].option2}</span><br></br>
         <input type="radio"></input><span>{arr[2].option3}</span><br></br>
         <input type="radio"></input><span>{arr[2].option4}</span><br></br>
         </div>
         <div className="left-top display" id={arr[3].id}>
         Question -{arr[3].id}
         <p>{arr[3].question}</p>
         <input type="radio"></input><span>{arr[3].option1}</span><br></br>
         <input type="radio"></input><span>{arr[3].option2}</span><br></br>
         <input type="radio"></input><span>{arr[3].option3}</span><br></br>
         <input type="radio"></input><span>{arr[3].option4}</span><br></br>
         </div>
         <div>
         <button id="btn1" onClick={btnsave}>Save and next</button><button id="btn2">Clear Response</button><button id="btn3">Mark For Review</button>
         <button id="btnsrn">Save and mark for review and next</button><button id="btn4">Submit and close</button>
         </div>
        </div>
        <div id="right">
          <div id="right_Top">
            <div id="rtopOuter">
            <div id="divmain"><div class="div1" id="div1"></div><span>Not visited</span></div>
            <div id="divmain"><div className="div1" id="div2"></div><span>Not Answered</span></div>
            </div>
            <div id="rtopOuter">
            <div id="divmain"><div className="div1" id="div3"></div><span>Answered</span></div>
            <div id="divmain"><div className="div1" id="div4"></div><span>Marked for review</span></div>
            </div>
            <div id="rtopOuter">
            <div id="divmain"><div className="div1" id="div5"></div><span>Answer And Marked for review</span></div>
            </div>
          </div>
          <div id="right_bottom">
            <div className='div2'>1</div>
            <div className='div2'>2</div>
            <div className='div2'>3</div>
            <div className='div2'>4</div>
            <div className='div2'>5</div>
            <div className='div2'>6</div>
          </div>
        </div>
      </div>

     </div>
    </>
  )
}

export default Quizapp