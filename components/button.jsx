import React from "react"

export default function Button() {
    const [count, setCount] = React.useState(0)
    return <button
        onClick={() => {
            setCount(count + 1)
            if (count === 2) {
                alert('Too much! 😕')
                setCount(0)
            }
        }}
    >Can You Click Me ?</button>
}