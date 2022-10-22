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
const sizes = ["size",
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
]


const Drawing = () => {


    const canvasRef = useRef(null);
    const ctx = useRef(null);

    const [selectedColor, setSelectedColor] = useState(colors[0]);
    const [selectedSize, setSelectedSize] = useState(sizes[0]);
    const [mouseDown, setMouseDown] = useState(false);
    const [lastPosition, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        if (canvasRef.current) {
            ctx.current = canvasRef.current.getContext('2d');
        }
    }, []);

    const draw = useCallback((x, y) => {
        if (mouseDown) {
            ctx.current.beginPath();
            ctx.current.strokeStyle = selectedColor;
            ctx.current.lineWidth = selectedSize;
            ctx.current.lineJoin = 'round';
            ctx.current.moveTo(lastPosition.x, lastPosition.y); 
            ctx.current.lineTo(x, y);
            ctx.current.closePath();
            ctx.current.stroke();

            setPosition({ x, y })
        }
    }, [lastPosition, mouseDown, selectedColor, selectedSize, setPosition])



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
        <div className='draw'>

            <canvas
                style={{
                    border: "1px solid #000",
                    background: "#ffffff", 
                }}
                width={700}
                height={500}
                ref={canvasRef}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
                onMouseLeave={onMouseUp}
                onMouseMove={onMouseMove}
            />
            <div className='flex mt-2 ml-4 gap-4'>
                {/* Select Color */}
                <select className="btn"
                    value={selectedColor}
                    onChange={(e) => setSelectedColor(e.target.value)}
                >
                    {
                        colors.map(
                            color => <option key={color} value={color}>{color}</option>
                        )
                    }
                </select>

                    {/* Select Size */}
                <select className="btn"
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                >
                    {
                        sizes.map(
                            size => <option key={size} value={size}>{size}</option>
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