import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Write.css";

const Write = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        title: "",
        name: "",
        content: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("handleSubmit 호출됨");
        try {
            const response = await fetch("http://localhost:8050/api/write", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            const result = await response.text();
            console.log("서버 응답:", result);
            if (result === "success") {
                alert("글 작성 완료!");
                navigate("/");
            } else {
                alert("글 작성 실패: " + result);
            }
        } catch (err) {
            console.error("fetch 에러:", err);
            alert("글 작성 중 오류 발생: " + err.message);
        }
    };

    return (
        <form className="container" onSubmit={handleSubmit}>
            <h1 className="text-center">글쓰기</h1>

            <div className="form-group">
                <label>제목</label>
                <input
                    className="form-control"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label>작성자</label>
                <input
                    className="form-control"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label>내용</label>
                <textarea
                    className="form-control"
                    name="content"
                    value={form.content}
                    onChange={handleChange}
                />
            </div>

            {/* 버튼 타입을 submit으로 */}
            <button className="btn-primary" type="submit">
                글 작성
            </button>
        </form>
    );
};

export default Write;
