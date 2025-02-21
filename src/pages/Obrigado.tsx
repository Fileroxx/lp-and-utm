import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Container from "../components/Container";
import Title from "../components/Title";
import Paragraph from "../components/Paragraph";
import Wrap from "../components/Wrap";
import ButtonPulse from "../components/ButtonPulse";
import Section from "../components/Section";
import Spacing from "../components/Spacing";

function Obrigado() {
  const navigate = useNavigate();
  const [utmParams, setUtmParams] = useState("");

  useEffect(() => {
    const storedUtm = localStorage.getItem("utmParams");
    if (storedUtm) {
      const parsedUtm = JSON.parse(storedUtm);
      setUtmParams(new URLSearchParams(parsedUtm).toString());
    }
  }, []);

  const handleContinueShopping = () => {
    navigate(`/?${utmParams}`, { replace: true });
  };

  return (
    <Section centerY height="100vh">
      <Container>
        <Wrap justifyContent="center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="border border-[#28a745] rounded-full p-2"
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
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </motion.svg>
          </motion.div>
        </Wrap>

        <Spacing />

        <Wrap justifyContent="center">
          <Title textAlign="center">Obrigado pela sua compra! 🎉</Title>
        </Wrap>

        <Paragraph textAlign="center">
          Seu pedido foi confirmado e já está sendo processado. Em breve, você
          receberá um e-mail com os detalhes da compra.
        </Paragraph>

        <Spacing />

        <Wrap justifyContent="center">
          <ButtonPulse
            onClick={handleContinueShopping}
            background="linear-gradient(269.19deg, #ffb829 12.4%, #9f6b03 110.4%)"
            textColor="#000000"
          >
            Continuar Comprando
          </ButtonPulse>
        </Wrap>
      </Container>
    </Section>
  );
}

export default Obrigado;
