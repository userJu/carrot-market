import Link from "next/link";
import React from "react";

interface FloatingButton {
  children: React.ReactNode; // 여기서는 svg 경로를 받아온다
  // 안에 뭐가 들어있으면 그건 children요소고, React.ReactNode로 받아올 수 있다
  href: string;
}

export default function FloatingButton({ children, href }: FloatingButton) {
  return (
    <Link href={href}>
      <a className="fixed hover:bg-orange-500 border-0 aspect-square border-transparent transition-colors cursor-pointer  bottom-24 right-5 shadow-xl bg-orange-400 rounded-full w-14 flex items-center justify-center text-white">
        {children}
      </a>
    </Link>
  );
}
