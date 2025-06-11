import { useState } from "react"
import list from "./list"

// const list = ['HTML', 'CSS', 'JAVA', 'JAVASCRIPT', 'ORACLE', 'Nodejs', 'PYTHON', 'MySQL']

const Radio = () => {
    const [rad, setRad] = useState('테스트중')

    const handleRad = e => {
        // const value = e.target.value
        // const checked = e.target.checked
        const { value, checked } = e.target
        setRad(() => {
            return { [value]: checked }
        })
    }
    return (
        <>
            <h1>5. 라디오버튼과 확인</h1>
            <h2>{JSON.stringify(rad)}</h2>
            {list.map((v, i) => {
                return (

                    <div key={i}>
                        <input type="radio" name="one" id="" value={v} onChange={handleRad} /> {v} <br />
                    </div>
                )
            })}

        </>)
}
export default Radio
