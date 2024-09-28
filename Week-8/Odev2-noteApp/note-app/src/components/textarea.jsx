import { useState } from 'react';

const Textarea = ({ addNote }) => {
    const [text, setText] = useState("");
    const [color, setColor] = useState("");

    const handleAddNote = () => {
        if (text.trim()) {
            addNote({
                text,
                color: color || "default",
            });
            setText("");
            setColor("");
        }
    };

    const toggleColor = (selectedColor) => {

        if (color === selectedColor) {
            setColor("");
        } else {
            setColor(selectedColor);
        }
    };

    return (
        <div className="container">
            <div className="text-area">
        <textarea
            name="note"
            cols="30"
            rows="10"
            placeholder="Your Note..."
            value={text}
            onChange={(e) => setText(e.target.value)}
        ></textarea>
                <div className="buttons">
                    <div className="select-colors-container">
                        <div
                            className={`select-red ${color === "red" ? "active" : ""}`}
                            onClick={() => toggleColor("red")}
                        ></div>
                        <div
                            className={`select-blue ${color === "blue" ? "active" : ""}`}
                            onClick={() => toggleColor("blue")}
                        ></div>
                        <div
                            className={`select-green ${color === "green" ? "active" : ""}`}
                            onClick={() => toggleColor("green")}
                        ></div>
                    </div>
                    <button onClick={handleAddNote}>ADD</button>
                </div>
            </div>
        </div>
    );
};

export default Textarea;