import Image from "next/image";
import styles from "./styles.module.scss";
const Mural = () => {
  return (
    <div className={styles.content}>
      <p>
        A Gente Ainda não Sabe como vai Fazer para Colocar mais{" "}
        <strong> 60 Alunos </strong>Aprovados no Nosso Álbum de Fotos
      </p>
      <Image
        src={"/images/mural.png"}
        alt="muralofStudents"
        width={360}
        height={360}
      />
    </div>
  );
};

export default Mural;
