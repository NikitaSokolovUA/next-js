import { Metadata } from 'next';
import css from './page.module.css';

type Props = {
  params: {
    id: string;
  };
};

async function getData(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 60, // кешування, на сервері буде запит раз в хвилину для всіх користувачів
      },
    }
  );

  return response.json();
}

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const post = await getData(id);
  return { title: post.title };
}

export default async function Post({ params: { id } }: Props) {
  const data = await getData(id);

  return (
    <>
      <h3 className={css.title}>{data.title}</h3>
      <p className={css.text}>{data.body}</p>
    </>
  );
}
