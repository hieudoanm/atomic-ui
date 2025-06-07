import { FC } from 'react';

type HeroProps = { emoji: string; title: string; subtitle: string; description: string; features: string[] };

export const Hero: FC<HeroProps> = ({ emoji = '', title = '', subtitle = '', description = '', features = [] }) => {
  return (
    <section className="py-8 md:py-16">
      <div className="container mx-auto flex flex-col items-center justify-center gap-y-4 px-8">
        <div className="flex w-full max-w-lg flex-col gap-y-2 text-center md:gap-y-4">
          <header className="flex flex-col gap-y-1">
            <h1 className="text-4xl font-black whitespace-nowrap">
              {emoji} {title}
            </h1>
            <h5 className="text-base font-medium text-neutral-600 md:text-lg dark:text-neutral-400">{subtitle}</h5>
          </header>
          <p className="text-neutral-900 dark:text-neutral-100">{description}</p>
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
