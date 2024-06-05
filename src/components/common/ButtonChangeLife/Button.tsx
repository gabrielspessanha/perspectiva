import styles from "./styles.module.scss";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["800"],
  subsets: ["latin"],
});

const Button = () => {
  return (
    <button className={`${styles.Button} ${poppins.className}`}>
      Vou Mudar de Vida
    </button>
  );
};

export default Button;
