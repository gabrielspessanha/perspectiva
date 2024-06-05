import Link from "next/link";
import styles from "./styles.module.scss";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["800"],
  subsets: ["latin"],
});

const Button = () => {
  return (
    <Link
      href={
        "https://checkout.cfo.cursoperspectivaonline.com.br/pay/cfo-cbmerj-2024?src=9bc4b6ccc6b4484d84b0ae3a2c1af625-9bc42df1d2814c69a522053a7f88e3f3&"
      }
    >
      <button className={`${styles.Button} ${poppins.className}`}>
        Vou Mudar de Vida
      </button>
    </Link>
  );
};

export default Button;
