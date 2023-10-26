import Link from "next/link";

export default function ProfileLink() {
  return (
    <Link className="hover:text-[#FF400]" href={`/yourProfile`}>
      Your Profile
    </Link>
  );
}
