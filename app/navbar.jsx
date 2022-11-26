"use client";

import Link from "next/link";

const links = [
  { href: "/about", text: "About" },
  { href: "/products", text: "Products" },
  { href: "/contact", text: "Contact" },
];

export const Navbar = () => {
  return (
    <div className="container mx-auto">
      <nav className="navbar bg-yellow-100 text-gray-800 mb-5">
        <ul className="flex justify-center py-5  rounded-sm">
          {links.map((l) => (
            <li className="pr-6" key={l.href}>
              <Link className="text-base" href={l.href}>
                {l.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
