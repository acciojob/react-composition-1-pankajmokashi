import React, {useState} from "react"

const Comp1 = ({tabs}) => {
    let [tab, setTab] = useState("")

    function changeHandle(event){
        setTab("This is the content for " + event.target.innerText + ".")
    }

    return (
        <div>
            <ul>
                {
                    tabs.map((ele) =>(
                        <li
                            onClick={changeHandle}
                        >
                            {ele.title}
                        </li>
                    )) 
                }
            </ul>
            <p>{tab}</p>
        </div>
    )
}

export default Comp1