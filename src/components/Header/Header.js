import { ContainerHeader, UserImage } from "./styles";
import { UserDataContext } from "../../Context/userData";
import { useContext } from "react";
import { Link } from "react-router-dom";
import iconUser from "../../assets/images/iconUser.png";

export default function Header() {
  const { data } = useContext(UserDataContext);

  return (
    <ContainerHeader data-test="header">
      <Link to="/">
        <p>TrackIt</p>
      </Link>
      <UserImage src={!data ? iconUser : data.image} alt="User Image" />
    </ContainerHeader>
  );
}
