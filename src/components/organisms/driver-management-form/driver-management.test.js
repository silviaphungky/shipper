import { fireEvent, render } from '@testing-library/react'
import DriverManagementForm from './index'

it('checkDriverManagementFormRender', () => {
  const { queryByTitle } = render (<DriverManagementForm />)

  const driverManagementForm = queryByTitle('driverManagementForm')
  expect(driverManagementForm).toBeTruthy()
})

describe('onChangeSearchInput', () => {
  it('onChange', () => {
    const { queryByTitle } = render (<DriverManagementForm />)

    const searchInput = queryByTitle('searchInput')
    fireEvent.change(searchInput, { target: { value: 'test' } })
    expect(searchInput.value).toBe('test')
  })
})
