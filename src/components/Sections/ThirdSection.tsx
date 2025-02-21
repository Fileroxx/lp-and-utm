import BeforeAfterSlider from "../BeforeAndAfter";
import ButtonPulse from "../ButtonPulse";
import Container from "../Container";
import Paragraph from "../Paragraph";
import Section from "../Section";
import Title from "../Title";
import Wrap from "../Wrap";

const ThirdSection = () => {
  const scrollToKits = () => {
    document.getElementById("kits")?.scrollIntoView({ behavior: "smooth" });
  };

  
  return (
<Section
    height="100%"
    >
    <Container>
          <div className="flex flex-col items-center gap-10">
            <Title textAlign="center">Veja o resultado do uso contínuo do Revita Color:</Title>

            <BeforeAfterSlider
              beforeImage="grisalho.png"
              afterImage="resultado.png"
            />

              <Title textAlign="center">
                A praticidade que faltava no seu dia
              </Title>
              
              <Paragraph color="#ffffff" textAlign="center">
                Você consegue imaginar seus cabelos nascendo na cor natural sem
                <br />
                precisar tomar remédios ou viver comprando caixas de tinturas
                para não ter mais cabelos brancos?
              </Paragraph>

              <Paragraph textAlign="center">
                Hoje, através do <strong>ginseng</strong>, uma raiz que
                modifica e altera o gene <strong>IRF4</strong>, causador do
                <br />
                crescimento dos cabelos brancos, é possível devolver a
                produção de melanina aos fios já existentes e evitar o
                crescimento de novos.
              </Paragraph>

              <Wrap justifyContent="center">
              <ButtonPulse  onClick={scrollToKits} background="linear-gradient(269.19deg, #ffb829 12.4%, #9f6b03 110.4%)"  textColor="#000000">COMPRAR AGORA</ButtonPulse>
            </Wrap>
            </div>
       
        </Container>
    </Section>
  );
}
export default ThirdSection;