import React, {useState} from "react"

const Comp1 = ({tabs}) => {
    let [tab, setTab] = useState("")

    function changeHandle(content){
        setTab(content)
    }

    return (
        <div>
            <ul>
                {
                    tabs.map((ele) =>(
                        <li
                            onClick={() => changeHandle(tab.contents)}
                        >
                            {ele.titles}
                        </li>
                    )) 
                }
            </ul>
            <p>{tab}</p>
        </div>
    )
}

export default Comp1
