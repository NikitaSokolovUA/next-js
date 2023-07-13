import { Metadata } from 'next';
import Link from 'next/link';

async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60, // кешування, на сервері буде запит раз в хвилину для всіх користувачів
    },
  });

  return response.json();
}

export const metadata: Metadata = {
  title: 'Blog | next-app',
};

export default async function Blog() {
  const posts = await getData();

  return (
    <>
      <h2>Blog</h2>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
