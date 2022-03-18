import { LinkPreview } from '@dhaiwat10/react-link-preview';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { getUser } from '../utils/apiService';

function Post({ data }) {
  const [user, setUser] = useState('');
  const nameUser = data.nameUser;
  async function getDataUser(name) {
    setUser(await getUser(name));
  }
  useEffect(() => {
    getDataUser(nameUser);
  }, [nameUser]);
  return (
    <div className="mx-4 my-10 transition ease-in-out border border-white rounded-lg max-w-auto dark:border-2 border-b-neutral-800 dark:border-b-neutral-600 dark:border-neutral-800 md:mx-auto md:max-w-2xl">
      <div className="flex px-4 py-6 w-100">
        <div className="object-cover w-12 h-12 mr-4 rounded-full shadow">
          <Link href={'/profile/' + user?.name}>
            <a>
              <Image
                className="object-cover w-12 h-12 mr-4 rounded-full shadow"
                src={
                  user?.image
                    ? user.image
                    : 'https://as1.ftcdn.net/v2/jpg/02/59/39/46/1000_F_259394679_GGA8JJAEkukYJL9XXFH2JoC3nMguBPNH.jpg'
                }
                alt="avatar"
                width={48}
                height={48}
              />
            </a>
          </Link>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between">
            <Link href={'/profile/' + user?.name}>
              <a className="-mt-1 text-lg font-semibold text-gray-900 dark:text-neutral-100">{user?.name}</a>
            </Link>
            <small className="text-sm text-gray-700 dark:text-neutral-200">22h ago</small>
          </div>
          <p className="my-2 text-gray-700 text-md dark:text-neutral-400">{data.description}</p>
          <LinkPreview
            url={data.file}
            imageHeight="20vh"
            backgroundColor="#a3a3a3"
            borderColor="#a3a3a3"
            width="100%"
          />
          <div className="flex items-center mt-4">
            <div className="flex mr-3 text-sm text-gray-700 dark:text-neutral-400">
              <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-1" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span>12</span>
            </div>
            <div className="flex mr-8 text-sm text-gray-700 dark:text-neutral-400">
              <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-1" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                />
              </svg>
              <span>8</span>
            </div>
            <div className="flex mr-4 text-sm text-gray-700 dark:text-neutral-400">
              <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-1" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>
              <span>share</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
