import React, { useState, useEffect } from "react";
import useCounter from "./UseCounter";

const Accommodate = () => {
    const [isFull, setIsFull] = useState(false)
    const [count, increaseCount, decreaseCount] = useCounter(0)
    // const [count, setCount] = useState(init)
    // const increaseCount = () => setCount(count + 1)
    // const decreaseCount = () => setCount(count - 1)

    useEffect(() => {
        console.log(count, isFull)
        if (count > 10) {
            setIsFull(true)
        } else {
            setIsFull(false)
        }
    }, [count, isFull])

    return (
        <>
            <p>{`총 ${count}명 수용`}</p>
            <button onClick={increaseCount} disabled={isFull}>입장</button>
            <button onClick={decreaseCount}>퇴장</button>
            {isFull && <p style={{ color: "lightcoral", backgroundColor: "skyblue" }}>정원이 가득 찼습니다</p>}
        </>
    )
}

export default Accommodate