import { HABITS_URL } from "../../Constants/urls";
import { useContext } from "react";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import { UserDataContext } from "../../Context/userData";
import { White } from "../../Constants/colors";
import { ButtonSave } from "./styles";

export default function ButtonCard({
  modeDisable,
  setModeDisable,
  setDisplayMode,
  setDaySelected,
  setNameHabit,
  color,
  background,
  hover,
  content,
  body,
}) {
  const { config } = useContext(UserDataContext);

  function buttonClick(e) {
    e.preventDefault();
    setModeDisable(true);

    if (content === "Cancelar") {
      setDisplayMode("none");
      setModeDisable(false);
    } else if (content === "Salvar") {
      if (body.days.length === 0 || body.name === "") {
        alert("Preencha corretamente!");
        setModeDisable(false);
      } else {
        axios
          .post(HABITS_URL, body, config)
          .then(() => {
            setDisplayMode("none");
            setNameHabit("");
            setDaySelected([]);
            setModeDisable(false);
          })
          .catch((error) => {
            alert(error.response.data.message);
            setModeDisable(false);
          });
      }
    }
  }

  return (
    <ButtonSave
      onClick={buttonClick}
      disabled={modeDisable}
      color={color}
      background={background}
      hover={hover}
      data-test={content === "Salvar" ? "habit-create-save-btn" : "habit-create-cancel-btn"}
    >
      {modeDisable ? (
        <ThreeDots color={White} height="12" width="40" />
      ) : (
        content
      )}
    </ButtonSave>
  );
}
