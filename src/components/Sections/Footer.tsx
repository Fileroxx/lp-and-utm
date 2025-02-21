import Container from "../Container";
import Image from "../Image";
import Paragraph from "../Paragraph";
import Section from "../Section";
import Spacing from "../Spacing";
import Wrap from "../Wrap";

const Footer = () => {
  return (
    <Section height="100%" backgroundColor="#202020">
    <Container>
        <Wrap justifyContent="center">
          <Image src="logo.png" alt="Logo Rodapé" width="80px"/>
        </Wrap>
          <Spacing />
          <Paragraph textAlign="center">
            
          © 2024 Revita Color. Todos os direitos reservados. Este site e seu
            conteúdo são protegidos por leis de direitos autorais e outras
            leis de propriedade intelectual. A reprodução, distribuição ou uso
            não autorizado do conteúdo deste site, no todo ou em parte, é
            estritamente proibida sem a prévia autorização por escrito de
            Igor Fernandes
          
          </Paragraph>

        <Spacing />

        <Wrap justifyContent="center">
          <a href="#" className="text-white">Política de Privacidade</a>
          <a href="#" className="text-white">Termos de Uso</a>
        </Wrap>

    </Container>
  </Section>
  )
}

export default Footer;