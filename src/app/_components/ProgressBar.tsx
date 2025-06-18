// src/components/ProgressBar.tsx
"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";


NProgress.configure({ showSpinner: false });

export default function ProgressBar() {
  const pathname = usePathname();
  const previousPath = useRef<string>("");

  useEffect(() => {
    if (previousPath.current && previousPath.current !== pathname) {
      NProgress.start();
      const timer = setTimeout(() => NProgress.done(), 500);
      return () => clearTimeout(timer);
    }
    previousPath.current = pathname;
  }, [pathname]);

  return null;
}
