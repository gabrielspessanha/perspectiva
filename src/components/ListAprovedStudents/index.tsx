import Button from "../common/ButtonChangeLife/Button";
import { Slide } from "../common/Slide";
import styles from "./styles.module.scss";

const ListStudentsAproved = () => {
  return (
    <>
      <div className={styles.listStudents}>
        <section className={styles.slide}>
          <p className={styles.title}>
            Veja a Lista dos Nossos Alunos <strong>Aprovados</strong> no Último
            Concurso
          </p>
          <small>
            {"("}resultados do dia 17 de Maio de 2024 {")"}
          </small>

          <Slide />
        </section>
      </div>
      <div className={styles.changeLife}>
        <p className={styles.title}>
          Seu nome pode Estar na Lista dos Próximos Aprovados no CFO CBMERJ 2024
        </p>
        <h2>Basta Clicar no Botão Abaixo</h2>
        <Button />
      </div>
    </>
  );
};

export default ListStudentsAproved;
