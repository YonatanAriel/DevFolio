// export default function getUrl() {
//   return process.env.NODE_ENV === "production"
//     ? `${process.env.PRODUCTION_URL}`
//     : `${process.env.NEXT_PUBLIC_BASE_URL}`;
// }

export default function getUrl() {
  // For browser/client-side requests - relative URLs
  if (typeof window !== "undefined") {
    return "";
  }

  if (process.env.NODE_ENV === "production") {
    if (process.env.VERCEL_URL) {
      return `https://${process.env.VERCEL_URL}`;
    }
    if (process.env.PRODUCTION_URL) {
      return process.env.PRODUCTION_URL;
    }
  }

  // For server-side requests in development
  return process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
}
