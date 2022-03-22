import type { NextPage } from "next";
// Next.js에서는 type을 이런 식으로 가져온다 import type

const Home: NextPage = () => {
  return (
    <div className="bg-red-500">
      <h1 className="text-black">it works</h1>
    </div>
  );
};

export default Home;
