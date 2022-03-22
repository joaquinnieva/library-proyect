import React from 'react';
import { useTranslation } from 'react-i18next';
import { TimelineIcon } from './Icon';

function InfoTimeline() {
  const [t, i18n] = useTranslation('global');
  return (
    <ol className="relative border-l border-neutral-300 dark:border-neutral-700">
      <li className="mb-10 ml-6">
        <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-neutral-200 rounded-full ring-8 ring-neutral-300 dark:ring-neutral-700 dark:bg-neutral-800">
          <TimelineIcon />
        </span>
        <h3 className="flex items-center mb-1 text-lg font-semibold text-neutral-900 dark:text-white">
          {t('INFO_TITLE_1')}
          <span className="bg-neutral-100 text-neutral-600 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-neutral-200 dark:text-neutral-800 ml-3">
            {t('INFO_LATEST')}
          </span>
        </h3>
        <time className="block mb-2 text-sm font-normal leading-none text-neutral-400 dark:text-neutral-500">
          {t('INFO_AGO_1')}
        </time>
        <p className="mb-4 text-base font-normal text-neutral-500 dark:text-neutral-400">{t('INFO_TEXT_2')}</p>
      </li>
      <li className="mb-10 ml-6">
        <span className="flex absolute dark:ring-neutral-700 dark:bg-neutral-800 -left-3 justify-center items-center w-6 h-6 bg-neutral-200 rounded-full ring-8 ring-neutral-300">
          <TimelineIcon />
        </span>
        <h3 className="mb-1 text-lg font-semibold text-neutral-900 dark:text-white">{t('INFO_TITLE_1')}</h3>
        <time className="block mb-2 text-sm font-normal leading-none text-neutral-400 dark:text-neutral-500">
          {t('INFO_AGO_1')}
        </time>
        <p className="text-base font-normal text-neutral-500 dark:text-neutral-400">{t('INFO_TEXT_1')}</p>
      </li>
    </ol>
  );
}

export default InfoTimeline;
