"use client";

import { PageWrapper } from "./page-wrapper";
import { Navbar } from "./navbar";

export default function Page() {
  return (
    <>
      <Navbar />
      <PageWrapper>
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mx-auto text-center">Next.js with Framer-motion</h1>
        </div>
      </PageWrapper>
    </>
  );
}
