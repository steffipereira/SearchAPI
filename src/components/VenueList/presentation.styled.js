import styled from 'styled-components'

const Wrapper = styled.div`
  background: #f1f5f8;
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 2rem 0;
`

const Card = styled.article`
  background: #fff;
  padding: 1.5rem 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20vw;
  margin: .9rem;

  h3 {
    margin-bottom: 0;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 1.2rem;
  }
  p {
    margin-bottom: 0;
  }
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
    display: block;
    text-align: center;
    margin: 2.5rem auto;
`

export { Wrapper, Card, Button }
