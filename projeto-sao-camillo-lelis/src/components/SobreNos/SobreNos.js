import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import fotoDeTodos from "../../assets/img/Foto_de_todos2023.jpg";

export default function SobreNos({ scrollY }) {
  const [size, setSize] = useState(100);
  const { ref, inView } = useInView({
    threshold: 0.1, // Zoom começa quando 10% do componente é visível
  });

  useEffect(() => {
    if (inView) {
      const handleScroll = () => {
        const newSize = 100 + window.scrollY * 0.05; // Ajuste a velocidade do zoom conforme necessário
        setSize(newSize);
      };

      // Adiciona o evento de rolagem enquanto o componente está visível
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll); // Limpeza
      };
    } else {
      setSize(100); // Reseta o zoom ao sair da visualização
    }
  }, [inView]);
  return (
    <div
      ref={ref}
      className="container-sobre"
      style={{ backgroundSize: `${size}vw ${size}vh` }}
      id="sobre"
    >
      <img src={fotoDeTodos} alt="Foto de Todos 2023" />
      <div>
        <h1>Sobre Nós</h1>
        <p>
          Fundada em 16 de outubro de 1971, a Casa São Camilo de Lelis é uma
          Organização da Sociedade Civil (OSC) sem fins lucrativos, dedicada ao
          acolhimento de pessoas em situação de vulnerabilidade social,
          principalmente aquelas em situação de rua. Situada em Juiz de Fora -
          MG, a instituição opera desde sua fundação em um imóvel cedido pela
          Paróquia do bairro Santa Luzia, permanecendo fiel à sua missão de
          oferecer abrigo, dignidade e cidadania aos seus acolhidos.
        </p>
        <p>
          Nossa missão é proporcionar acolhimento integral a pessoas em situação
          de rua, promovendo o resgate de sua dignidade e cidadania através de
          ações de assistência social, cuidados de saúde e reinserção na
          sociedade.
        </p>
        <p>
          Oferecemos aos nossos acolhidos cinco refeições diárias, produtos de
          higiene pessoal e cuidados com a saúde, acompanhamento médico,
          odontológico e fioterápico, orientação social e assistência para
          recuperação de vínculos familiares. Além disso, nossa equipe de
          Serviço Social auxilia na obtenção de documentos, inclusão em
          programas de requalificação profissional e encaminhamentos para
          oportunidades de emprego.
        </p>
      </div>
    </div>
  );
}
