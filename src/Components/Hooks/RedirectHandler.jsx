import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RedirectHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/portfolio", { replace: true });
  }, [navigate]);

  return null;
};

export default RedirectHandler;
