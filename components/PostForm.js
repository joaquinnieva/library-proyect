import { useSession } from 'next-auth/react';
import Router from 'next/router';
import React, { useState } from 'react';
import { postPosts } from '../utils/apiService';

function PostForm() {
  const { data: session } = useSession();
  const [form, setForm] = useState({
    description: '',
    file: '',
  });
  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }
  async function handleSubmit() {
    const post = await postPosts({ ...form, nameUser: session.user.name });
    if (post) {
      Router.push('/');
    }
  }
  return (
    <div className="editor rounded-lg mx-auto w-10/12 mt-4 flex flex-col gap-4 my-10 transition ease-in-out border  max-w-auto dark:border-2 border-neutral-800 dark:border-neutral-600  md:mx-auto md:max-w-2xl p-4 shadow-lg max-w-2xl">
      <textarea
        name="description"
        className="bg-neutral-300 dark:bg-neutral-600 sec p-3 border border-neutral-300 rounded-lg dark:border-neutral-600 text-neutral-800 dark:text-neutral-200"
        autoComplete="off"
        placeholder="Describe everything about this post here"
        onChange={(e) => handleChange(e)}
      ></textarea>
      <input
        name="file"
        className="bg-neutral-300 border text-neutral-800 dark:bg-neutral-600 border-neutral-300 rounded-lg p-2 dark:text-neutral-200 dark:border-neutral-600"
        autoComplete="off"
        placeholder="Link"
        type="text"
        onChange={(e) => handleChange(e)}
      />
      <div className="buttons flex gap-2">
        <button
          className="ml-auto p-1 px-4 font-normal text-white border rounded bg-neutral-800 focus:outline-none hover:bg-neutral-100 hover:text-neutral-800 hover:border-neutral-800 dark:bg-neutral-100 dark:text-neutral-800 dark:hover:bg-neutral-800 dark:hover:text-neutral-100 dark:hover:border-neutral-100"
          onClick={handleSubmit}
        >
          Post
        </button>
      </div>
    </div>
  );
}

export default PostForm;
