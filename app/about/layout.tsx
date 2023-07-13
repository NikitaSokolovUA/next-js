import Link from 'next/link';

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2>About US</h2>
      <ul>
        <li>
          <Link href="/about/contacts">CONTACTS</Link>
        </li>
        <li>
          <Link href="/about/team">TEAM</Link>
        </li>
      </ul>
      {children}
    </div>
  );
}
