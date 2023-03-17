import { ContainerToday, Title, ListToday } from "./styles";
import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { UserDataContext } from "../../Context/userData";
import { HABITS_URL } from "../../Constants/urls";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import BoardToday from "../../components/BoardToday/BoardToday";
import axios from "axios";
import dayjs from "dayjs";

export default function TodayPage() {
  const [todayHabitList, setTodayHabitList] = useState([]);
  const [visibility, setVisibility] = useState(0);
  const [taggedlist, setTaggedlist] = useState([]);
  const navigate = useNavigate();
  const { percentage, calculatePercentage, config } =
    useContext(UserDataContext);

  const daysOfWeek = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const today = dayjs();
  const dayOfWeek = daysOfWeek[today.day()];
  const day = `${dayOfWeek}, ${today.format("DD/MM")}`;

  useEffect(() => {
    axios
      .get(`${HABITS_URL}/today`, config)
      .then((resp) => {
        setTodayHabitList(resp.data);
        calculatePercentage(resp.data);
        setTaggedlist(resp.data.filter((h) => h.done));
      })
      .catch((error) => {
        if (error.response.data.message === "Campo Header inválido!") {
          alert("Sessão expirada!");
          navigate("/");
        }
      });
  }, [config, navigate, visibility, calculatePercentage]);

  return (
    <>
      <Header />
      <ContainerToday>
        <Title taggedlist={taggedlist}>
          <h1 data-test="today">{day}</h1>
          {todayHabitList.length === 0 ? (
            <p>Nenhum hábito encontrado para hoje!</p>
          ) : (
            <p data-test="today-counter">
              {taggedlist.length === 0
                ? "Nenhum hábito concluído ainda"
                : `${percentage}% dos hábitos concluídos`}
            </p>
          )}
        </Title>
        <ListToday>
          {todayHabitList.map((h, i) => (
            <BoardToday
              data-test="today-habit-container"
              id={h.id}
              key={i}
              name={h.name}
              checked={h.done}
              visibility={visibility}
              setVisibility={setVisibility}
              currentSequence={h.currentSequence}
              highestSequence={h.highestSequence}
            />
          ))}
        </ListToday>
      </ContainerToday>
      <Footer />
    </>
  );
}
