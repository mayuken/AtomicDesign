import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { Router } from "./router/Router";
import "./styles.css";

export default function App() {
  // コンポーネントの切り分けを行うことで、App.jsがスッキリ
  return <Router />;
}
