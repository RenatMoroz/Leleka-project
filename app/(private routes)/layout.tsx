"use client";

import { ReactNode } from "react";
import Providers from "@/lib/providers";
import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
import { usePathname } from "next/navigation";
import css from "../layout.module.css";

type Props = {
  children: ReactNode;
};

const guestRoutes = ["/login", "/register"];

export default function Layout({ children }: Props) {
  const pathname = usePathname();

  const content = guestRoutes.includes(pathname) ? (
    children
  ) : (
    <AuthProvider>{children}</AuthProvider>
  );

  return (
    <Providers>
      <Sidebar />
      <div className={css.main_container}>
        <Header />
        <main className="container">{content}</main>
      </div>
    </Providers>
  );
}
