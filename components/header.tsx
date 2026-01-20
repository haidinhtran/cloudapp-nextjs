import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between gap-6 bg-white dark:bg-gray-900 p-4 border-b border-gray-200">
      <h1 className="text-xl text-red-500 font-bold">Cloud App</h1>
      <ul className="flex flex-row gap-6">
        <li className="">
          <Link className="text-gray-500 hover:text-blue-900 dark:hover:text-blue-300" href="/">
            Home
          </Link>
        </li>
        <li className="">
          <Link
            className="text-gray-500 hover:text-blue-900 dark:hover:text-blue-300"
            href="/performance"
          >
            Performance
          </Link>
        </li>
        <li className="">
          <Link
            className="text-gray-500 hover:text-blue-900 dark:hover:text-blue-300"
            href="/reliability"
          >
            Reliability
          </Link>
        </li>
        <li className="">
          <Link
            className="text-gray-500 hover:text-blue-900 dark:hover:text-blue-300"
            href="/scale"
          >
            Scale
          </Link>
        </li>
      </ul>
    </header>
  );
}
