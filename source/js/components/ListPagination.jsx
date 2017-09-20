import React from 'react';

const ListPagination = (props) => {
  if (props.articlesCount <= 10) {
    return null;
  }

  const range = [];
  for(let i = 0; i < Math.ceil(props.articlesCount / 10); i++) {
    range.push(i);
  }

  // passed as prop in a parent component
  const setPage = (page) => props.onSetPage(page);

  return (
    <nav>
      <ul className="pagination">
        {
          range.map((page) => {
            const isCurrnet = (page) === props.currentPage;
            const onClick = (event) => {
              event.preventDefault();
              setPage(page);
            };
            return (
              <li 
                className={ isCurrent ? 'page-item active' : 'page-item' }
                onClick={ onClick }
                key={v.toString()}
              >
                <a className="page ">{page + 1}</a>
              </li>
            );
          })
        }
      </ul>
    </nav>
}

export default ListPagination;