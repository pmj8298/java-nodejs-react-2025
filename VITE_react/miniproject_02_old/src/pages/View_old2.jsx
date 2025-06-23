import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "./View.css";

const View = () => {
    const [searchParams] = useSearchParams();
    const boardId = searchParams.get("boardId");
    const nowpage = searchParams.get("nowpage") || 1;
    const navigate = useNavigate();
    const { isLoggedIn, username, userid } = useAuth();

    const bookmarkedRef = useRef(false);

    const [post, setPost] = useState({
        title: "",
        name: "",
        content: "",
        hit: "",
        bookmarked: false,
    });

    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const [updateCommentId, setUpdateCommentId] = useState(null);
    const [updateContent, setUpdateContent] = useState("");

    useEffect(() => {
        console.log("username:", username);
        console.log("userid:", userid);
        // if (!boardId) return;
        if (!boardId || !username) return;

        //     fetch(`http://localhost:8050/api/board/${boardId}`)
        //         .then((res) => res.json())
        //         .then((data) => {
        //             const isBookmarked = data.BOOKMARKED === 1 || data.BOOKMARKED === true;
        //             bookmarkedRef.current = isBookmarked;
        //             setPost({
        //                 title: data.TITLE,
        //                 name: data.WRITER,
        //                 content: data.CONTENT,
        //                 hit: data.HIT,
        //                 bookmarked: isBookmarked,
        //             });
        //         })
        //         .catch((err) => {
        //             console.error(err);
        //             alert("게시글 불러오기 실패");
        //         });

        //     fetch(`http://localhost:8050/api/board/comments/${boardId}`)
        //         .then((res) => res.json())
        //         .then((data) => setComments(data))
        //         .catch(console.error);
        // }, [boardId]);
        fetch(`http://localhost:8050/api/board/${boardId}`)
            .then((res) => res.json())
            .then((data) => {
                setPost((prev) => ({
                    ...prev,
                    title: data.TITLE,
                    name: data.WRITER,
                    content: data.CONTENT,
                    hit: data.HIT,
                }));
            });

        // 북마크 여부 확인
        fetch(`http://localhost:8050/api/board/bookmark/${boardId}?userName=${username}`)
            .then((res) => res.json())
            .then((isBookmarked) => {
                setPost((prev) => ({ ...prev, bookmarked: isBookmarked }));
            });

        // 댓글 불러오기
        fetch(`http://localhost:8050/api/board/comments/${boardId}`)
            .then((res) => res.json())
            .then((data) => setComments(data));
    }, [boardId, username]);

    useEffect(() => {
        console.log("북마크 상태가 변경됨:", post.bookmarked);
    }, [post.bookmarked]);

    // const toggleBookmark = async () => {
    //     if (!userid || !username) {
    //         alert("로그인이 필요한 기능입니다.");
    //         return;
    //     }

    //     try {
    //         const isCurrentlyBookmarked = bookmarkedRef.current;
    //         let url, options;

    //         if (isCurrentlyBookmarked) {
    //             url = `http://localhost:8050/api/board/bookmark/${boardId}/${userid}`;
    //             options = { method: "PUT" };
    //         } else {
    //             url = `http://localhost:8050/api/board/bookmark/${boardId}`;
    //             options = {
    //                 method: "POST",
    //                 headers: { "Content-Type": "application/json" },
    //                 body: JSON.stringify({ userId: username }),
    //             };
    //         }

    //         const res = await fetch(url, options);
    //         const resultText = (await res.text()).trim();
    //         console.log("서버 응답:", resultText);

    //         if (
    //             resultText === "success" ||
    //             resultText === "success: bookmarked" ||
    //             resultText === "fail: already bookmarked"
    //         ) {
    //             alert("북마크에 추가되었습니다.");
    //             bookmarkedRef.current = true;
    //             setPost((prev) => ({ ...prev, bookmarked: true }));
    //         } else if (resultText === "success: unbookmarked") {
    //             alert("북마크가 해제되었습니다.");
    //             bookmarkedRef.current = false;
    //             setPost((prev) => ({ ...prev, bookmarked: false }));
    //         } else {
    //             alert("북마크 처리 결과: " + resultText);
    //         }
    //     } catch (err) {
    //         alert("북마크 처리 중 오류 발생: " + err.message);
    //     }
    // };

    // 여기가 찐
    // const toggleBookmark = async () => {
    //     if (!userid || !username) {
    //         alert("로그인이 필요한 기능입니다.");
    //         return;
    //     }

    //     try {
    //         const isCurrentlyBookmarked = post.bookmarked;

    //         let url, options;

    //         if (isCurrentlyBookmarked) {
    //             // 북마크 해제
    //             url = `http://localhost:8050/api/board/bookmark/${boardId}/${userid}`;
    //             options = { method: "PUT" };
    //         } else {
    //             // 북마크 추가
    //             url = `http://localhost:8050/api/board/bookmark/${boardId}`;
    //             options = {
    //                 method: "POST",
    //                 headers: { "Content-Type": "application/json" },
    //                 body: JSON.stringify({ userId: username }),
    //             };
    //         }

    //         const res = await fetch(url, options);
    //         const resultText = (await res.text()).trim();

    //         console.log("서버 응답:", resultText);

    //         if (resultText.includes("unbookmarked")) {
    //             alert("북마크가 해제되었습니다.");
    //             setPost((prev) => ({ ...prev, bookmarked: false }));
    //         } else if (resultText.includes("bookmarked")) {
    //             alert("북마크에 추가되었습니다.");
    //             setPost((prev) => ({ ...prev, bookmarked: true }));
    //         } else {
    //             alert("서버 처리 실패: " + resultText);
    //         }
    //     } catch (err) {
    //         alert("북마크 처리 중 오류 발생: " + err.message);
    //     }
    // };

    // 여기 일단 수정 중------------------------------------------------
    // const addBookmark = async () => {
    //     const url = `http://localhost:8050/api/board/bookmark/${boardId}`;
    //     // const bodyData = { userId: username };
    //     const bodyData = { userId: userid };
    //     console.log("북마크 추가 요청", { url, bodyData });

    //     const options = {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(bodyData),
    //     };

    //     const res = await fetch(url, options);
    //     const resultText = (await res.text()).trim();

    //     if (resultText.includes("success")) {
    //         setPost(prev => ({ ...prev, bookmarked: true }));
    //         alert("북마크에 추가되었습니다.");

    //         fetch(`http://localhost:8050/api/board/bookmark/${boardId}?userName=${username}`)
    //             .then(res => res.json())
    //             .then(isBookmarked => {
    //                 setPost(prev => ({ ...prev, bookmarked: isBookmarked }));
    //             });
    //     } else {
    //         alert("오류: " + resultText);
    //         console.log("오류: " + resultText);
    //     }
    // };


    // const removeBookmark = async () => {
    //     const url = `http://localhost:8050/api/board/bookmark/${boardId}/${userid}`;
    //     const options = { method: "PUT" };

    //     const res = await fetch(url, options);
    //     const resultText = (await res.text()).trim();
    //     if (resultText.includes("success")) {
    //         setPost(prev => ({ ...prev, bookmarked: false }));
    //         alert("북마크가 해제되었습니다.");

    //         fetch(`http://localhost:8050/api/board/bookmark/${boardId}?userName=${username}`)
    //             .then(res => res.json())
    //             .then(isBookmarked => {
    //                 setPost(prev => ({ ...prev, bookmarked: isBookmarked }));
    //             });

    //     } else {
    //         alert("오류: " + resultText);
    //     }
    // };


    // const toggleBookmark = () => {
    //     if (post.bookmarked) {
    //         removeBookmark();
    //     } else {
    //         addBookmark();
    //     }
    // };
    // 북마크 상태 동기화
    const syncBookmarkStatus = async () => {
        const res = await fetch(`http://localhost:8050/api/board/bookmark/${boardId}?userName=${username}`);
        const isBookmarked = await res.json();
        setPost(prev => ({ ...prev, bookmarked: isBookmarked }));
    };

    // 북마크 추가
    const addBookmark = async () => {
        const url = `http://localhost:8050/api/board/bookmark/${boardId}`;
        const bodyData = { userId: userid };

        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bodyData),
        };

        const res = await fetch(url, options);
        const resultText = (await res.text()).trim();

        if (resultText.includes("success")) {
            alert("북마크에 추가되었습니다.");
        } else if (resultText.includes("already bookmarked")) {
            alert("이미 북마크 되어 있습니다.");
        } else {
            alert("북마크 추가 실패: " + resultText);
        }

        await syncBookmarkStatus(); // 항상 북마크 상태 갱신
    };

    // 북마크 제거
    const removeBookmark = async () => {
        const url = `http://localhost:8050/api/board/bookmark/${boardId}/${userid}`;
        const res = await fetch(url, { method: "PUT" });
        const resultText = (await res.text()).trim();

        if (resultText.includes("success")) {
            alert("북마크가 해제되었습니다.");
            console.log(resultText)
        } else {
            alert("북마크 해제 실패: " + resultText);
        }

        await syncBookmarkStatus(); // 항상 북마크 상태 갱신
    };

    // 토글 기능
    const toggleBookmark = async () => {
        console.log("토글 전 북마크 상태:", post.bookmarked);
        if (post.bookmarked) {
            await removeBookmark();
        } else {
            await addBookmark();
        }
        console.log("토글 후 북마크 상태:", post.bookmarked);
    };




    const handleUpdate = () => {
        if (post.name === username) {
            navigate(`/update?boardId=${boardId}&nowpage=${nowpage}`);
        } else {
            alert("작성자가 아닙니다.");
        }
    };

    const handleDelete = async () => {
        if (!window.confirm("정말 삭제하시겠습니까?")) return;

        const response = await fetch(`http://localhost:8050/api/board/${boardId}`, {
            method: "DELETE",
        });

        const resultText = await response.text();

        if (post.name !== username) {
            alert("작성자가 아닙니다.");
        } else if (resultText.includes("comments_exist")) {
            alert("댓글이 존재하여 게시글을 삭제할 수 없습니다.");
        } else if (resultText.includes("success")) {
            alert("삭제되었습니다.");
            navigate("/board?nowpage=" + nowpage);
        } else {
            alert("삭제 실패: " + resultText);
        }
    };

    const handleCommentChange = (e) => setComment(e.target.value);

    const handleCommentInsert = async () => {
        if (comment.trim() === "") {
            alert("댓글 내용을 입력해주세요.");
            return;
        }

        try {
            const res = await fetch(`http://localhost:8050/api/board/comments`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ boardId, name: username, content: comment }),
            });

            if (res.ok) {
                alert("댓글이 등록되었습니다.");
                setComment("");
                fetch(`http://localhost:8050/api/board/comments/${boardId}`)
                    .then((res) => res.json())
                    .then((data) => setComments(data));
            } else {
                alert("댓글 등록에 실패했습니다.");
            }
        } catch (err) {
            alert("댓글 등록 중 오류 발생: " + err.message);
        }
    };

    const handleCommentUpdateClick = (commentId, currentContent) => {
        setUpdateCommentId(commentId);
        setUpdateContent(currentContent);
    };

    const handleCommentUpdate = async (commentId) => {
        try {
            const res = await fetch(
                `http://localhost:8050/api/board/comments/${commentId}`,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name: username, content: updateContent }),
                }
            );

            const result = await res.text();
            if (result === "success") {
                alert("댓글이 수정되었습니다.");
                setUpdateCommentId(null);
                setUpdateContent("");
                fetch(`http://localhost:8050/api/board/comments/${boardId}`)
                    .then((res) => res.json())
                    .then((data) => setComments(data));
            } else {
                alert("수정 실패: " + result);
            }
        } catch (err) {
            alert("댓글 수정 중 오류 발생: " + err.message);
        }
    };

    const handleCommentDelete = async (commentId) => {
        if (!window.confirm("정말 삭제하시겠습니까?")) return;

        try {
            const res = await fetch(
                `http://localhost:8050/api/board/comments/${commentId}`,
                {
                    method: "DELETE",
                }
            );

            const result = await res.text();
            if (result === "success") {
                alert("댓글 삭제 완료");
                fetch(`http://localhost:8050/api/board/comments/${boardId}`)
                    .then((res) => res.json())
                    .then((data) => setComments(data));
            } else {
                alert("삭제 실패: " + result);
            }
        } catch (err) {
            alert("댓글 삭제 중 오류 발생: " + err.message);
        }
    };

    return (
        <div className="view-container">
            <h1 className="text-center">게시글 보기</h1>

            <div className="row mt-4">
                <div className="col-md-8 offset-md-2">
                    <div className="form-group">
                        <label>제목</label>
                        <div className="form-control">{post.title}</div>
                    </div>

                    <div className="form-group">
                        <label>작성자</label>
                        <div className="form-control">{post.name}</div>
                    </div>

                    <div className="form-group d-flex align-items-center">
                        <label>조회수</label>
                        <div className="form-control">{post.hit}</div>
                        <button
                            className="bookmark btn btn-link"
                            type="button"
                            onClick={toggleBookmark}
                            style={{ marginLeft: "10px", padding: 0, border: "none", background: "none" }}
                        >
                            {post.bookmarked ? (
                                <img src="/bookon.png" alt="북마크 해제" width={32} height={32} />
                            ) : (
                                <img src="/bookoff.png" alt="북마크 하기" width={32} height={32} />
                            )}
                        </button>
                    </div>

                    <div className="form-group">
                        <label>내용</label>
                        <div className="form-control container mt-4">{post.content}</div>
                    </div>

                    <div className="d-flex justify-content-between mb-4">
                        <div className="d-flex">
                            <button className="btn btn-smaller btn-primary" onClick={handleUpdate}>수정</button>
                            <button className="btn btn-smaller btn-primary" onClick={handleDelete}>삭제</button>
                        </div>
                        <button className="btn btn-smaller btn-outline-primary" onClick={() => navigate(`/board?nowpage=${nowpage}`)}>목록으로</button>
                    </div>

                    <div className="form-group">
                        <label>댓글 작성</label>
                        <textarea
                            className="form-control"
                            rows="4"
                            value={comment}
                            onChange={handleCommentChange}
                            placeholder="댓글을 입력하세요."
                        />
                    </div>
                    <div className="text-right mb-4">
                        <button className="btn btn-smaller btn-success" onClick={handleCommentInsert}>댓글 등록</button>
                    </div>

                    <div className="comments-section mt-4">
                        <h5>댓글 목록</h5>
                        {comments.length === 0 && <p>등록된 댓글이 없습니다.</p>}
                        {comments.map((c) => (
                            <div key={c.COMMENT_ID} className="comment-item mb-3">
                                <div className="comment-meta">
                                    <strong>{c.WRITER}</strong>
                                    <span className="comment-time">{c.COMMENT_TIME}</span>
                                </div>
                                {updateCommentId === c.COMMENT_ID ? (
                                    <>
                                        <textarea
                                            className="form-control mb-2"
                                            value={updateContent}
                                            onChange={(e) => setUpdateContent(e.target.value)}
                                        />
                                        <div className="comment-edit-box">
                                            <button className="btn btn-primary btn-smaller" onClick={() => handleCommentUpdate(c.COMMENT_ID)}>저장</button>
                                            <button className="btn btn-secondary btn-smaller" onClick={() => setUpdateCommentId(null)}>취소</button>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="content-box">{c.CONTENT}</div>
                                        <div className="content-button-box">
                                            <button className="comment-button" onClick={() => handleCommentDelete(c.COMMENT_ID)}>삭제</button>
                                            <button className="comment-button" onClick={() => handleCommentUpdateClick(c.COMMENT_ID, c.CONTENT)}>수정</button>
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default View;
