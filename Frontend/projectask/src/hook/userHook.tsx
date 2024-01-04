import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
// import { useQuery } from "@tanstack/react-query"

const userHook = () => {
  const [state, setState] = useState({});

  let token = useSelector((state: any) => state.user);

  useEffect(() => {
    if (token) {
      let decode = jwtDecode(token);
      setState(decode);
    }
  }, []);
};

export default userHook;
