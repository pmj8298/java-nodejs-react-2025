// Board.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Board.css";

const Board = () => {
    const navigate = useNavigate();
    const [boardList, setBoardList] = useState([]);
    const [pagination, setPagination] = useState(null);
    // const [page, setPage] = useState(1); // 현재 페이지
    const [page, setPage] = useState(() => {
        const params = new URLSearchParams(window.location.search);
        return Number(params.get("nowpage")) || 1;
    });


    // useEffect(() => {
    //     fetch("http://localhost:8050/api/board")
    //         .then((res) => res.json())
    //         .then((data) => setBoardList(data))
    //         .catch((err) => console.error("게시글 불러오기 실패:", err));
    // }, []);

    useEffect(() => {
        fetch(`http://localhost:8050/api/board?page=${page}&recordSize=10`)
            .then((res) => res.json())
            .then((data) => {
                setBoardList(data.list);
                setPagination(data.pagination);
            })
            .catch((err) => console.error("게시글 불러오기 실패:", err));
    }, [page]);



    const handleGoWrite = () => {
        navigate("/write");
    };

    const handleGoView = (boardId) => {
        navigate(`/view?boardId=${boardId}`);
    };


    return (
        <main className="main-layout">
            <aside>
                <nav>
                    <div className="list-group">
                        <a href="/" className="list-group-item list-group-item-action">지역별 가격비교</a>
                        <a href="/" className="list-group-item list-group-item-action">최저/최고가</a>
                    </div>
                </nav>
            </aside>

            <section>
                <article>
                    <h2>게시판</h2>
                    <hr />
                    <div className="info-box">
                        <table className="write-table">
                            <thead>
                                <tr>
                                    <td className="table-num">no.</td>
                                    <td className="table-name">글쓴이</td>
                                    <td className="table-title">제목</td>
                                </tr>
                            </thead>
                            <tbody>
                                {boardList.map((board) => (
                                    <tr key={board.BOARD_ID}>
                                        <td className="table-num">{board.BOARD_ID}</td>
                                        <td className="table-name">{board.WRITER}</td>
                                        <td className="table-title">
                                            {/* <a href={`/View?rno=${board.BOARD_ID}&nowpage=1`}>
                                                {board.TITLE}
                                            </a> */}
                                            <span onClick={() => handleGoView(board.BOARD_ID)} style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}>
                                                {board.TITLE}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {pagination && (
                            <div className="pagination">
                                {pagination.existPrevPage && (
                                    <button onClick={() => setPage(page - 1)}>이전</button>
                                )}
                                {[...Array(pagination.endPage - pagination.startPage + 1)].map((_, i) => {
                                    const pageNum = pagination.startPage + i;
                                    return (
                                        <button
                                            key={pageNum}
                                            onClick={() => setPage(pageNum)}
                                            style={{
                                                fontWeight: page === pageNum ? "bold" : "normal",
                                            }}
                                        >
                                            {pageNum}
                                        </button>
                                    );
                                })}
                                {pagination.existNextPage && (
                                    <button onClick={() => setPage(page + 1)}>다음</button>
                                )}
                            </div>
                        )}

                        <br />
                        <div className="button-container">
                            <input type="button" className="btn btn-outline-primary" value="글 작성" onClick={handleGoWrite} />
                        </div>
                    </div>
                </article>
            </section>
        </main>
    );
};

export default Board;
