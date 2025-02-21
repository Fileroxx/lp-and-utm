import Container from "../Container";
import Section from "../Section";
import Spacing from "../Spacing";
import TestimonialImages from "../TestimonialImages";
import Title from "../Title";

const FifthSection = () => {

  const testimonialImages = [
    "ps1-min.png",
    "ps2.2-min.png",
    "ps3-min.png",
  ];

  
  return (
    <Section
      height="100%"
      backgroundColor="#000000"
      >
      <Container>
        <Title color="#ffffff" textAlign="center">Eles testaram e vieram contar:</Title>
          <Spacing />
        <TestimonialImages images={testimonialImages} />
      </Container>
    </Section>
  );
}

export default FifthSection;