"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import css from "./Navigation.module.css";

type navLink = {
  label: string;
  href: string;
};

type Props = {
  navLinks: navLink[];
};

const Navigation = ({ navLinks }: Props) => {
  const pathname = usePathname();
  const session = useSession();

  console.log(session);

  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.label}
            href={link.href}
            className={
              isActive ? `${css.nav__link} ${css.active}` : css.nav__link
            }
          >
            {link.label}
          </Link>
        );
      })}
      {session?.data && (
        <Link
          href="/profile"
          className={
            pathname === "/profile"
              ? `${css.nav__link} ${css.active}`
              : css.nav__link
          }
        >
          Profile
        </Link>
      )}
      {session?.data ? (
        <Link href="" onClick={() => signOut({ callbackUrl: "/" })}>
          Sign out
        </Link>
      ) : (
        <Link href="/signin">Sign in</Link>
      )}
    </>
  );
};

export default Navigation;
