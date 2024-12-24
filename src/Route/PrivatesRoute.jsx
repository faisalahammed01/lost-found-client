import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Page/Loading";
import AuthContext from "../Context/AuthContext/AuthContext";

const PrivatesRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading || user === undefined) {
    return <Loading />;
  }

  if (user && user?.email) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivatesRoute;
