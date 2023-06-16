
import React, {useState} from "react";
import './../styles/App.css';
import Comp1 from "./Comp1.js"

const tabs = [{title: "Tab 1", content: "Content for Tab 1"}, 
        {title: "Tab 2", content: "Content for Tab 2"}, 
        {title: "Tab 3", content: "Content for Tab 3"}]

const App = () => {
  let [tab, setTab] = useState("")
  return (
    <div>
        {/* Do not remove the main div */}
        <Comp1 tabs={tabs}/>
    </div>
  )
}

export default App
