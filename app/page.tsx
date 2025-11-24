"use client";

import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
      <h2>Hola</h2>
    </div>
  );
}
