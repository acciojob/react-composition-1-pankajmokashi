import React, {useState} from "react"

const Comp1 = ({tabs}) => {
    let [tab, setTab] = useState("This is the content for tab 1.")

    function changeHandle(content){
        setTab(content)
    }

    return (
        <div>
            <ul>
                {
                    tabs.map((ele) =>(
                        <li
                            onClick={() => changeHandle(ele.contents)}
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
