import { Auth } from "./Authentication";
import { useNavigate } from "react-router-dom";

export const AuthManagementMiddleWare = ({ children }) => {
  const auth = Auth();
  const navigator = useNavigate();
  return auth.management ? children : navigator("/");
};

export const AuthStaffMiddleWare = ({ children }) => {
  const auth = Auth();
  const navigator = useNavigate();
  return auth.staff ? children : navigator("/");
};

export const AuthStudentMiddleWare = ({ children }) => {
  const auth = Auth();
  const navigator = useNavigate();
  return auth.student ? children : navigator("/");
};
