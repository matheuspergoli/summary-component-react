import styled from "styled-components"
import MusicIcon from "../images/icon-music.svg"
import { Theme } from "../Theme/GlobalTheme"

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 350px;
  padding: 20px 15px;
  border-radius: 20px;
  margin: 0 auto 20px auto;
  background-color: hsla(225, 100%, 94%, 0.350);
`

const PlansContainer = styled.article`
  display: flex;
  align-items: center;
  gap: 20px;

  h2 {
    font-size: 18px;
  }

  p {
    color: ${({theme: { colors }}: Theme) => colors.desaturatedBlue};
  }
`

const Button = styled.button`
  border: none;
  cursor: pointer;
  font-size: 20px;
  text-decoration: underline;
  color: ${({theme: { colors }}: Theme) => colors.brightBlue};

  &:hover {
    text-decoration: none;
    color: hsla(245, 75%, 52%, 0.50);
  }
`

function Plan() {
  return (
    <Container>
      <PlansContainer>
        <figure>
          <img src={MusicIcon} alt="Music icon" />
        </figure>
        <div>
          <h2>Annual Plan</h2>
          <p>$59.99/year</p>
        </div>
      </PlansContainer>
      <Button>Change</Button>
    </Container>
  )
}

export default Plan
