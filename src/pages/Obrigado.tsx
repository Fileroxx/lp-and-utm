import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../components/Container";
import Section from "../components/Section";
import ObrigadoClient from "../components/ObrigadoClient";

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
        <ObrigadoClient handleContinueShopping={handleContinueShopping} />
      </Container>
    </Section>
  );
}

export default Obrigado;
