import Container from "../Container";
import ProductCard from "../ProductCards";
import Section from "../Section";
import Spacing from "../Spacing";
import Title from "../Title";

const SixthSection = () => {
   return (
    <Section height="100%" backgroundColor="#000000">
    <Container>
      <Title color="#FFFFFF" textAlign="center">
        Escolha o melhor kit e garanta já o seu tratamento para dar adeus aos fios brancos:
      </Title>

      <Spacing /> <Spacing />

      <div id="kits" className="flex justify-center max-md:flex-col max-md:items-center mx-auto gap-6">
        <ProductCard
          image="1.png"
          oldPrice="R$ 129,90"
          newPrice="R$ 99,90"
          installment="9,74"
          purchaseLink="/obrigado"
        />

        <ProductCard
          image="2.png"
          oldPrice="R$ 179,90"
          newPrice="R$ 149,90"
          installment="14,62"
          purchaseLink="/obrigado"
        />

        <ProductCard
          image="3.png"
          oldPrice="R$ 239,90"
          newPrice="R$ 199,90"
          installment="19,49"
          purchaseLink="/obrigado"
        />
      </div>
  
    </Container>
  </Section>
   );
}

export default SixthSection;