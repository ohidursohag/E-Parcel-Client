import { useEffect, useRef } from "react";

const useClickOutSide = (setFalse) => {
  const refWraper = useRef(null);
  const handleClickOutSide = (event) => {
    if (refWraper.current && !refWraper.current.contains(event.target)) {
      setFalse(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutSide, true);
    return () => {
      document.removeEventListener("click", handleClickOutSide, true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return refWraper;
};
export default useClickOutSide;
