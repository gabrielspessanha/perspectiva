import Image from "next/image";
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <Image
        src={"/perspectivaLogo.png"}
        alt="perspectivaLogo"
        width={124}
        height={79}
      />
    </div>
  );
};

export default Footer;
