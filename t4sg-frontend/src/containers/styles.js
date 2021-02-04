import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('https://i.pinimg.com/originals/18/8a/69/188a692cf38d5df1c23b16fd7cd4091d.png');
`

export const Container = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh; */
  position: absolute;
  width: 100vw;
  min-height: calc(100vh - 220px);
`

// export const TopDiv = styled.div`
// `

export const FullDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100vw;
`

export const BottomDiv = styled.div`
  width: 100vw;
  position: absolute;
  bottom: -220px;
`

// export const LoginContainer = styled.div`
//   display: flex;
//   padding: 40px 20px;
//   background-color: white;
//   justify-content: space-evenly;
//   flex-direction: column;
//   box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
//   transition: 0.3s;
//   align-items: center;
//   margin: 3em;
//   border-radius: 5px;
//   width: 50%;
// `

export const Input = styled.input`
  border-radius: 3px;
  height: 2em;
  padding: 0.5em 1em;
  margin-top: 0.5em;
  width: 50%;
`

export const Title = styled.div`
  font-size: 2.8em;
  margin-bottom: 0.5em;
`

export const Label = styled.div`
  font-size: 1em;
  margin-bottom: 0.1em;
  margin-top: 0.5em;
  align-self: flex-start;
  margin-left: 10em;
`

export const Button = styled.button`
  border-radius: 3px;
  margin-top: 1.5em;
  padding: 0.25em 1.1em;
  height: 2.5em;
  width: auto;
  color: white;
  font-size: 1em;
  background-color: black;
  border-color: black;
  border-style: solid;
  cursor: pointer;
  transition: border-color 0.3s ease, color 0.3s ease, background-color 0.3s ease;
  &:hover {
    /* background-color: rgb(32,49,59); */
    /* color: black; */
    border-color: white;
  }
`

export const Logo = styled.img`
  position: absolute;
  top: calc(100vh - 160px);
  height: 16%;
`

export const Text = styled.a`
  font-size: 1em;
  margin-top: 1em;
  align-self: center;
`

export const IncPass = styled.p`
  margin-bottom: 0;
  color: rgb(170,0,0);
  font-family: Arial, Helvetica, sans-serif;
`

export const LoadingMsg = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 0;
`

export const Header1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  /* padding: 0 15px 0 0; */
  background-color: black;
  height: 48px;
  width: 100vw;
`

export const Header2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  /* padding: 10px; */
  height: 128px;
  width: 100vw;
`

export const Header3 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0 0 0 25px;
  background-color: rgb(0,142,206);
  height: 48px;
  width: 100vw;
`

export const Header4 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: rgb(0,142,206);
  height: 108px;
  width: 100vw;
  padding: 20px;
`

export const Header5 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 0 27px 0 0;
  background-color: rgb(32,49,59);
  height: 72px;
  width: 100vw;
`

export const Link1 = styled(Link)`
  color: white;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  text-decoration: none;
  line-height: 18px;
  padding: 15px;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.2s ease, background-color 0.2s ease;

  &:hover {
    background-color: white;
    color: black
  }
`

export const Link2 = styled(Link)`
  color: white;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  text-decoration: none;
  line-height: 18px;
  padding: 15px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgb(218,100,39)
  }
`

export const LinkButton = styled.button`
  color: white;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  border: none;
  line-height: 18px;
  padding: 15px;
  font-weight: bold;
  background-color: black;
  cursor: pointer;
  transition: color 0.2s ease, background-color 0.2s ease;

  &:hover {
    background-color: white;
    color: black
  }
`

export const LinkText1 = styled.div`
  color: white;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  line-height: 18px;
  padding: 15px;
  font-weight: bold;
`

export const LinkText2 = styled.div`
  color: white;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  line-height: 18px;
  padding: 27px 15px;
  font-weight: bold;
`

export const ImageDiv = styled.div`
  width: 100%;
  height: 45vw;
  position: relative;
  text-align: center;
  color: white;
`

export const Image1 = styled.div`
  /* position: absolute; */
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('https://www.who.int/images/default-source/imported/who-staff.tmb-1920v.jpg?Culture=en&sfvrsn=7f0ca422_8');
`

export const Caption = styled.div`
  position: absolute;
  bottom: 80px;
  left: 50px;
  font-size: 50px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  background-color: rgba(0,142,206,0.8);
`

export const ParagraphDiv = styled.div`
  width: 95%;
  height: auto;
  margin: 10px;
  padding: 10px 10px 50px 10px;
  font-family: Arial, Helvetica, sans-serif;
`

export const TitleDiv = styled.div`
  border-style: none none solid none;
  height: 35px;
  border-color: lightgrey;
  border-width: 1px;
  margin-bottom: 20px;
`

export const SideImageDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Image2 = styled.div`
  /* position: absolute; */
  height: 300px;
  width: 1400px;
  margin-left: 50px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('https://www.who.int/images/default-source/publications/brochure/boy-malawi.tmb-768v.jpg?Culture=en&sfvrsn=41439f93_12');
`

export const VaccineDiv = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  margin: 30px;
  width: 400px;
`

export const NoDataDiv = styled.div`
  align-content: center;
  margin-bottom: 20px;
`

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 40px 20px;
  box-shadow: 0 6px 12px 0 rgba(0,0,0,0.4);
  font-family: Arial, Helvetica, sans-serif;
  margin: 3em;
  align-items: center;
  /* border-radius: 5px; */
  text-align: center;
  margin: 3em;
  width: 400px;
  background-color: rgba(0,142,206,0.9);
  /* animation: color-change 40s infinite; */
  position: center;
  /* @keyframes color-change {
    0% { background-color: rgba(100,128,150,0.95); }
    20% { background-color: rgba(128,128,100,0.95); }
    40% { background-color: rgba(100,128,128,0.95); }
    60% { background-color: rgba(150,100,128,0.95); }
    80% { background-color: rgba(128,150,100,0.95); }
    100% { background-color: rgba(108,128,150,0.95); }
  } */
`

export const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
`

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  border: black 1px;
  border-style: solid;
  justify-content: space-between;
  background-color: rgb(230,230,230);
`

export const TitleButton = styled.button`
  font-size: 16px;
  padding: 10px 10px;
  font-weight: bold;
  border: none;
  border-radius: 2px;
  background-color: rgb(230,230,230);
  cursor: pointer;
`

export const EvenEntryDiv = styled.div`
font-size: 16px;
  padding: 10px 10px;
  border: black 1px;
  border-style: none solid solid solid;
  background-color: rgb(200,200,200);
  display: flex;
  justify-content: space-between;
`

export const OddEntryDiv = styled.div`
font-size: 16px;
  padding: 10px 10px;
  border: black 1px;
  border-style: none solid solid solid;
  background-color: rgb(230,230,230);
  display: flex;
  justify-content: space-between;
`

export const TopEntryDiv = styled.div`
  font-size: 16px;
  /* margin: 10px 0 0 0; */
  padding: 10px 10px;
  border: black 1px;
  border-style: solid;
  background-color: rgb(200,200,200);
  display: flex;
  justify-content: space-between;
`