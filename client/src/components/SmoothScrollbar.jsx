import Scrollbar from "smooth-scrollbar";
import { useEffect } from "react";

const SmoothScrollbar = () => {
  const options = {
    damping: 0.07,
  };

  useEffect(() => {
    Scrollbar.init(document.body, options);

    return () => {
      if (Scrollbar) Scrollbar.destroy(document.body);
    };
  }, []);

  return null;
};

export default SmoothScrollbar;
