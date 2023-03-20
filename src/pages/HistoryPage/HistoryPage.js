import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { ContainerHistoric } from "./styles";
import { PageWithLoading } from "../../components/PageWithLoading/PageWithLoading";

export default function HistoricPage({ isLoading }) {
  return (
    <>
      <Header />
      <PageWithLoading isLoading={isLoading}>
        <ContainerHistoric>
          <h1>Histórico</h1>
          <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        </ContainerHistoric>
      </PageWithLoading>
      <Footer />
    </>
  );
}
