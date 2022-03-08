import { EyeIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { LOGIN_BUTON, LOGIN_LINK, LOGIN_QUESTION, LOGIN_SUBTITLE, LOGIN_TITLE } from '../../utils/constants';

function Login() {
  return (
    <>
      <header>
        <a className="absolute z-10 mt-9 md:ml-12 ml-9" href="/registe"></a>
      </header>
      <div className="relative flex flex-col items-center justify-center h-screen space-y-10">
        <div className="w-auto p-6 rounded shadow-none md:shadow-lg sm:w-96">
          <h1 className="text-3xl font-bold leading-normal">{LOGIN_TITLE}</h1>
          <p className="text-sm leading-normal">{LOGIN_SUBTITLE}</p>
          <form className="mt-5 space-y-5">
            <div className="relative mb-4">
              <input
                id="email"
                className="w-full px-3 py-2 border border-gray-500 rounded focus:outline-none input active:outline-none"
                type="text"
                placeholder="Email"
                autoFocus
              />
            </div>
            <div className="relative flex items-center border border-gray-500 rounded focus:ring focus:border-neutral-500">
              <input
                id="password"
                className="w-full px-3 py-2 rounded outline-none focus:outline-none active:outline-none input active:border-neutral-500"
                type="password"
                placeholder="Password"
              />

              <a className="absolute right-0 px-2 py-1 mr-1 text-sm font-bold leading-normal rounded-full cursor-pointer text-neutral-700 ">
                <EyeIcon className="w-7 h-7 dark:text-white" role="button" />
              </a>
            </div>

            <button className="w-full py-3 font-medium text-center text-white transition ease-in-out border rounded bg-neutral-800 hover:bg-neutral-100 hover:text-neutral-800 hover:border-neutral-800">
              {LOGIN_BUTON}
            </button>
          </form>
        </div>
        <p>
          {LOGIN_QUESTION}
          <Link href="/register">
            <a
              className="p-2 font-bold rounded-full text-neutral-700 hover:underline dark:text-neutral-300 dark:hover:text-neutral-100"
              href="#"
            >
              {LOGIN_LINK}
            </a>
          </Link>
        </p>
      </div>
    </>
  );
}

export default Login;
