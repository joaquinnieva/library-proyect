import Image from 'next/image';
import React from 'react';
import { getUser } from '../../utils/apiService';

function Username({ data }) {
  console.log(data);
  return (
    <div className="flex w-full mx-auto space-x-2 overflow-hidden">
      <div className="relative flex flex-col items-center w-full">
        <div className="relative flex items-end justify-end w-auto h-auto rounded-full text-neutral-100 bg-neutral-200 avatar min-w-max text-neutral-650 ring-1 ring-white">
          <Image className="rounded-full" src={data.image} alt="" width="100%" height={96} />
        </div>
        <div className="flex flex-col items-center justify-center w-full mt-4 space-y-1">
          <span className="font-semibold text-neutral-800 text-md whitespace-nowrap dark:text-neutral-200">
            {data.name}
          </span>
        </div>
      </div>
    </div>
  );
}
export async function getServerSideProps(context) {
  const username = context.query.username;
  const data = await getUser(username);
  return {
    props: { data },
  };
}
export default Username;
