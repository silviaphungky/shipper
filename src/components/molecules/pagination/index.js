import React from 'react'
import { Button } from 'reactstrap'
import PropTypes from 'prop-types'

const propTypes = {
  page         : PropTypes.number,
  disabledPrev : PropTypes.bool,
  disabledNext : PropTypes.bool,
  setPage      : PropTypes.func
}

const defaultProps = {
  page         : 1,
  disabledPrev : true,
  disabledNext : false,
  setPage      : () => {}
}

const Pagination = ({
  page,
  disabledPrev,
  disabledNext,
  setPage
}) => (
  <div className='d-flex align-items-center justify-content-center my-5'>
    <Button 
      className='pagination'
      onClick={ () => setPage(page-1) }
      disabled={ disabledPrev }
    >
      <i className="fas fa-chevron-left"></i>
      Previous Page
    </Button>
    <Button 
      className='pagination'
      onClick={ () => setPage(page+1) }
      disabled={ disabledNext }
    >
      Next Page
      <i className="fas fa-chevron-right"></i>
    </Button>
  </div>
)

Pagination.propTypes = propTypes
Pagination.defaultProps = defaultProps

export default Pagination
