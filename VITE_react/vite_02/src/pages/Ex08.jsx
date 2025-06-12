// import { useState } from "react"
import { useEffect, useState } from "react"

const TodoList = () => {
    const [indata, setIndata] = useState('')
    const [arr, setArr] = useState([])
    const [ch, setCh] = useState({})

    useEffect(() => {
        const ldata = localStorage.getItem('todo');
        if (ldata) {
            setArr(JSON.parse(ldata));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(arr));
    }, [arr]);


    const handleInput = e => {
        setIndata(e.target.value)
    }
    // const handleAdd = () => {
    //     setArr([...arr, indata])
    // }
    const handleAdd = () => {
        setArr([...arr, indata])
        setIndata('')
    }

    const handleEnt = e => {
        if (e.key === 'Enter') {
            handleAdd()
        }
    }

    const handleCh = e => {
        const { value, checked } = e.target
        setCh(ldata => {
            return { ...ldata, [value]: checked }
        })
        // const del = arr.filter(ldata => ldata !== value);
        // setArr(del);
    }
    const handleDel = () => {
        const filtered = arr.filter(ldata => !ch[ldata])
        setArr(filtered);
        setCh({});
    }

    return (
        <>
            <h1>8. Array를 이용한 TodoList</h1>
            <label htmlFor="inin">배열요소 입력: </label>
            <input type="text" id="inin" onChange={handleInput} onKeyDown={handleEnt} value={indata} />{" "}
            <button onClick={handleAdd}>추가</button>
            <button onClick={handleDel} disabled={!(arr.length > 0)}>삭제</button>
            <div>{indata}</div>
            <hr />
            {/* <div>{arr}</div> */}
            {arr.map((v, i) => {
                return (
                    <div key={i}>
                        {/* <input type="checkbox" name="" id="" value={v} onChange={handleCh} /> {v} {' '}</div> */}
                        <input type="checkbox" name="" id="" value={v} onChange={handleCh} /> {`${i + 1}번째 할 일: ${v}`} {' '}</div>
                )
            })

            }
            {/* <ol style={{ listStylePosition: "inside" }}>
                {arr
                    .filter(ck => ch[ck])
                    .map((v, i) => (
                        <li key={i}>{v}</li>))}
            </ol> */}



        </>
    )
}
export default TodoList