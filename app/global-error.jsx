"use client";

import { useEffect } from "react";
import ErrorStyle from "../components/ui/errorStyle";

export default function GlobalError({ error, reset }) {
  useEffect(() => console.log(error), []);
  return (
    <html>
      <body>
        <ErrorStyle reset={() => reset()} />
      </body>
    </html>
  );
}
