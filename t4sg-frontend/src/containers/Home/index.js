import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { useHistory } from 'react-router-dom'
import { USER_BY_ID } from '../Vaccines/graphql'
import {
  Container,
  BottomDiv,
  FullDiv,
  Header1,
  Header2,
  Header3,
  Header4,
  Header5,
  Image1,
  Image2,
  Link1,
  Link2,
  LinkButton,
  LinkText1,
  LinkText2,
  Caption,
  ImageDiv,
  ParagraphDiv,
  TitleDiv,
  SideImageDiv,
} from '../styles'
const jwt = require('jsonwebtoken')

const tokenSecret = 'reughdjsasdkpmasipkmsdfadf'
const decodeToken = token => {
  if (!token) {
    return false
  }
  try {
    return jwt.verify(token, tokenSecret)
  } catch (error) {
    return false
  }
}

const Home = () => {
  const history = useHistory()
  const decoded = decodeToken(localStorage.getItem('token'))
  const {
    data: userData,
    loading: userLoading,
  } = useQuery(USER_BY_ID, {
    variables: {
      id: decoded.id,
    },
    skip: !decoded,
  })
  const logout = () => {
    localStorage.removeItem('token')
    history.push('/')
  }
  return (
    <Container>
      <Header1>
        {
          userLoading
          ? <>
            <Link1 to='/'/>
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
      <ImageDiv>
        <Image1/>
        <Caption>About WHO</Caption>
      </ImageDiv>
      <FullDiv>
        <ParagraphDiv>
          <TitleDiv>
            <h2>Better health for everyone, everywhere</h2>
          </TitleDiv>
          <SideImageDiv>
            <div>
              <p>
                We are building a better, healthier future for people all over the world.
              </p>
              <p>
                Working with 194 Member States, across six regions, and from more than 150 offices, WHO staff are united in a shared commitment to achieve better health for everyone, everywhere.
              </p>
              <p>
                Together we strive to combat diseases – communicable diseases like influenza and HIV, and noncommunicable diseases like cancer and heart disease.
              </p>
              <p>
                We help mothers and children survive and thrive so they can look forward to a healthy old age. We ensure the safety of the air people breathe, the food they eat, the water they drink – and the medicines and vaccines they need.
              </p>
            </div>
            <Image2/>
          </SideImageDiv>
        </ParagraphDiv>
      </FullDiv>
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


export default Home