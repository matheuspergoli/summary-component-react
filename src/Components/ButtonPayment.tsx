import styled from "styled-components"
import { Theme } from "../Theme/GlobalTheme"

const Button = styled.button`
  display: block;
  width: 80%;
  border: none;
  padding: 14px;
  color: white;
  font-size: 18px;
  cursor: pointer;
  font-weight: bold;
  border-radius: 10px;
  margin: 0 auto 30px auto;
  background-color: ${({theme: { colors }}: Theme) => colors.brightBlue};

  &:hover {
    background-color: hsla(245, 75%, 52%, 0.70);
  }
`

function ButtonPayment() {
  return (
    <Button>Proceed to Payment</Button>
  )
}

export default ButtonPayment
