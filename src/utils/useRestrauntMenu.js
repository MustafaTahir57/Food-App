import { useEffect, useState } from "react";
import DUMMY_MENU_DATA from "./DUMMY_MENU_DATA";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    // Simulate async call (optional)
    setTimeout(() => {
      setResInfo(DUMMY_MENU_DATA);
    }, 500);
  }, []);

  return resInfo;
};

export default useRestaurantMenu;
