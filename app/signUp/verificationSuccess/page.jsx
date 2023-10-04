import Link from "next/link";

export default function VerificationSuccess() {
  return (
    <div className="w-5/6 lg:w-96 mx-auto py-20">
      <h1 className="font-bold text-3xl mb-6">Email Verified</h1>
      <p className="text-lg mb-5">
        Your email has been successfully verified!
        <br /> You can now sign in and start using DevFolio.
      </p>
      <div className="flex gap-[3px] font-semibold text-xl">
        <span>Go to</span>
        <Link className="text-[#FF4E00] font-bold" href={`/signIn`}>
          Sign In
        </Link>
      </div>
    </div>
  );
}
``;
