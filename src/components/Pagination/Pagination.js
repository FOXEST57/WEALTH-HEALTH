import React, { useEffect, useState } from 'react'
import './Pagination.css' 

const Pagination = (props) => {
// state pour prev ou next de page
  const [prevLinkDisabled, setPrevLinkDisabled] = useState(false)
 const [nextLinkDisabled, setNextLinkDisabled] = useState(false)

 useEffect(()=>{
  setPrevLinkDisabled(false)
    setNextLinkDisabled(false)
 },[props.totalPages])
 // fonction pour aller a la page arriere
  const handlePrevPageClick = ()=>{
    
    if(props.currentPage > 1){
      props.setCurrentPage(props.currentPage - 1)
      setPrevLinkDisabled(()=>props.currentPage - 1 === 1 ? true: false)
      setNextLinkDisabled(()=>props.currentPage <=  props.totalPages? false: true)
    } 
  }
  // fonction pour aller a la page suivante
  const handleNextPageClick = ()=>{
    setPrevLinkDisabled(()=>props.currentPage + 1 === 1 ? true: false)
    setNextLinkDisabled(()=> props.currentPage + 1 <  props.totalPages? false: true)
    if(props.currentPage < props.totalPages ){
      props.setCurrentPage(props.currentPage + 1)
    } 
    
  }

  return ( 
    <div className='pagination'>
      <div className="count">
        Showing {props.startIndex+1} to {parseInt(props.endIndex) } of {props.total} entries
      </div>
      <div className="pagination__links">
        <button onClick={handlePrevPageClick} disabled={prevLinkDisabled} className="prev">Previous</button>
        <button className="current">{props.currentPage}</button>
        <button onClick={handleNextPageClick}  disabled={nextLinkDisabled} className="next">Next</button>
      </div>
    </div>
  )
}

export default Pagination
