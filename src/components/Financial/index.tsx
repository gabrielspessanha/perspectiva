import Image from "next/image";
import React from "react";
import Button from "../common/ButtonChangeLife/Button";
import styles from "./styles.module.scss";

const Financial = () => {
  return (
    <div className={styles.container}>
      <section className={styles.contentFinancial}>
        <p>
          Além do seu Sonho e da Honra em ser Bombeiro Militar no CBMERJ, a sua
          Vida financeira será <strong>INCRIVEL!</strong>
        </p>
      </section>

      <section className={styles.contentDiagram}>
        <h2>Conheça o Plano de Cargos e Salários</h2>
        <Image
          src={"/images/financesLife.png"}
          alt="financeslifeValues"
          width={268}
          height={329}
          className={styles.smallScreenImage}
        />

        <Image
          src={"/images/diagramScreenFull.png"}
          alt="financeslifeValues"
          width={775}
          height={545}
          className={styles.defaultImage}
        />

        <Button />
      </section>
    </div>
  );
};

export default Financial;
