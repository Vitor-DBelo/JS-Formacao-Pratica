import Link from "next/link"

export default function Header() {
    return (
      <header className="p-4">
        <nav className="flex justify-end gap-6 text-lg list-none">
            <li>
                <Link href={"/"}>
                    home
                </Link>
            </li>
            <li>
                <Link href={"/contatos"}>
                    contatos
                </Link>
            </li>
            <li>
                <Link href={"/blog"}>
                    blog
                </Link>
            </li>
        </nav>
      </header>
    );
  }
  