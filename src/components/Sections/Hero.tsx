import ButtonPulse from "../ButtonPulse";
import Container from "../Container";
import Image from "../Image";
import Section from "../Section";
import Spacing from "../Spacing";
import Span from "../Span";
import Title from "../Title";
import VideoPlayer from "../VideoPlayer";
import Wrap from "../Wrap";

const Hero = () => {
  const scrollToKits = () => {
    document.getElementById("kits")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Section
    backgroundColor="#000000"
    paddingBottom="5rem"
    height="100%"
    >
      <Container>
      <Wrap justifyContent="center">
      <Image
        src="logo.png"
        alt="Logo"
        width="80px"
        height="80%"
        />
    </Wrap>

      <Spacing />

      <Title textAlign="center">
        Um sabonete que <Span color="#ffb829">
        acaba com os cabelos brancos! </Span>
      </Title>

      <Spacing /><Spacing />

        <VideoPlayer  
        url="https://www.youtube.com/watch?v=QR8PYIRSvVk" 
        controlsColor="#ffb829"
        progressColor="#ffb829"
        backgroundColor="rgba(0, 0, 0, 0.09)"
        rangeColor="#9E8D6F"
        />

      <Spacing />

    <Wrap justifyContent="center">
      <ButtonPulse onClick={scrollToKits} background="linear-gradient(269.19deg, #ffb829 12.4%, #9f6b03 110.4%)"  textColor="#000000">COMPRAR AGORA</ButtonPulse>
    </Wrap>



      </Container>
    </Section>
  )
}

export default Hero;