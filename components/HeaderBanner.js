import { InformationCircleIcon } from '@heroicons/react/outline';
import { useTranslation } from 'react-i18next';

function HeaderBanner() {
  const [t, i18n] = useTranslation('global');
  return (
    <div className="w-100 py-3">
      <div className="flex items-center justify-center">
        <div className="flex items-center">
          <span className="flex p-2 rounded-lg bg-neutral-700">
            <InformationCircleIcon className="h-6 w-6 text-white" />
          </span>
          <p className="ml-3 font-medium text-neutral-500">{t('BANNER_MSG')}</p>
        </div>
      </div>
    </div>
  );
}
export default HeaderBanner;
