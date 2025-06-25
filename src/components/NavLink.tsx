'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactElement } from 'react';

interface INavLinkProps {
  href: string;
  children: ReactElement | string;
  className?: string;
}

export function NavLink({ href, children, className }: INavLinkProps) {
  const pathname = usePathname();
  const isActive =
    pathname.endsWith(href) || (href.includes(pathname) && pathname !== '/');

  const linkDecoration = isActive
    ? 'decoration-green-400'
    : 'decoration-transparent';

  return (
    <Link
      href={href}
      className={`text-gray-700 underline decoration-2 transition-colors hover:decoration-green-400 ${className} ${linkDecoration} `}>
      {children}
    </Link>
  );
}
