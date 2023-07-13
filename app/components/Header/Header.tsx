'use client';
import Link from 'next/link';
import { Container } from './Header.styled';

export default function Header() {
  return (
    <Container>
      <Link href="/">Home</Link>
      <Link href="/blog">BLOG</Link>
      <Link href="/about">About</Link>
    </Container>
  );
}
