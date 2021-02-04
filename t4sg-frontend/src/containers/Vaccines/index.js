import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { useHistory } from 'react-router-dom'
import { ALL_VACCINES, USER_BY_ID } from './graphql'
import {
  Container,
  BottomDiv,
  FullDiv,
  Header1,
  Header2,
  Header3,
  Header4,
  Header5,
  Link1,
  Link2,
  LinkButton,
  LinkText1,
  LinkText2,
  VaccineDiv,
  NoDataDiv,
  ButtonDiv,
  InputDiv,
  TitleButton,
} from '../styles'
import VaccineEntry from './VaccineEntry'
const jwt = require('jsonwebtoken')

const tokenSecret = 'reughdjsasdkpmasipkmsdfadf'
const decodeToken = token => {
  if (!token) {
    return false
  }
  try {
    return jwt.verify(token, tokenSecret)
  } catch {
    return false
  }
}

const Vaccines = () => {
  const history = useHistory()
  const decoded = decodeToken(localStorage.getItem('token'))
  const [sortByName, setSort] = useState(true)
  const [nameFilter, setName] = useState('')
  const [stateFilter, setState] = useState('')
  const {
    data: userData,
    loading: userLoading,
  } = useQuery(USER_BY_ID, {
    variables: {
      id: decoded.id,
    },
    skip: !decoded,
  })
  const {
    data: vaccineData,
    loading: vaccineLoading,
  } = useQuery(ALL_VACCINES, {skip: !decoded})
  const logout = () => {
    localStorage.removeItem('token')
    history.push('/')
  }
  const getVacList = () => {
    if (vaccineLoading) {
      return []
    }
    const lst = vaccineData.allVaccines.slice()
    if (sortByName) {
      lst.sort((e1, e2) => e1.name < e2.name ? -1 : 1)
    } else {
      lst.sort((e1, e2) => e1.state < e2.state ? -1 : 1)
    }
    return lst.filter(e => (
      e.name.toLowerCase().includes(nameFilter.toLowerCase())
      && e.state.toLowerCase().includes(stateFilter.toLowerCase())
    ))
  }
  return (
    <Container>
      <Header1>
        {
          userLoading
          ? <>
            <Link1 to='/vaccines'/>
          </>
          : <>
            {
              userData
              ? <>
                <LinkText1>{`Welcome, ${userData.userById.firstName} ${userData.userById.lastName}`}</LinkText1>
                <LinkButton onClick={logout}>Logout</LinkButton>
              </>
              : <>
                <Link1 to="/login">Login</Link1>
                <Link1 to="/register">Register</Link1>
              </>
            }
          </>
        }
      </Header1>
      <Header2>
        <img
          src="https://www.who.int/images/default-source/infographics/logo-who.tmb-1200v.jpg?Culture=en&sfvrsn=2fcc68a0_15"
          alt="WHO logo"
        />
      </Header2>
      <Header3>
        <Link2 to="/">About Us</Link2>
        <Link2 to="/vaccines">Data</Link2>
      </Header3>
      {
        userLoading
        || <>
          {
            userData
            ? <>
              {
                vaccineLoading
                ? <FullDiv>
                    <h3>Gathering data...</h3>
                  </FullDiv>
                : <FullDiv>
                    <VaccineDiv>
                    <InputDiv>
                      <input
                        type="text"
                        placeholder="Filter by name..."
                        value={nameFilter}
                        onChange={e => setName(e.target.value)}
                      />
                      <input
                        type="text"
                        placeholder="Filter by state..."
                        value={stateFilter}
                        onChange={e => setState(e.target.value)}
                      />
                    </InputDiv>
                    <ButtonDiv>
                      <TitleButton onClick={() => setSort(true)}>Disease Name</TitleButton>
                      <TitleButton onClick={() => setSort(false)}>State Offered</TitleButton>
                    </ButtonDiv>
                    {getVacList().length
                      ? <>
                        {getVacList().map(entry => (
                          <VaccineEntry
                            key={entry.id}
                            rank={getVacList().indexOf(entry)}
                            {...entry}
                          />
                        ))}
                      </>
                      : <p>No vaccines to show.</p>
                    }
                  </VaccineDiv>
                </FullDiv>
              }
            </>
            : <>
              <FullDiv>
                <h2 style={{fontFamily: "Arial, Helvetica, sans-serif"}}>Login to see vaccine data.</h2>
              </FullDiv>
              <FullDiv>
                <NoDataDiv>
                  <img
                    src="https://rencaigroup.com/wp-content/uploads/2019/08/people-do-not.png"
                    alt=""
                  />
                </NoDataDiv>
              </FullDiv>
            </>
          }
        </>
      }
      <BottomDiv>
        <Header4>
          <img
            src="https://www.who.int/ResourcePackages/WHO/assets/dist/images/logos/en/h-logo-white.svg"
            alt="WHO logo"
          />
        </Header4>
        <Header5>
          <LinkText2>© 2021 WHO (Jack Boettcher)</LinkText2>
        </Header5>
      </BottomDiv>
    </Container>
  )
}


export default Vaccines