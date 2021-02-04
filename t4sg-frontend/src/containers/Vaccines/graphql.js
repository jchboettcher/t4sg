import gql from 'graphql-tag'

export const ALL_VACCINES = gql`
  query allVaccines {
    allVaccines {
      id
      name
      state
    }
  }
`

export const USER_BY_ID = gql`
  query userById($id: ID!) {
    userById(id: $id) {
      firstName
      lastName
    }
  }
`