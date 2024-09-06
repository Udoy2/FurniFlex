import React, { useEffect } from 'react';

const Pagination = ({ products, maxLimit, pageNo, setPageNo }) => {
    const totalPages = Math.ceil(products.length / maxLimit);

    

    // Handle next and previous buttons
    const handleNextPage = () => {
        if (pageNo < totalPages) {
            setPageNo(pageNo + 1);
        }
    };

    const handlePreviousPage = () => {
        if (pageNo > 1) {
            setPageNo(pageNo - 1);
        }
    };

    return (
        <div className="pagination-container">


            {/* Pagination controls */}
            <div className="m-auto">
                <div className="flex justify-center mt-8 ml-10">
                    <nav className="flex space-x-2">
                        {/* Previous Button */}
                        <button
                            onClick={handlePreviousPage}
                            disabled={pageNo === 1}
                            className={`px-3 py-1 border border-gray-300 rounded-md ${pageNo === 1 ? 'bg-gray-200' : 'bg-white'}`}
                        >
                            &lt;
                        </button>

                        {/* Page Numbers */}
                        {[...Array(totalPages)].map((_, index) => (
                            <button
                                key={index + 1}
                                onClick={() => setPageNo(index + 1)}
                                className={`px-3 py-1 border border-gray-300 rounded-md ${pageNo === index + 1 ? 'bg-gray-300' : 'bg-white'}`}
                            >
                                {index + 1}
                            </button>
                        ))}

                        {/* Next Button */}
                        <button
                            onClick={handleNextPage}
                            disabled={pageNo === totalPages}
                            className={`px-3 py-1 border border-gray-300 rounded-md ${pageNo === totalPages ? 'bg-gray-200' : 'bg-white'}`}
                        >
                            &gt;
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Pagination;
