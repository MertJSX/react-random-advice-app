import { useState, useEffect } from "react"
import axios from "axios"
import "./style.css"

function Advice() {

    const [advice, setAdvice] = useState({})
    useEffect(() => {
        axios.get("https://api.adviceslip.com/advice").then((data) => {
            setAdvice(data.data.slip)
        })
    }, [])
    return (
        <div className="container">
            <h3>ID: #{advice.id}</h3>
            <h2>Advice: {advice.advice}</h2>
            <hr />
            <button
            onClick={() => {
                axios.get("https://api.adviceslip.com/advice").then((data) => {
                    setAdvice(data.data.slip)
                })
            }}
            >New random advice</button>
        </div>
    )
}

export default Advice
