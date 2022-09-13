import { React, useEffect, useState } from "react";
import Circle from "./components/Circle";
import './components/progressbar.css';

function App() {
  const steps = [1, 2, 3];
  const circle = steps.length;
  const [active, setActive] = useState(1);
  const [progressWidth, setProgressWidth] = useState(0);
  const arr=[];
  useEffect(()=>{
    setProgressWidth(100/circle*active);
  }, [circle, active]);
  
  for (let i=1; i<circle+1; i++){
    // arr.push(<Circle className="circle">{i}</Circle>)
    arr.push(<Circle key={i} children={i} active={active} />)
  }

  return (
    <div className="App">
      <div className='container'>
        <div className="content">

          <div className="progressbar">
            <div className="progress" style={{width: progressWidth + "%"}}></div>
            {arr.map(element=>element)}
          </div>
          <div className='buttons'>
            <button className='previous-button' disabled={active===steps[0] ? true : false} onClick={()=> circle<=1 ? setActive(1) : setActive(active-1)}>Previous</button>
            <button className='next-button' disabled={active===steps[steps.length-1] ? true : false} onClick={()=> active>=circle ? setActive(circle) : setActive(active+1)}>Next</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
