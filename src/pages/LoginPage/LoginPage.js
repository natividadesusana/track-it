import { ContainerLogin, Logo } from "./styles";
import { Link } from "react-router-dom";
import FormLogin from "../../components/FormLogin/FormLogin";
import logo from "../../assets/images/logo.png";

export default function LoginPage() {
  return (
    <ContainerLogin>
      <Logo src={logo} alt="Logo TrackIt" />
      <FormLogin />
      <Link to="/hoje" data-test="login-btn">
        <p> Não tem uma conta? Cadastre-se!</p>
      </Link>
    </ContainerLogin>
  );
}
