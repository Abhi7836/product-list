import React from 'react'
//import { Pagination } from 'react-bootstrap'

const Paginate = ({ postsPerPage, totalPages,paginate}) => {
  const pageNumbers=[];
  for(var i=1;i<=Math.ceil(totalPages/postsPerPage);i++){
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
      {pageNumbers.map(number=>(
        <li key={number} className='page-item'>
          <a onClick={()=>paginate(number)} className='page-link'>
            {number}
          </a>
        </li>
      ))}
      </ul>
    </nav>   
   
    )
}

export default Paginate