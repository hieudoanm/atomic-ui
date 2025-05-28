import createDOMPurify from 'dompurify';
import { FC, useEffect, useState } from 'react';
import { Code } from './Code';

export const Preview: FC<{
  id: string;
  emoji: string;
  group: string;
  name: string;
  code: string;
}> = ({ id = '', emoji = '', group = '', name = '', code = '' }) => {
  const [html, setHtml] = useState('');
  const [preview, setPreview] = useState<boolean>(true);

  useEffect(() => {
    const DOMPurify = createDOMPurify(window);
    setHtml(DOMPurify.sanitize(code));
  }, [code]);

  return (
    <div id={id} className="flex flex-col gap-y-4 md:gap-y-8">
      <div className="flex items-center justify-between gap-x-2">
        <div className="flex items-center gap-x-2">
          <span className="text-4xl">{emoji}</span>
          <div>
            <p className="text-xs capitalize">{group}</p>
            <h3 className="w-60 truncate text-xl font-bold whitespace-nowrap md:text-2xl">
              {name}
            </h3>
          </div>
        </div>

        <button
          type="button"
          className="cursor-pointer rounded-lg border border-purple-800 bg-purple-600 px-4 py-2 text-white shadow dark:border-purple-900 dark:bg-purple-700 dark:shadow-neutral-100/10"
          onClick={() => setPreview((previous: boolean) => !previous)}>
          {preview ? 'Preview' : 'Code'}
        </button>
      </div>
      <div className="flex items-center justify-center overflow-hidden rounded-lg border border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10">
        {preview ? (
          <div
            className="w-full p-4 md:p-8"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        ) : (
          <Code code={code} lang="html" />
        )}
      </div>
    </div>
  );
};
