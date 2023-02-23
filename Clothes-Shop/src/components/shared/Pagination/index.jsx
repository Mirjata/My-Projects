import React from 'react';
import './styles.css';

const Pagination = ({ data, onPage }) => (
  <div className="pagination">
    {[...Array(data?.totalPages)].map((_, i) => (
      <button
        className="pagination-btn"
        onClick={() => {
          onPage(i + 1);
        }}
        key={i}
        data-active={i + 1 === data?.page}
      >
        {i + 1}
      </button>
    ))}
  </div>
);

export default Pagination;
