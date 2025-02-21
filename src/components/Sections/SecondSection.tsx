import Card from "../Card";
import Container from "../Container";
import Section from "../Section";
import Title from "../Title";

const SecondSection = () => {
  return (
    <Section
    backgroundColor="#ffffff"
    height="auto"
    >
    <Container>

    <Title textAlign="center" color="#000000">
       Revita Color: A Revolução Contra os Cabelos Brancos Ganha Destaque na Mídia
      </Title>


      <div className="w-full max-w-[1200px] mx-auto flex flex-nowrap max-[1024px]:flex-wrap justify-center gap-6 p-10">
      <Card
        logo="cnn.png"
        title="Shampoo em barra que escurece os fios de forma natural"
        description="A nova fórmula de um sabonete permite que homens e mulheres recuperem a cor natural dos cabelos sem química agressiva."
        borderColor="#000000"
      />
      <Card
        logo="cnn.png"
        title="Pesquisa revela que 8 em cada 10 pessoas aprovam o efeito de um sabonete revolucionário"
        description="Um estudo realizado por dermatologistas confirmou que o sabonete Revita Color é capaz de escurecer gradualmente os fios brancos sem danificar o couro cabeludo."
        borderColor="#000000"
      />
      <Card
        logo="cbic.png"
        title="Vendas de um sabonete inovador crescem 200% e batem recorde no setor de cosméticos"
        description="Com a crescente busca por alternativas naturais para escurecer os fios brancos, o RevitaColor se tornou um dos produtos mais vendidos do segmento capilar em 2024"
        borderColor="#000000"
      />
      <Card
        logo="exame.png"
        title="Especialistas apontam o sabonete revolucionário como substituto ideal das tinturas químicas"
        description="Dermatologistas recomendam o uso do shampoo em barra RevitaColor como alternativa segura e eficaz para quem deseja cobrir os fios brancos sem os danos causados por colorações tradicionais."
        borderColor="#000000"
      />
    </div>



    </Container>


    </Section>
  );
}


export default SecondSection;