import "./Ex07.css"
import myStyle2 from "./Ex07.module.css"
const Css = () => {
    const myStyle1 = { width: "200px", height: "200px", borderRadius: "50%", backgroundColor: "lightblue" }
    return (
        <>
            <h1>7. 리액트에 CSS 스타일 적용하기</h1>
            <div style={myStyle1}></div> <br />
            <div style={{ ...myStyle1, backgroundColor: "lightpink" }}></div><br />
            <div className="ex07-div"></div><br />
            <ul>
                <li>아래는 모듈형 스타일 적용</li>
            </ul>
            <div className={myStyle2["ex07-div"]}></div>
            <div className={myStyle2["ex07ex07"]}></div>
        </>
    )
}

export default Css