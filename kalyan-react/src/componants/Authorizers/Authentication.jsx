import { createContext, useContext, useEffect, useState } from "react";
import { BaseURL } from "../Helpers/Helpers";
import { useNavigate } from "react-router-dom";

const authProvider = createContext(null);

export const Authentication = ({ children }) => {
  const [staff, setStaff] = useState(false);
  const [management, setManagement] = useState(false);
  const [student, setStudent] = useState(false);
  const [parent, setParent] = useState(false);

  const Token = localStorage.getItem("authToken");

  const navigator = useNavigate();

  useEffect(() => {
    
    const removeTokensAndPermissions = () => {
      localStorage.removeItem("authToken");
      setManagement(false);
      setStaff(false);
      setParent(false);
      setStudent(false);
      navigator("/");
    };

    const fetchAuthentication = async () => {
      await fetch(BaseURL + "auth/authenticate", {
        method: "GET",
        headers: { "Content-Type": "application/json", header_key: Token },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            data.role === "management"
              ? setManagement(data.success)
              : data.role === "staff"
              ? setStaff(data.success)
              : data.role === "student"
              ? setStudent(data.success)
              : data.role === "parent"
              ? setParent(data.success)
              : removeTokensAndPermissions();
          } else {
            removeTokensAndPermissions();
          }
        });
    };
    fetchAuthentication();

    // managementToken !== null || undefined
    //   ? fetchAuthentication()
    //   : staffToken !== null || undefined
    //   ? fetchAuthentication()
    //   : studentToken !== null || undefined
    // ? fetchAuthentication()
    //   : parentToken !== null || undefined
    //   ? fetchAuthentication()
    //   : removeTokensAndPermissions();
  }, []);

  console.log(staff)
  console.log(management)
  console.log(student)

  return (
    <authProvider.Provider value={{ management, staff, parent, student }}>
      {children}
    </authProvider.Provider>
  );
};
export const Auth = () => {
  return useContext(authProvider);
};
