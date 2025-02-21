import { motion } from "framer-motion";
import Wrap from "../components/Wrap";
import Title from "../components/Title";
import Paragraph from "../components/Paragraph";
import ButtonPulse from "../components/ButtonPulse";
import Spacing from "../components/Spacing";

const ObrigadoClient = ({ handleContinueShopping }: { handleContinueShopping: () => void }) => {
  return (
    <>

      <Wrap justifyContent="center">
        <Title textAlign="center">Obrigado pela sua compra! 🎉</Title>
      </Wrap>

      <Paragraph textAlign="center">
        Seu pedido foi confirmado e já está sendo processado. Em breve, você receberá um e-mail com os detalhes da compra.
      </Paragraph>

      <Spacing />

      <Wrap justifyContent="center">
        <ButtonPulse onClick={handleContinueShopping}>
          Continuar Comprando
        </ButtonPulse>
      </Wrap>
    </>
  );
};

export default ObrigadoClient;
