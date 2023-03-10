import { NavigationProps } from "./types";
import { ThemeSwitcher } from "../components/theme-switcher";
import { NavigationMenu } from "../index";

export const Navigation = ({config}: NavigationProps) => {
  return (
    <div className="bg-white dark:bg-app-dark px-10 text-app-gray-800 dark:text-app-gray-300 flex justify-center h-16 text-sm font-medium">
      <nav className="max-w-4xl w-full flex justify-between items-center ">
        <NavigationMenu config={config}></NavigationMenu>
        <ThemeSwitcher></ThemeSwitcher>
      </nav>
    </div>
  )
}
