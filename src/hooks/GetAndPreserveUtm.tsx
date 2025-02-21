import { useEffect, ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface PreserveUTMsProps {
  children: ReactNode;
}

function GetAndPreserveUTMs({ children }: PreserveUTMsProps) {
  const navigate = useNavigate();
  const { pathname, search } = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(search);
    const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
    const storedUTMs = JSON.parse(localStorage.getItem("utmParams") || "{}");

    let hasNewUTMs = false;
    const currentUTMs: Record<string, string> = {};

    utmKeys.forEach((key) => {
      const value = urlParams.get(key);
      if (value) {
        currentUTMs[key] = value;
        if (value !== storedUTMs[key]) hasNewUTMs = true;
      }
    });

    if (hasNewUTMs) {
      localStorage.setItem("utmParams", JSON.stringify(currentUTMs));
    }

    const updatedParams = new URLSearchParams(search);
    let shouldUpdate = false;

    utmKeys.forEach((key) => {
      const storedValue = storedUTMs[key];
      if (storedValue && !updatedParams.has(key)) {
        updatedParams.set(key, storedValue);
        shouldUpdate = true;
      }
    });

    if (shouldUpdate && search !== `?${updatedParams.toString()}`) {
      navigate(
        { pathname, search: updatedParams.toString() },
        { replace: true }
      );
    }
  }, [pathname, search, navigate]);

  return <>{children}</>;
}

export default GetAndPreserveUTMs;