import { useEffect, useState } from "react";
import { GoArrowUp } from "react-icons/go";
import Container from "../Container";
const GotoTop = () => {
  const [isShowGoto, setIsShowGoto] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsShowGoto(window.scrollY > 200);
    });
  }, []);
  return (
    <Container
      className={`flex justify-end ${isShowGoto ? "block " : "hidden"}`}>
      <button
        title="Go to top"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        className="p-2 rounded-full bg-orange-500 hover:scale-110 fixed bottom-20 z-50 duration-500 hover:bg-orange-400 group animate-bounce">
        <GoArrowUp
          size={25}
          className="text-white duration-500 group-hover:-translate-y-1"
        />
      </button>
    </Container>
  );
};

export default GotoTop;
