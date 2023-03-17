import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { ContainerHistoric } from "./styles";

export default function HistoricPage() {
  return (
    <>
      <Header />
      <ContainerHistoric>
        <h1>Histórico</h1>
        <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
      </ContainerHistoric>
      <Footer />
    </>
  );
}
