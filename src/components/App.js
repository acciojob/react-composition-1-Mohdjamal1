import React,{useState} from "react";
import './../styles/App.css';
import Tabs from "./Tabs";

const App = () => {
  const[data,setData] = useState();
  return (
    <div>
      <li onClick={()=>setData("Tab 1")}>Tab 1</li>
       <li onClick={()=>setData("Tab 2")}>Tab 2</li>
       <li onClick={()=>setData("Tab 3")}>Tab 3</li>

       <Tabs value={data} />
    </div>
  )
}

export default App
