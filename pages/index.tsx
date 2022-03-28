import type { NextPage } from "next";
// Next.js에서는 type을 이런 식으로 가져온다 import type
// https://www.npmjs.com/package/tailwind-styled-components
// tailwind를 styled component처럼 쓸 수 있게 한다

const Home: NextPage = () => {
  return (
    <div className="bg-state-400 py-20 px-20 grid gap-10 min-h-screen">
      <div className="bg-white p-6 rounded-3xl shadow-xl"></div>
      <div className="bg-white overflow-hidden rounded-3xl"></div>
      <div className="bg-white p-6 rounded-3xl shadow-xl group">
        <div className="flex mb-5 justify-between items-center">
          <span>⬅</span>
          <div className="space-x-3">
            <span>⭐4.9</span>
            <span className="shadow-xl p-2 rounded-md">💖</span>
          </div>
        </div>
        <div className="bg-zinc-400 h-72 mb-5 group-hover:bg-red-300 transition-colors" />
        <div className="flex flex-col">
          <span className="font-medium text-xl">Swoon Lounge</span>
          <span className="text-xs text-gray-500 ">Chair</span>
          <div className="mt-3 mb-5 flex justify-between items-center">
            <div className="space-x-2">
              <button className="w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-500 transition"></button>
              <button className="w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-2 ring-indigo-500 transition"></button>
              <button className="w-5 h-5 rounded-full bg-teal-500 focus:ring-2 ring-offset-2 ring-teal-500 transition"></button>
            </div>
            <div className="flex items-center space-x-5">
              <button className=" rounded-lg bg-blue-200 justify-center items-center aspect-square w-8 text-xl text-gray-500">
                -
              </button>
              <span>1</span>
              <button className=" rounded-lg bg-blue-200 justify-center items-center aspect-square w-8 text-xl text-gray-500">
                +
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium text-2xl">$450</span>
          <button className="w-5 h-5 rounded-full bg-yellow-500"></button>
          <button className="bg-blue-500 py-2 px-8 text-center text-sm text-white rounded-lg hover:bg-teal-500 hover:text-black active:bg-yellow-500 focus:text-red-500">
            Add to cart
          </button>
        </div>
      </div>

      <ul>
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="flex justify-between my-2 odd:bg-blue-50 even:bg-pink-50"
          >
            <span>스판</span>
            <span>스판</span>
          </div>
        ))}
      </ul>
      {/* 첫째만 바꾸고 싶고 그러면  */}
      <form action="" className="flex flex-col space-y-2 ">
        <input
          type="text"
          required
          // disabled
          placeholder="Username"
          // className="required:border-2 border-yellow-500"
          // className="invalid: bg-red-500"
          // className="placeholder-shown:bg-teal-500"
          // className="disabled:opacity-0"
          className="border p-1 peer border-gray-400 rounded-lg "
        />
        <span className=" hidden peer-valid:block peer-valid: text-teal-500">
          Awesome username
        </span>
        <input type="submit" value="Login" className="bg-white" />
      </form>
      <div className="flex flex-col space-y-2 p-5">
        {/* selection */}
        {/* <details className="select-none open:text-white open:bg-indigo-300">
          <summary className="select-none cursor-pointer">
            What is my fav food.
          </summary>
          <span className="selection:bg-indigo-500">김치</span>
        </details> */}
        {/* ul / li  */}
        {/* <ul className="list-decimal marker:text-teal-500">
          <li>hi</li>
          <li>hi</li>
          <li>hi</li>
        </ul> */}
        {/* input */}
        {/* <input
          type="file"
          className="file:cursor-pointer file:hover:text-purple-400 file:hover:bg-white file:hover:border  transition-colors file:border-0 file:rounded-xl file:px-5 file: text-white file:bg-purple-400"
        /> */}
        <p className="first-letter:text-3xl first-letter:hover:text-purple-200 dark:bg-black dark:text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum fuga est
          quasi perspiciatis? Dolorum voluptatibus eius est aspernatur
          blanditiis error hic tempora autem amet. Deserunt quos illum qui
          itaque nemo.
        </p>
      </div>
    </div>
  );
};

export default Home;
