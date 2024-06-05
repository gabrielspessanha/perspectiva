import Image from "next/image";
import styles from "./styles.module.scss";
const ResultsPerspectiva = () => {
  return (
    <div className={styles.content}>
      <p>Por Que o Perspectiva tem Resultados tão Fantásticos?</p>
      <section className={styles.platform}>
        <h3>Veja Nossa Plataforma por Dentro</h3>
        <Image
          src={"/images/platform.png"}
          alt="platform_Perspectiva"
          width={446}
          height={253}
        />
      </section>
    </div>
  );
};

export default ResultsPerspectiva;
