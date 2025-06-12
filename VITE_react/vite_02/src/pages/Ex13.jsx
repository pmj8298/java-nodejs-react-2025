import { useState } from "react";
const Ball = () => {
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    })

    return (
        <div
            onPointerMove={(e) => {
                console.log(e.clientX, e.clientY)
                setPosition({
                    x: e.clientX,
                    y: e.clientY
                })
            }}
            style={{
                width: '100vh',
                height: '100vh'
            }}>
            <div style={{
                position: 'absolute',
                backgroundColor: 'lightblue',
                borderRadius: '50%',
                transform: `translate(${position.x}px,${position.y}px)`,
                left: -10,
                top: -10,
                width: 20,
                height: 20
            }} />
        </div>
    )

}
export default Ball