import { useState } from "react";
import list from "./list"

const Check = () => {
    const [ch, setCh] = useState({ "HTML": false, "CSS": false, "JAVA": false, "JAVASCRIPT": false, "ORACLE": false, "Nodejs": false, "PYTHON": false, "MySQL": false })

    const handleCh = e => {
        const { value, checked } = e.target
        setCh(data => {
            return { ...data, [value]: checked }
        })
    }
    return (
        <>
            <h1>6. 체크박스값 확인</h1>
            <h2>{JSON.stringify(ch)}</h2>
            {list.map((v, i) => {
                // return <div>{v}</div>
                return (
                    <span key={i}>
                        <input type="checkbox" name="" id="" value={v} onChange={handleCh} /> {v} {' '}
                    </span >
                )
            })}
            <ol style={{ listStylePosition: "inside" }}>
                {list
                    .filter(ck => ch[ck])
                    .map((v) => <li>{v}</li>)}
            </ol>
        </>
    )
}
export default Check
