/* eslint-disable no-unused-vars */
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import { useDarkMode } from "../context/DarkModeContext";

export function DarkModeToggle() {
  const { isDarkMode, ToggleDarkMode } = useDarkMode();
  console.log(isDarkMode, "and ", ToggleDarkMode);
  return (
    <ButtonIcon onClick={ToggleDarkMode}>
      {!isDarkMode ? <HiOutlineMoon /> : <HiOutlineSun />}
    </ButtonIcon>
  );
}
