import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import librery from '../../public/favicon.png';

function Info() {
  const [t] = useTranslation('global');
  return (
    <section className="text-neutral-600 body-font">
      <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
        <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
          <h1 className="mb-4 text-3xl font-medium text-neutral-900 title-font sm:text-4xl dark:text-neutral-100">
            {t('INFO_TITLE1')}
            <br className="hidden lg:inline-block" />
            {t('INFO_TITLE2')}
          </h1>
          <p className="mb-8 leading-relaxed dark:text-neutral-400">{t('INFO_SUBTITLE')}</p>
          <div className="flex justify-center">
            <button className="inline-flex px-6 py-2 text-lg font-normal text-white transition ease-in-out border rounded bg-neutral-800 focus:outline-none hover:bg-neutral-100 hover:text-neutral-800 hover:border-neutral-800 dark:bg-neutral-100 dark:text-neutral-800 dark:hover:bg-neutral-800 dark:hover:text-neutral-100 dark:hover:border-neutral-100">
              {t('INFO_BUTTON_PRY')}
            </button>
            <button
              onClick={signIn}
              className="inline-flex px-6 py-2 ml-4 text-lg font-normal transition ease-in-out border rounded text-neutral-600 focus:outline-none hover:border-neutral-800 hover:text-neutral-800 border-b-neutral-800 dark:text-neutral-200 dark:border-neutral-800 dark:border-b-neutral-100 dark:hover:border-neutral-100 dark:hover:text-neutral-100"
            >
              {t('INFO_BUTTON_SEC')}
            </button>
          </div>
        </div>
        <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
          <Image className="object-cover object-center rounded" width={400} height={400} alt="hero" src={librery} />
        </div>
      </div>
    </section>
  );
}

export default Info;
