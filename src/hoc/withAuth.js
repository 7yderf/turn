/* eslint-disable react/display-name */
import { useLocation, Navigate } from "react-router-dom";
import { useAppContext } from "@context";

const authRoutes = ["/auth/signin", "/auth/signup", "/auth/forgot"];

function withAuth(Component, type = "page") {
  return (props) => {
    const { global: { user, sessionId } } = useAppContext();
    const { pathname, search, state } = useLocation();

    const from = (state)?.from || "/";
    const authenticated = !(JSON.stringify(user) === JSON.stringify({}) && sessionId === null);

    const unprotectedPages = authRoutes.some((page) => page === pathname);

    if (type === "component") return <Component {...(props)} auth={authenticated} />;

    if (authenticated && unprotectedPages) return <Navigate to={from} replace />;

    if ((!authenticated && unprotectedPages) || (authenticated && !unprotectedPages)) {
      return <Component {...(props)} auth={authenticated} />;
    }

    return (<Navigate to="/auth/signin" state={{ from: pathname + search }} replace />);
  };
}

export default withAuth;
