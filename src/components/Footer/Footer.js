import { ContainerFooter, CustomCircularProgressbar } from "./styles";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useContext } from "react";
import { UserDataContext } from "../../Context/userData";
import { White, Blue } from "../../Constants/colors";

export default function Footer() {
  const { percentage } = useContext(UserDataContext);

  return (
    <ContainerFooter>
      <Link to={"/habitos"}>
        <h3>Hábitos</h3>
      </Link>

      <CustomCircularProgressbar>
        <Link to="/hoje">
          <CircularProgressbar
            value={percentage}
            text={`Hoje`}
            background
            backgroundPadding={8}
            styles={buildStyles({
              strokeLinecap: "round",
              textSize: "18px",
              pathColor: White,
              textColor: White,
              trailColor: "transparent",
              backgroundColor: Blue,
            })}
          />
        </Link>
      </CustomCircularProgressbar>

      <Link to={"/historico"}>
        <h3>Histórico</h3>
      </Link>
    </ContainerFooter>
  );
}
