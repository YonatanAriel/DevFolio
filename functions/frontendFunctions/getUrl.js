const Environment = {
  CLIENT: typeof window !== "undefined",
  PRODUCTION: process.env.NODE_ENV === "production",
  DEVELOPMENT: process.env.NODE_ENV !== "production",
};

const Urls = {
  DEVELOPMENT: process.env.NEXT_PUBLIC_BASE_URL,
  FALLBACK_DEVELOPMENT: "http://localhost:3000",
  AUTO_VERCEL_PRODUCTION: process.env.VERCEL_URL,
  PRODUCTION: process.env.PRODUCTION_URL,
};

export default function getUrl() {
  if (Environment.CLIENT) return "";

  if (Environment.DEVELOPMENT) {
    return Urls.DEVELOPMENT ?? Urls.FALLBACK_DEVELOPMENT;
  }

  if (Urls.AUTO_VERCEL_PRODUCTION) {
    return `https://${Urls.AUTO_VERCEL_PRODUCTION}`;
  }

  return Urls.PRODUCTION ?? "";
}

// export default function getUrl() {
//   // For browser/client-side requests - use just the relative URL
//   if (typeof window !== "undefined") {
//     return "";
//   }

//   if (process.env.NODE_ENV === "production") {
//     if (process.env.VERCEL_URL) {
//       return `https://${process.env.VERCEL_URL}`;
//     }
//     if (process.env.PRODUCTION_URL) {
//       return process.env.PRODUCTION_URL;
//     }
//   }

//   // For server-side requests in development
//   return process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
// }
