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
  margin: .9rem 0;

  h3 {
    margin-bottom: 0;
    font-weight: 600;
    text-transform: uppercase;
  }
  p {
    margin-bottom: 0;
    padding: .2;
  }
`

export { Wrapper, Card }
