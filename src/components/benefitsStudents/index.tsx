import Image from "next/image";
import styles from "./styles.module.scss";

const benefits = [
  {
    benefit: "247 apostilas com toda a teoria e 15.478 questões;",
    id: 1,
  },
  {
    benefit: "15.478 questões nas apostilas;",
    id: 2,
  },
  {
    benefit: "5.048 questões resolvidas e comentadas em vídeo;",
    id: 3,
  },
  {
    benefit: "1.823 vídeos de teoria;",
    id: 4,
  },
  {
    benefit: "Método CRC;",
    id: 5,
  },
  {
    benefit: "16 simulados;",
    id: 6,
  },
  {
    benefit: "Plataforma similar à Netflix;",
    id: 7,
  },
  {
    benefit: "Plataforma exclusiva para suporte e dúvidas;",
    id: 8,
  },
  {
    benefit: "Sugestão de plano de estudos - Planner para personalizar;",
    id: 9,
  },
  {
    benefit: "Gabarito interativo dos simulados;",
    id: 10,
  },
  {
    benefit: "Informações privilegiadas sobre o concurso;",
    id: 11,
  },
  {
    benefit: "Suporte contínuo para uso da plataforma;",
    id: 12,
  },
  {
    benefit: "Lives exclusivas ao longo do ano com o Diretor;",
    id: 13,
  },
  {
    benefit: "Aulas ao Vivo toda semana (pacote opcional);",
    id: 14,
  },
  {
    benefit: "Preparação para o TAF (pacote opcional).",
    id: 15,
  },
];

const BenefitsStudent = () => {
  return (
    <div className={styles.content}>
      <p className={styles.mainTitle}>
        Veja Tudo que Você Terá Acesso Sendo Nosso Aluno
      </p>

      <section className={styles.benefits}>
        {benefits.map((item) => (
          <div key={item.id} className={styles.benefitContainer}>
            <Image
              src={"/images/confirmLogo.png"}
              alt="confirm_logo"
              width={76}
              height={74}
            />
            <p>{item.benefit}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default BenefitsStudent;
