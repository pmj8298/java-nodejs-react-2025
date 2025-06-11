const Inp = () => {
    // 이렇게 하면 이상하게 나옴
    // localStorage.setItem('test2', { id: 1, name: "한라페", comment: '바보멍충이' })
    // localStorage.getItem('test')

    // localStorage CRUD
    // Create 입력
    // 이렇게 하면 글자 잘 나옴
    const data = { id: 1, name: "한라페", comment: '바보멍충이' }
    const jdata = JSON.stringify(data)
    localStorage.setItem('test3', jdata)

    // Read 읽기
    // 이건 불러오기
    const readData = localStorage.getItem('test3')
    const oData = JSON.parse(readData)

    // Delete
    localStorage.removeItem('test3')

    // 모두 Delete
    localStorage.clear()
    return (
        <>
            {/* <h1>저장</h1> */}
            <h1>1. LocalStorage 연습</h1>
            <h2>데이터 쓰기 / 읽어오기</h2>

            {/* 이렇게 찍으면 아예 안나옴 원하는 형태가 아니라서,,?
            <h2> {readData.name}</h2>
            <h2> {readData.comment}</h2> */}


            {/* <h2>{typeof (readData)}</h2> -> string */}

            {/* <h2>{typeof (oData.name)}</h2> -> string
            <h2>{typeof (oData.comment)}</h2> -> string */}

            <h2>{oData.id}</h2>
            <h2>{oData.name}</h2>
            <h2>{oData.comment}</h2>
        </>
    )
}

export default Inp