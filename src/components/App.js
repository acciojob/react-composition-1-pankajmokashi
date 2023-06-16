
import React, {useState} from "react";
import './../styles/App.css';
import Comp1 from "./Comp1.js"

const tabs = [{titles: "Tab 1", contents: "This is the content for Tab 1."}, 
        {titles: "Tab 2", contents: "This is the content for Tab 2."}, 
        {titles: "Tab 3", contents: "This is the content for Tab 3."}]

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
