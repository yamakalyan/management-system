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

export const AuthManageStaff = ({ children }) => {
  const auth = Auth();
  const navigator = useNavigate();
  return auth.staff || auth.management ? children : navigator("/");
};

export const AuthStaffStudent = ({ children }) => {
  const auth = Auth();
  const navigator = useNavigate();
  return auth.staff || auth.student ? children : navigator("/");
};

export const AuthManageStaffStudent = ({ children }) => {
  const auth = Auth();
  const navigator = useNavigate();
  return auth.management || auth.staff || auth.student
    ? children
    : navigator("/");
};
