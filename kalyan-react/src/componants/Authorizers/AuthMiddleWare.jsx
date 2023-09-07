import { Auth } from "./Authentication";
import { useNavigate } from "react-router-dom";

export const AuthMiddleWare = ({ children }) => {
  const auth = Auth();
  const navigator = useNavigate();
  return auth.recruiter ? children : navigator("/");
};

export const AuthCheckSaleRecruiter = ({ children }) => {
  const auth = Auth();
  const navigator = useNavigate();
  return auth.saleRecruiter ? children : navigator("/");
};

export const AuthCheckRecruiterBoth = ({ children }) => {
  const auth = Auth();
  const navigator = useNavigate();
  return auth.saleRecruiter || auth.recruiter ? children : navigator("/");
};

export const AuthCheckAdmin = ({ children }) => {
  const auth = Auth();
  const navigator = useNavigate();
  return auth.admin ? children : navigator("/");
};
