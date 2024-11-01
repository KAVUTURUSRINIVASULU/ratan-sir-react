/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/
/*function App(){
  return(
    <h1>good</h1>
  )
}
export default App;*/

import { useState } from "react";

//const { useState } = require("react");


/*function App(){
  
  const username = "raj";
  const password = "raj@123"

  return(
    <>
    <h1>userdetails</h1>
    <p>user id:{username}</p>
     <p>user password:{password}</p>
     </>
    )
    
}
export default App;
*/

/*function App(){
  const items = [{id:101,name:'srinu',category:'nonveg'},
    {id:102,name:'babu',category:'veg'}];
const listItems = items.map(item=>(<li key={items.id} style={{color:item.category=="veg"?'green':'red'}} >id:{item.id},name:{item.name}</li>));

return(
  <>
 
  <h1>list of items</h1>
  
  <ul>{listItems}</ul>
  </>
)
  
}
  
export default App;*/
/*function App()
  {
    const items = [{id:101,name:'srinu',category:'nonveg'},
      {id:102,name:'babu',category:'veg'}];
  
  }*/

/*function App(){
  const [count,setCount] = useState(0)
  const handleclick = ()=> setCount(count+1);


  return(
    <>
    <h1> count the value:{count}</h1>
    <button style={{color:"green"}} onClick = {handleclick}>increment
      </button>
    
    </>
  )
}
export default App;*/

function App(){
  const [apples, setApples] = useState(0);
  return(
    <>
    <h1>number of apples: {apples}</h1>
    {apples === 0 ? (
      <p>no apples left </p>
    ):(
      <p> have some apples</p>
    )}
    <button onClick={() => setApples(apples + 1)}>Add 1 apple</button>
    </>

  )
}

