import styled from "styled-components"
import { Theme } from "../Theme/GlobalTheme"

const Button = styled.button`
  display: block;
  border: none;
  margin: 0 auto;
  font-size: 18px;
  cursor: pointer;
  padding-bottom: 40px;
  background-color: transparent;
  color: ${({theme: { colors }}: Theme) => colors.darkBlue};
`

function ButtonCancelOrder() {
  return (
    <Button>Cancel Order</Button>
  )
}

export default ButtonCancelOrder
