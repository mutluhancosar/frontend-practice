const Notes = ({ notes }) => {
    return (
        <div className="notes-container">
            {notes.map((note, index) => (
                <div key={index} className={`note ${note.color}`}>
                    <p>{note.text}</p>
                </div>
            ))}
        </div>
    );
};

export default Notes;