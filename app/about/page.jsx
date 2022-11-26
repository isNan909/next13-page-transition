"use client";

import { Navbar } from "./../navbar";
import { PageWrapper } from "./../page-wrapper";

export default function Aboutpage() {
  return (
    <div className="container mx-auto">
      <h1>
        <Navbar />
        <PageWrapper>About page</PageWrapper>
      </h1>
    </div>
  );
}
