import React, { useCallback, useEffect, useRef, useState } from 'react';
import './Drawing.css'

const colors = [
    "red",
    "green",
    "yellow",
    "black",
    "blue",
    "purple"
]


const Drawing = () => {


    const canvasRef = useRef(null);
    const ctx = useRef(null);

    const [selectedColor, setSelectedColor] = useState(colors[0]);
    const [mouseDown, setMouseDown] = useState(false);
    const [lastPosition, setPosition] = useState({ x: 0, y: 0});

    useEffect(() => {
        if (canvasRef.current) {
            ctx.current = canvasRef.current.getContext('2d');
        }
    }, []);

    const draw = useCallback((x, y) => {
        if (mouseDown) {
            ctx.current.beginPath();
            ctx.current.strokeStyle = selectedColor;
            ctx.current.lineWidth = 10;
            ctx.current.lineJoin = 'round';
            ctx.current.moveTo(lastPosition.x, lastPosition.y);
            ctx.current.lineTo(x, y);
            ctx.current.closePath();
            ctx.current.stroke();

            setPosition({ x, y })
        }
    }, [lastPosition, mouseDown, selectedColor, setPosition])



    // Download
    const download = async () => {
        const image = canvasRef.current.toDataURL('image/png');
        const blob = await (await fetch(image)).blob();
        const blobURL = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobURL;
        link.download = "image.png";
        link.click();
    }


    // Clear
    const clear = () => {
        ctx.current.clearRect(0, 0, ctx.current.canvas.width, ctx.current.canvas.height)
    }

    // Mouse Down
    const onMouseDown = (e) => {
        setPosition({
            x: e.pageX,
            y: e.pageY
        })
        setMouseDown(true)
    }

    // Mouse Up
    const onMouseUp = (e) => {
        setMouseDown(false)
    }

    // Mouse Move
    const onMouseMove = (e) => {
        draw(e.pageX, e.pageY)
    }



    return (


       
        <div className='draw '>

            <canvas
                style={{
                    border: "1px solid #000", 
                }}
                width={700}
                height={500}
                ref={canvasRef}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
                onMouseLeave={onMouseUp}
                onMouseMove={onMouseMove}
            /> 
            <div>
                <select  className="btn"
                    value={selectedColor}
                    onChange={(e) => setSelectedColor(e.target.value)}
                >
                    {
                        colors.map(
                            color => <option key={color} value={color}>{color}</option>
                        )
                    }
                </select>
                <button className="btn " onClick={clear}>Clear</button>
                <button className="btn" onClick={download}>Download</button> 
            </div>

        </div>
    );
};

export default Drawing;