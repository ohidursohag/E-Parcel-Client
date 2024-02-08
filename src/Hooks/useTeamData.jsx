import { useEffect, useState } from "react";

const useTeamData = () => {
  const [ourTeam, setOurTeam] = useState([]);
  useEffect(() => {
    fetch("./Team.json")
      .then((res) => res.json())
      .then((data) => setOurTeam(data));
  }, []);
  return {ourTeam};
};

export default useTeamData;
