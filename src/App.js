import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import TodayPage from "./pages/TodayPage/TodayPage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import UserDataProvider from "./Context/userData";

export default function App() {
  return (
    <BrowserRouter>
      <UserDataProvider>
        <Routes>
          <Route path={"/"} element={<LoginPage />} />
          <Route path={"/cadastro"} element={<SignUpPage />} />
          <Route path={"/habitos"} element={<HabitsPage />} />
          <Route path={"/hoje"} element={<TodayPage />} />
          <Route path={"/historico"} element={<HistoryPage />} />
        </Routes>
      </UserDataProvider>
    </BrowserRouter>
  );
}
