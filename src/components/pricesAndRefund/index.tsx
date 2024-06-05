import Image from "next/image";
import styles from "./styles.module.scss";
import Button from "../common/ButtonChangeLife/Button";
const PricesAndRefund = () => {
  return (
    <div className={styles.content}>
      <div className={styles.refund}>
        <h2>
          Sua Garantia é <span>Total</span>
        </h2>
        <p>Você só estuda com a gente se gostar ou seu reembolso é integral</p>
        <Image
          src={"/images/refund.png"}
          alt="muralofStudents"
          width={310}
          height={313}
        />
      </div>

      <div className={styles.price}>
        <h3>Você vai Estar na Próxima Lista de Aprovados.</h3>
        <p className={styles.subtitle}>
          Basta dar o primeiro passo e desbloquear seu acesso na nossa turma
          agora mesmo
        </p>
        <div className={styles.card}>
          <section className={styles.cardTop}>
            <Image
              src="/perspectivaLogo.png"
              alt="pespectivaLogo"
              width={124}
              height={79}
              className={styles.logoImage}
            />
            <h2>Curso Completo CFO CBMERJ Turma 2024</h2>
          </section>

          <section className={styles.cardBody}>
            <p>✔️ 197 apostilas</p>
            <p>✔️ 3.147 questões em vídeo;</p>
            <p>✔️ 110.115 questões nas apostilas;</p>
            <p>✔️ 1.138 vídeos de teoria;</p>
            <p>✔️ 10 simulados;</p>
            <p>✔️ Método CRC;</p>
            <p>✔️ Plataforma estilo Netflix;</p>
            <p>✔️ Sugestão de plano de estudo;</p>
            <p>✔️ Região para tirar dúvidas;</p>
            <p>✔️ Aulas AO VIVO (pacote opcional).</p>
          </section>

          <section className={styles.cardBottom}>
            <h4>
              <small>12x de</small> R$ 82,29
            </h4>
            <p>
              <small>ou à vista R$ 797,90</small>
            </p>

            <Button />
          </section>

          <h5>Acesso por 1 ano</h5>
        </div>
      </div>
    </div>
  );
};

export default PricesAndRefund;
