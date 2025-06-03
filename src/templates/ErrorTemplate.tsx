import Link from 'next/link';
import { FC } from 'react';

export const ErrorTemplate: FC<{ code: string; title: string; message: string; action: string }> = ({
  code = '',
  title = '',
  message = '',
  action = '',
}) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold">{code}</h1>
        <p className="mt-4 text-2xl font-semibold">{title}</p>
        <p className="mt-2">{message}</p>
        <Link
          href="/"
          className="mt-6 inline-block cursor-pointer rounded-md border border-purple-600 bg-purple-600 px-4 py-2 text-white shadow transition duration-200 hover:bg-purple-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-purple-700 dark:shadow-neutral-100/10 dark:hover:bg-purple-600">
          {action}
        </Link>
      </div>
    </div>
  );
};
