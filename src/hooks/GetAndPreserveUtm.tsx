import { useEffect, ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface PreserveUTMsProps {
  children: ReactNode;
}

function GetAndPreserveUTMs({ children }: PreserveUTMsProps) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    let storedUtm = localStorage.getItem("utmParams");
    let utmParams: Record<string, string> = storedUtm ? JSON.parse(storedUtm) : {};

    let hasNewUTMs = false;

    ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].forEach((utm) => {
      const value = urlParams.get(utm);
      if (value && utmParams[utm] !== value) {
        utmParams[utm] = value;
        hasNewUTMs = true;
      }
    });

    if (hasNewUTMs) {
      localStorage.setItem("utmParams", JSON.stringify(utmParams));
    }

    const updatedSearchParams = new URLSearchParams(location.search);

    let hasUpdated = false;
    Object.entries(utmParams).forEach(([key, value]) => {
      if (!updatedSearchParams.has(key) || updatedSearchParams.get(key) !== value) {
        updatedSearchParams.set(key, value);
        hasUpdated = true;
      }
    });

    if (hasUpdated) {
      navigate(`${location.pathname}?${updatedSearchParams.toString()}`, { replace: true });
    }
  }, [location.pathname, location.search]); 

  return <>{children}</>;
}

export default GetAndPreserveUTMs;
