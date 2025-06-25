import Image from 'next/image';
import { NavLink } from './NavLink';
import Link from 'next/link';

export function Navbar() {
  return (
    <header className="fixed top-0 mb-8 w-full border-b border-gray-200 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center py-4 md:justify-start md:gap-8">
          <Link href="/">
            <Image
              src={'/switchback-text.svg'}
              alt="switchback logo"
              width={230}
              height={40}
            />
          </Link>

          <nav className="hidden items-center space-x-8 md:flex">
            <NavLink href="/races">Races</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
