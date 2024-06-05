import styles from "./styles.module.scss";
import { doubts } from "@/services/doubts";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Doubts = () => {
  return (
    <div className={styles.content}>
      <p>Ainda tem Alguma Dúvida?</p>
      <h3>
        {"("}Perguntas Frequentes{")"}
      </h3>

      {doubts.map((doubt) => (
        <div key={doubt.id} className={styles.doubtContainer}>
          <Accordion className={styles.doubt}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className={styles.question}
            >
              <Typography>{doubt.question}</Typography>
            </AccordionSummary>
            <AccordionDetails className={styles.answer}>
              <Typography>{doubt.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </div>
  );
};

export default Doubts;
