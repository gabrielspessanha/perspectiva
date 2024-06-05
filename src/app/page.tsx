import Financial from "@/components/Financial";
import Footer from "@/components/Footer";
import ListStudentsAproved from "@/components/ListAprovedStudents";
import { Main } from "@/components/Main/index";
import ResultsPerspectiva from "@/components/ResultsPerspectiva";
import BenefitsStudent from "@/components/benefitsStudents";
import Doubts from "@/components/doubts";
import Mural from "@/components/mural";
import PricesAndRefund from "@/components/pricesAndRefund";
import StudentVideo from "@/components/studentVideos";

export default function Home() {
  return (
    <>
      <Main />
      <ListStudentsAproved />;
      <Financial />
      <ResultsPerspectiva />
      <BenefitsStudent />
      <Mural />
      <StudentVideo />
      <PricesAndRefund />
      <Doubts />
      <Footer />
    </>
  );
}
