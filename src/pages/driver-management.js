import React, { Suspense, useCallback, useEffect, useState } from 'react'
import { Spinner } from 'reactstrap'
import { Pagination } from '../components/molecules'
import { DriverManagementForm, Layout, UserCardList } from '../components/organisms'
import { useNetwork } from '../context/sidebar-provider'
import RandomUserApi from '../service/random-user-api'

const DriverManagementPage = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [users, setUsers] = useState([])
  const [page, setPage] = useState(1)
  const [searchKeyword, setSearchKeyword] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const perPage = 5
  const lastIndex = page * perPage
  const startIndex = lastIndex - perPage

  const fetchUsersData = useCallback(() => {
    RandomUserApi.get({ params: { results: '30' } })
      .then((response) => {
        const data = response.data.results
        setUsers(data)
        sessionStorage.setItem('users', JSON.stringify(data))
        setIsLoading(false)
      })
      .catch((error) => alert(error))
  }, [])

  useEffect(() => {
    const sessionData = sessionStorage.getItem('users')
    if(sessionData) {
      const parsedData = JSON.parse(sessionData)
      setUsers(parsedData)
      setIsLoading(false)
    }
    else fetchUsersData(page)

  }, [fetchUsersData, page])

  const CardList = useCallback(() => {
    if(searchKeyword && searchResult.length > 0) return <UserCardList data={ searchResult.slice(startIndex, lastIndex) } />
    else if (searchKeyword && searchResult.length === 0) return <div>Driver Not Found</div>
    else return <UserCardList data={ users.slice(startIndex, lastIndex) } />
  }, [lastIndex, searchKeyword, searchResult, startIndex, users])

  return(
    <>
      <Layout>
        <Suspense fallback={ <div>loading</div> }>
          <div className='content__wrapper'>
            <DriverManagementForm 
              users={ users }
              setSearchKeyword={ setSearchKeyword }
              setSearchResult={ setSearchResult }
            />

            {
              isLoading
                ? <Spinner color='primary'/>
                : (
                  <div 
                    className='user-list__wrapper'
                  >
                    <CardList />
                  </div>
                )
            }

            <Pagination 
              page={ page }
              disabledPrev={ page === 1 }
              disabledNext={ searchKeyword ? lastIndex >= searchResult.length - 1 : lastIndex >= users.length - 1 }
              setPage={ setPage }
            />
          </div>
        </Suspense>
      </Layout>
    </>
  )
}

export default DriverManagementPage
