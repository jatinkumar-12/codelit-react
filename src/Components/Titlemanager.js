import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function TitleManager() {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        document.title = "Codelit | Home";
        break;
      case "/work":
        document.title = "Codelit | Work";
        break;
      case "/contact":
        document.title = "Codelit | Contact";
        break;
      case "/codelit":
        document.title = "Codelit | Codelit";
        break;
      case "/work/projectcodelit":
        document.title = "Codelit | Project Codelit";
        break;
      case "/work/projectfeedbick":
        document.title = "Codelit | Work Codelit";
        break;
      default:
        document.title = "Codelit"; // fallback
    }
  }, [location]);

  return null; // This component doesn't render anything
}
