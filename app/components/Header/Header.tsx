"use client";

import { Container } from "./Header.styled";
import Navigation from "../Navigation/Navigation";

const navigation = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/blog",
    label: "Blog",
  },
  {
    href: "/about",
    label: "About",
  },
];

export default function Header() {
  return (
    <Container>
      <Navigation navLinks={navigation} />
    </Container>
  );
}
