import Button from "@/components/common/ButtonChangeLife/Button";
import styles from "./styles.module.scss";
import Image from "next/image";

export const Main = () => {
  return (
    <main className={styles.Main}>
      <Image
        src="/perspectivaLogo.png"
        alt="pespectivaLogo"
        width={124}
        height={79}
        className={styles.logoImage}
      />
      <p className={styles.MainTitle}>
        Você é tão Capaz de Virar Bombeiro Militar Quantos os
        <strong> 60 Alunos</strong> que Nós Aprovamos no CFO CBMERJ 2023
      </p>
      <p className={styles.Video}>Video indisponivel</p>
      <Button />

      <div className={styles.BackgroundColor}></div>
    </main>
  );
};
