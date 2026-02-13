import Link from "next/link";

export default function Home() {
  return (
      <>
      <p className="">CPRG 306: Web Development 2 - Assignments</p>
      <Link href="week-2" className="mr-5">Go to week-2</Link>
      <Link href="week-3" className="mr-5">Go to week-3</Link>
      <Link href="week-4" className="mr-5">Go to week-4</Link>
      <Link href="week-5">Go to week-5</Link>
      </>
  );
}
