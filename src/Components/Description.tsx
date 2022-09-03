import styled from "styled-components"
import { Theme } from "../Theme/GlobalTheme" 

const DescriptionText = styled.p`
  max-width: 300px;
  text-align: center;
  margin: 0 auto 15px auto;
  color: ${({ theme: { colors } }: Theme) => colors.desaturatedBlue};
`

function Description() {
  return (
    <DescriptionText>
      You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
    </DescriptionText>
  )
}

export default Description
