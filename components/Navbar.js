import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuIcon, MoonIcon, SunIcon, TranslateIcon, XIcon } from '@heroicons/react/outline';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Example() {
  const [session, setSession] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const [t, i18n] = useTranslation('global');

  const renderTheneChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;
    if (currentTheme === 'dark') {
      return (
        <button
          onClick={() => setTheme('light')}
          className="flex items-center gap-1 px-4 py-2 text-sm font-normal text-neutral-500 dark:text-neutral-400 dark:hover:text-neutral-100 hover:text-neutral-800"
        >
          {t('NAV_THEME')}
          <SunIcon className="w-5 h-5" />
        </button>
      );
    } else {
      return (
        <button
          onClick={() => setTheme('dark')}
          className="flex items-center gap-1 px-4 py-2 text-sm font-normal text-neutral-500 dark:text-neutral-400 dark:hover:text-neutral-100 hover:text-neutral-800"
        >
          {t('NAV_THEME')}
          <MoonIcon className="w-5 h-5" />
        </button>
      );
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <Disclosure as="nav" className="transition ease-in-out bg-neutral-100 dark:bg-neutral-800">
      {({ open }) => (
        <>
          <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  {open ? (
                    <XIcon className="block w-6 h-6 transition ease-in delay-100" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block w-6 h-6 transition ease-in delay-100" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
                <div className="hidden space-x-4 sm:flex">
                  <Link href="/">
                    <a className="px-3 py-2 font-normal transition delay-75 dark:text-neutral-400 text-neutral-500 text-md hover:text-neutral-800 ease dark:hover:text-neutral-100">
                      {t('NAV_LINK_HOME')}
                    </a>
                  </Link>
                  <Link href="/info">
                    <a className="px-3 py-2 font-normal transition delay-75 dark:text-neutral-400 text-neutral-500 text-md hover:text-neutral-800 ease dark:hover:text-neutral-100">
                      {t('NAV_LINK_INFO')}
                    </a>
                  </Link>

                  {renderTheneChanger()}

                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="flex items-center gap-1 px-4 py-2 text-sm font-normal text-neutral-500 dark:text-neutral-400 dark:hover:text-neutral-100 hover:text-neutral-800">
                        {t('NAV_TRANSLATE')}
                        <TranslateIcon className="w-5 h-5"></TranslateIcon>
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute left-0 z-10 flex flex-col w-32 py-1 mt-2 origin-top-left bg-white border rounded-md border-neutral-400 ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-neutral-800 dark:text-neutral-200 dark:border-neutral-600">
                        <div className="flex flex-col py-1">
                          <button
                            className="transition delay-75 dark:text-neutral-400 text-neutral-500 text-md hover:text-neutral-800 ease dark:hover:text-neutral-100"
                            onClick={() => i18n.changeLanguage('es')}
                          >
                            {t('NAV_SPANISH')}
                          </button>
                          <button
                            className="transition delay-75 dark:text-neutral-400 text-neutral-500 text-md hover:text-neutral-800 ease dark:hover:text-neutral-100"
                            onClick={() => i18n.changeLanguage('en')}
                          >
                            {t('NAV_ENGLISH')}
                          </button>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {session ? (
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex text-sm rounded-full bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-800 focus:ring-white">
                        <div className="w-8 h-8 overflow-hidden rounded-full">
                          <Image
                            className="relative w-8 h-8 overflow-hidden rounded-full"
                            width={32}
                            height={32}
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </div>
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 flex flex-col w-48 py-1 mt-2 origin-top-right bg-white border rounded-md border-neutral-400 ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-neutral-800 dark:text-neutral-200 dark:border-neutral-600">
                        <Menu.Item>
                          <a href="#" className="block px-4 py-2 text-sm text-neutral-700 dark:text-neutral-200">
                            Your Profile
                          </a>
                        </Menu.Item>

                        <Menu.Item>
                          <a href="#" className="block px-4 py-2 text-sm text-neutral-700 dark:text-neutral-200">
                            Sign out
                          </a>
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                ) : (
                  <div>
                    <Link href="/login">
                      <a className="px-6 py-2 mr-4 font-normal transition ease-in-out border rounded text-neutral-600 focus:outline-none hover:border-neutral-800 hover:text-neutral-800 border-b-neutral-800 dark:text-neutral-200 dark:border-neutral-800 dark:border-b-neutral-100 dark:hover:border-neutral-100 dark:hover:text-neutral-100 whitespace-nowrap">
                        {t('NAV_BUTTON_LOGIN')}
                      </a>
                    </Link>
                    <Link href="/register">
                      <a className="hidden px-6 py-2 font-normal text-white transition delay-75 border rounded sm:inline bg-neutral-800 focus:outline-none hover:bg-neutral-100 hover:text-neutral-800 hover:border-neutral-800 dark:bg-neutral-100 dark:text-neutral-800 dark:hover:bg-neutral-800 dark:hover:text-neutral-100 dark:hover:border-neutral-100">
                        {t('NAV_BUTTON_REGISTER')}
                      </a>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Disclosure.Button
                as="a"
                href="/"
                className="block px-3 py-2 text-base font-normal text-center border-2 rounded-md text-neutral-700 border-neutral-300 dark:border-neutral-700 dark:text-neutral-100"
              >
                {t('NAV_LINK_HOME')}
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/info"
                className="block px-3 py-2 text-base font-normal text-center border-2 rounded-md text-neutral-700 border-neutral-300 dark:border-neutral-700 dark:text-neutral-100"
              >
                {t('NAV_LINK_INFO')}
              </Disclosure.Button>

              <div className="flex justify-around border-2 rounded-md border-neutral-300 dark:border-neutral-700 ">
                {renderTheneChanger()}
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="flex items-center gap-1 px-4 py-2 text-sm font-normal text-neutral-500 dark:text-neutral-400 dark:hover:text-neutral-100 hover:text-neutral-800">
                      {t('NAV_TRANSLATE')}
                      <TranslateIcon className="w-5 h-5"></TranslateIcon>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute left-0 z-10 flex flex-col w-32 py-1 mt-2 origin-top-left bg-white border rounded-md border-neutral-400 ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-neutral-800 dark:text-neutral-200 dark:border-neutral-600">
                      <div className="flex flex-col py-1">
                        <button
                          className="transition delay-75 dark:text-neutral-400 text-neutral-500 text-md hover:text-neutral-800 ease dark:hover:text-neutral-100"
                          onClick={() => i18n.changeLanguage('es')}
                        >
                          {t('NAV_SPANISH')}
                        </button>
                        <button
                          className="transition delay-75 dark:text-neutral-400 text-neutral-500 text-md hover:text-neutral-800 ease dark:hover:text-neutral-100"
                          onClick={() => i18n.changeLanguage('en')}
                        >
                          {t('NAV_ENGLISH')}
                        </button>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
