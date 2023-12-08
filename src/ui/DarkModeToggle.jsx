/* eslint-disable no-unused-vars */
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import { useDarkMode } from "../context/DarkModeContext";

export function DarkModeToggle() {
  const { isDarkMode, ToggleDarkMode } = useDarkMode();

  return (
    <ButtonIcon onClick={ToggleDarkMode}>
      {!isDarkMode ? <HiOutlineMoon /> : <HiOutlineSun />}
    </ButtonIcon>
  );
}
