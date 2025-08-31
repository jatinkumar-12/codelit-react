import { useLayoutEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";

export default function ScrollResetLayout() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Reset before browser paints → no visible scrolling
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return <Outlet />;
}
