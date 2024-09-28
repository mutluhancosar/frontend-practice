const SearchBar = ({ setSearchTerm }) => {
    return (
        <div className="container">
            <div className="searchbar">
                <input
                    type="text"
                    placeholder="Search..."
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>
    );
};

export default SearchBar;