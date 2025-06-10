const books = [
    { id: 101, bookname: "오늘의 날씨", price: 10000 },
    { id: 102, bookname: "내일의 날씨", price: 15000 },
    { id: 103, bookname: "어제의 날씨", price: 20000 },
    { id: 104, bookname: "모레의 날씨", price: 33000 }
]

const Books = () => {
    return (
        <>
            <ul>
                {books.map(v => <li key={v.id}>{v.bookname}({v.price})원</li>)}
            </ul>
        </>
    )
}
export default Books