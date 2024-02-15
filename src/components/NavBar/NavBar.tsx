import Link from "next/link";

function NavBar() {
  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          TaskApp
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/new">New Task</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export { NavBar };
