import { useEffect, useState } from "react"

const Inp2 = () => {

    // const [theme, setTheme] = useState('light')
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme' || 'light')
    })

    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme])

    const toggle = () => {
        setTheme(what => what === 'light' ? 'dark' : 'light')


    }

    return (
        <>
            <h1>2. LocalStorage를 이용한 테마색 설정 기억하기</h1>
            {/* <div className="dark-mode"> */}
            <div className={theme == 'light' ? 'light-mode' : "dark-mode"}>
                {/* <h1>🌚다크모드🌚</h1> */}
                <h1>{theme == 'light' ? '☀️라이트모드☀️' : "🌚다크모드🌚"}</h1>
                <button onClick={toggle}>테마변경</button>
            </div>
        </>
    )
}

export default Inp2