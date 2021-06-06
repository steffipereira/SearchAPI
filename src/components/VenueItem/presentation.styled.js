import styled from 'styled-components'

const Wrapper = styled.div`
  background: #f1f5f8;
  margin: 0 auto;
  padding: 2rem 0;
`

const Card = styled.article`
  background: #fff;
  padding: 1.5rem 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 80vw;
  margin: .9rem auto;
`
const Button = styled.button`
  text-transform: uppercase;
  background: #53e3a6;
  color: #fff;
  padding: .475rem .75rem;
  font-size: .875rem;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0 1px 3px rgb(0 0 0 / 20%);
  border-radius: .25rem;
  text-align: center;
`
const Section = styled.div`
  padding: 0;

  p {
    margin-bottom: 0;
  }
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-weight: 600;
    text-transform: uppercase;
    font-size: 1.2rem;
  }
`

export { Wrapper, Card, Button, Section, Header }
