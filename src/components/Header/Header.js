import { ContainerHeader, Logo, UserImage } from "./styles";
import { UserDataContext } from "../../Context/userData";
import { useContext } from "react";
import { Link } from "react-router-dom";
import logoName from "../../assets/images/logoName.png";
import iconUser from "../../assets/images/iconUser.png";

export default function Header() {
  const { data } = useContext(UserDataContext);

  return (
    <ContainerHeader>
      <Link to="/">
        <Logo src={logoName} alt="Logo TrackIt" />
      </Link>
      <UserImage src={!data ? iconUser : data.image} alt="User Image" />
    </ContainerHeader>
  );
}
