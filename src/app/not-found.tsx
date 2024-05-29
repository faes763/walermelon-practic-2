import Link from "next/link";

export default function NotFound() {
  return (
    <Link
      className=" inset-0 fixed bg-black text-white flex items-center justify-center"
      href={"/"}
    >
      <span>page not found</span>
      <br />
      <span>Return</span>
    </Link>
  );
}
