import { useState } from "react";
import data from './Ex12.data'
import tableCss from "./Ex12.module.css"

const Table = () => {
    const [ea, setEa] = useState(Array(data.length).fill(0))

    const handleNum = e => {
        // const index = e.target.id
        // const value = e.target.value
        const { id, value } = e.target
        // setEa([...ea, [index] = value])
        const newEa = [...ea]
        newEa[id] = value
        setEa(newEa)
    }

    return (
        <>
            <h1>12. 데이터 임포트 후 실시간 연산</h1>
            <div className={tableCss['data-box']}>
                <table>
                    <thead>
                        <tr>
                            <th>상품명</th>
                            <th>가격</th>
                            <th>분류</th>
                            <th>배송비</th>
                            <th>수량</th>
                            <th>합계</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((v, i) => {
                            return (
                                <tr key={i}>
                                    <td>{v.product_name}</td>
                                    <td>{v.price.toLocaleString('ko-KR')}</td>
                                    <td>{v.category}</td>
                                    <td>{v.delivery_price.toLocaleString('ko-KR')}</td>
                                    <td><input min="0" id={i} type="number" value={ea[i]} onChange={handleNum} /></td>
                                    <td>{(v.price * ea[i] + (ea[i] > 0 ? v.delivery_price : 0)).toLocaleString('ko-KR')}원</td>
                                </tr>
                            )
                        })}
                        <tr>
                            <td colSpan={5}>합계</td>
                            <td>{data.reduce((ac, v, i) => {
                                v = (v.price * ea[i] + (ea[i] > 0 ? v.delivery_price : 0))
                                return ac + v
                            }, 0).toLocaleString('ko-KR')}원</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </>
    )
}
export default Table