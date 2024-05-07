const Pagination = ({ page, lastPage, setPage }) => {
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const handleNextPage = () => {
        if (page < lastPage) {
            setPage((prevPage) => prevPage + 1);
            scrollTop();
        }
    };

    const handlePrevPage = () => {
        if (page > 1) {
            setPage((prevPage) => prevPage - 1);
            scrollTop();
        }
    };

    return (
        <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-dark text-2xl">
            <button
                onClick={handlePrevPage}
                disabled={page === 1}
                className={`transition-all hover:text-color-accent ${page === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
                Prev
            </button>
            
            <p>
                {page} of {lastPage}
            </p>

            <button
                onClick={handleNextPage}
                disabled={page === lastPage}
                className={`transition-all text-color-dark hover:text-color-accent ${page === lastPage ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
