import React from "react";

const Pagination = ({ gotoNextPage, gotoPrevPage }) => {
  return (
    <div>
      {gotoPrevPage && <button onClick={gotoPrevPage}>previous</button>}
      {gotoNextPage && <button onClick={gotoNextPage}>Next</button>}
    </div>
  );
};

export default Pagination;
