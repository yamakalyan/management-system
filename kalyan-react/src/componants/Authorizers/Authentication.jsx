import { createContext, useContext, useEffect, useState } from "react";
import { BaseURL } from "../Helpers/Helpers";
import { useNavigate } from "react-router-dom";

const authProvider = createContext(null);

export const Authentication = ({ children }) => {
  const [staff, setStaff] = useState(false);
  const [management, setManagement] = useState(false);
  const [student, setStudent] = useState(false);

  const Token = localStorage.getItem("authToken");

  const navigator = useNavigate();

  useEffect(() => {
    
    const removeTokensAndPermissions = () => {
      localStorage.removeItem("authToken");
      setManagement(false);
      setStaff(false);
      setStudent(false);
      // navigator("/");
    };

    const fetchAuthentication = async () => {
      await fetch(BaseURL + "auth/authenticate", {
        method: "GET",
        headers: { "Content-Type": "application/json", header_key: Token },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            data.results.role === "management"
              ? setManagement(true)
              : data.results.role === "staff"
              ? setStaff(true)
              : data.results.role === "student"
              ? setStudent(true)
              : removeTokensAndPermissions();
          } else {
            removeTokensAndPermissions();
          }
        });
    };
    fetchAuthentication();
  }, []);

  return (
    <authProvider.Provider value={{ management, staff, student }}>
      {children}
    </authProvider.Provider>
  );
};
export const Auth = () => {
  return useContext(authProvider);
};
