export default function getUrl() {
  return process.env.NODE_ENV === "production"
    ? `${process.env.PRODUCTION_URL}`
    : `${process.env.NEXT_PUBLIC_BASE_URL}`;
}
