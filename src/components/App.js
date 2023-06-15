
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  let [tab, setTab] = useState("")
  return (
    <div>
        {/* Do not remove the main div */}
      <ul>
        <li onClick={() => setTab("This is the content for Tab 1.")}>Tab 1</li>
        <li onClick={() => setTab("This is the content for Tab 2.")}>Tab 2</li>
        <li onClick={() => setTab("This is the content for Tab 3.")}>Tab 3</li>
      </ul>
      <p>{tab}</p>
    </div>
  )
}

export default App
