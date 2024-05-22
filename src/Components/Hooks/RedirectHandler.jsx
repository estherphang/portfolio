import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function RedirectHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const redirect = searchParams.get("redirect");

    if (redirect) {
      navigate(redirect, { replace: true });
    }
  }, [navigate]);

  return null;
}
