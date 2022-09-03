import styled from "styled-components"
import mainImage from "../images/illustration-hero.svg"

const ContainerImage = styled.figure`
  width: 100%;
  max-width: 100%;
`

const Image = styled.img`
  display: block;
  width: 100%;
  max-width: 100%;
  object-fit: cover;
  border-radius: 20px 20px 0 0;
`

function HeroImage() {
  return (
    <ContainerImage>
      <Image src={mainImage} alt="Hero image" />
    </ContainerImage>
  )
}

export default HeroImage
