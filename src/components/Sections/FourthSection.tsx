import Image from "../Image";
import Section from "../Section";
import Spacing from "../Spacing";
import TextCardsGradient from "../TextCardsGradient";
import Title from "../Title";
import Wrap from "../Wrap";

const FourthSection = () => {
  const cardItems = [
    "Um produto 100% natural",
    "Estimula a produção de melanina",
    "Ciência de alta tecnologia",
    "Produto com qualidade comprovada",
  ];

  return (
<Section height="100%" backgroundColor="#000000" backgroundImage="bgExclusivo.png">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            
            {/* Texto e Cards */}
            <div className="lg:w-1/2 text-white">
              <Title>Exclusividade RevitaColor:</Title>
              <Spacing />


              <div className="flex">
              <TextCardsGradient items={cardItems} />
              </div>
            </div>

            <Wrap justifyContent="center">
              <Image src="produto.png" alt="RevitaColor Produto" className="w-full max-w-md" />
            </Wrap>
          </div>
        </div>
      </Section>
  );
}

export default FourthSection;