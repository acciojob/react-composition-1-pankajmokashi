
import React from "react";
import './../styles/App.css';
import Comp1 from "./Comp1.js"

const tabs = [{title: "Tab 1", content: "This is the content for Tab 1."}, 
        {title: "Tab 2", content: "This is the content for Tab 2."}, 
        {title: "Tab 3", content: "This is the content for Tab 3."}]

const App = () => {
  return (
    <div>
        <Comp1 tabs={tabs}/>
    </div>
  )
}

export default App
