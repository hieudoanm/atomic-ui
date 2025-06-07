import createDOMPurify from 'dompurify';
import { FC, useEffect, useState } from 'react';

export const FullScreen: FC<{ name: string; code: string; onClose: () => void }> = ({
  name = '',
  code = '',
  onClose = () => {},
}) => {
  const [html, setHtml] = useState('');

  useEffect(() => {
    const DOMPurify = createDOMPurify(window);
    setHtml(DOMPurify.sanitize(code));
  }, [code]);

  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 z-50 flex h-screen w-screen flex-col bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-8 py-4">
        <div className="flex w-full items-center justify-between">
          <p className="capitalize">{name}</p>
          <button type="button" className="cursor-pointer" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
      <div className="grow overflow-y-auto">
        <div className="h-full w-full" dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
    </div>
  );
};
