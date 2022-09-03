import styled from "styled-components"
import HeroImage from "./HeroImage"
import { Theme } from "../Theme/GlobalTheme"
import Title from "./Title"
import Description from "./Description"
import Plan from "./Plan"
import ButtonPayment from "./ButtonPayment"
import ButtonCancelOrder from "./ButtonCancelOrder"

const Container = styled.main`
  max-width: 400px;
  border-radius: 20px;
  margin: 50px auto 0px auto;
  background-color: ${({ theme: { colors } }: Theme) => colors.veryPaleBlue};
`

function Card() {
  return (
    <Container>
      <HeroImage />
      <Title />
      <Description />
      <Plan />
      <ButtonPayment />
      <ButtonCancelOrder />
    </Container>
  )
}

export default Card
