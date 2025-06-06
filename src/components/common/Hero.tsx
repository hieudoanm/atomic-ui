import { FC } from 'react';

type HeroProps = { title: string; subtitle: string; description: string; features: string[] };

export const Hero: FC<HeroProps> = ({ title = '', subtitle = '', description = '', features = [] }) => {
  return (
    <section className="py-8 md:py-16">
      <div className="container mx-auto flex flex-col items-center justify-center gap-y-4 px-8">
        <div className="flex w-full max-w-lg flex-col gap-y-4 text-center md:gap-y-8">
          <header className="flex flex-col gap-y-1">
            <h1 className="text-4xl font-black whitespace-nowrap">⚛️ {title}</h1>
            <h5 className="text-base font-medium text-neutral-700 md:text-lg dark:text-neutral-300">{subtitle}</h5>
          </header>
          <p className="text-neutral-900 dark:text-neutral-100">
            <code className="mr-1 rounded bg-neutral-900 px-1 py-0.5 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900">
              {title}
            </code>
            <span>{description}</span>
          </p>
          {features.length > 0 && (
            <div className="flex flex-col justify-center gap-x-6 text-sm font-black text-neutral-900 md:flex-row dark:text-neutral-100">
              {features.map((feature: string) => {
                return (
                  <p key={feature} className="whitespace-nowrap">
                    🔮 {feature}
                  </p>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
