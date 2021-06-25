import React from 'react'
import { Button, Card, CardBody, Input } from 'reactstrap'
import PropTypes from 'prop-types'

const propTypes = {
  users            : PropTypes.array,
  setSearchKeyword : PropTypes.func,
  setSearchResult  : PropTypes.func
}

const defaultProps = {
  users            : [],
  setSearchKeyword : () => {},
  setSearchResult  : () => {}
}

const DriverManagementForm = ({
  users,
  setSearchKeyword,
  setSearchResult
}) => (
  <Card className='search-driver__card' title='driverManagementForm'>
    <CardBody className='search-driver__wrapper align-items-center justify-content-between'>
      <div>
        <h3 className='text-primary'>
          DRIVER MANAGEMENT
        </h3>
        <p>
          Data driver yang bekerja dengan Anda.
        </p>
      </div>

      <div className='search-driver__field'>
        <Input 
          title='searchInput'
          className='mx-3'
          type='search'
          placeholder='Cari Driver'
          onChange={ (e) => {
            const value = e.target.value
            setSearchKeyword(value)
            const result = users.filter((element) => element.name.first.toLowerCase().includes(value.toLocaleLowerCase()))
            setSearchResult(result)
          } }
        />
        <Button 
          title='addDriverBtn'
          color='primary' 
          className='nowrap text-light font-weight-bold'
          onClick={ () => alert('Tambah Driver Button Clicked!') }
        >
          TAMBAH DRIVER +
        </Button>
      </div>
    </CardBody>
  </Card>

)

DriverManagementForm.propTypes = propTypes
DriverManagementForm.defaultProps = defaultProps

export default DriverManagementForm
