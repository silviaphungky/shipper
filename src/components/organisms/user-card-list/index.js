import React from 'react'
import { Card, CardBody, CardText, CardTitle } from 'reactstrap'

const UserCardList = ({ data }) => (
  data.map((user, id) => (
    <Card 
      key={ `user-${id}` } 
      className='user__card'
    >
      <CardTitle className='border-bottom text-secondary py-2 px-3 d-flex align-items-center'>
          Driver ID: 
        <span className='text-primary'>{ user.id.value ? user.id.value : '-' }</span>  
        <i className="ml-auto fas fa-ellipsis-h"></i>
      </CardTitle>
      
      <CardBody className='user__card-body'>
        <i className="fas fa-user-circle fa-4x ml-2 text-secondary mb-4"></i>

        <div className='user-detail__text'>
          <CardText>
            <p className='text-secondary'>
              Nama Driver
            </p>
            <p>
              { [user.name.first, user.name.last].join(' ') }
            </p>
          </CardText>

          <CardText>
            <p className='text-secondary'>
              Telepon
            </p>
            <p>
              { user.phone }
            </p>
          </CardText>
      
          <CardText>
            <p className='text-secondary'>
              Email
            </p>
            <p>
              { user.email }
            </p>
          </CardText>

          <CardText>
            <p className='text-secondary'>
              Tanggal Lahir
            </p>
            <p>
              { user.dob.date }
            </p>
          </CardText>
        </div>
      </CardBody>
    </Card>
  ))
)

export default UserCardList
