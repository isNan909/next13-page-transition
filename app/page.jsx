"use client";

import { PageWrapper } from "./page-wrapper";
import { Navbar } from "./navbar";

export default function Page() {
  return (
		<Navbar />
    <PageWrapper>
      <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
    </PageWrapper>
  );
}
