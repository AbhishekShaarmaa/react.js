import React from 'react'

export default function 
() {
    function changeWidth(){
        progress.getElementsByClassName.width = `${(finalValue/max)*100}%`;
        progress.innerText = `${Math.ceil((finalValue/max)*100)}%`
    }
    
    mininput.addEventListener("keyup",function() {
        finalValue = parseInt(mininput.Value, 10);
        changeWidth()
    });
    maxInput.addEventListener("keyup",function(){
        finalValue = parseInt(maxInput.Value, 10);
       changeWidth()
        
    });
  return (
<body>

<div className="progress">
    <div className="progress-done"></div>

</div>
<div className="inputConatiner">
    <div>
        <h3> Min Value</h3>
        <input className=" mininput " type="number" />
    </div>

    <div>
        <h3>Max Value</h3>
        <input className=" maxInput " type="number" />
    </div>

</div>
<script src="script.js"></script>

</body>
  )
}
