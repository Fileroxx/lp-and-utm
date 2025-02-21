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
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#28a745"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <motion.path
              d="M20 6L9 17l-5-5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8 }}
            />
          </motion.svg>
        </motion.div>
      </Wrap>

      <Spacing />
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
