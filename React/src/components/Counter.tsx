import { useState } from "react"

const Counter = () => {
    let [count, setCount] = useState(0)

    function increment() {
        // setCount(count + 1)
        setCount((count) => {
            return count + 1
        })
    }
    return (
        <div>
            <p>{count}</p>
            <button onClick={increment}>Button</button>
        </div>
    )
}

export default Counter