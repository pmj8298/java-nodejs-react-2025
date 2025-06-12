import { useState, useEffect } from "react";
const FetchData = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        console.log('데이터 요청 시작')

        const timer = setTimeout(() => {

            console.log('5초 로딩중')
            fetch('http://jsonplaceholder.typicode.com/posts')
                .then(res => res.json())
                .then(result => {
                    setData(result)
                    console.log('데이터 받아옴')
                })
                .catch(err => console.error('에러발생: ' + err))
        }, 5000)
        return () => {
            clearTimeout(timer)
            console.log('언마운트 타이머 정리')
        }
    }, [])

    return (
        <>
            <h1>10. 데이터 가져오기 및 표현</h1>
            {/* {data.length === 0 ? (<p>데이터 로딩중...</p>) : */}
            {data.length === 0 ? (<div class="spinner-border text-info" id="spsp" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>) :
                (<ol>
                    {data.map(v => <li key={v.id}>{v.title}</li>)}
                </ol>)
            }
        </>
    )
}

export default FetchData