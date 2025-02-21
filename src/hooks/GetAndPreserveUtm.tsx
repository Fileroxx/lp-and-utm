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
    const storedUtm = localStorage.getItem("utmParams");
    const utmParams: Record<string, string> = storedUtm ? JSON.parse(storedUtm) : {};

    let hasNewUTMs = false;
    const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
    
    utmKeys.forEach((utm) => {
      const value = urlParams.get(utm);
      if (value && utmParams[utm] !== value) {
        utmParams[utm] = value;
        hasNewUTMs = true;
      }
    });

    if (hasNewUTMs) {
      localStorage.setItem("utmParams", JSON.stringify(utmParams));
    }

    const updatedParams = new URLSearchParams(location.search);
    let hasUpdates = false;

    utmKeys.forEach((utm) => {
      const storedValue = utmParams[utm];
      if (storedValue && !updatedParams.has(utm)) {
        updatedParams.set(utm, storedValue);
        hasUpdates = true;
      }
    });


    if (hasUpdates && location.search !== `?${updatedParams.toString()}`) {
      navigate(
        { pathname: location.pathname, search: updatedParams.toString() },
        { replace: true }
      );
    }
  }, [location, navigate]); 

  return <>{children}</>;
}

export default GetAndPreserveUTMs;