"use client";

import { useEffect } from "react";
import ErrorStyle from "../components/ui/errorStyle";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <ErrorStyle reset={() => reset()} />;
}
