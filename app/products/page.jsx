"use client";

import { Navbar } from "./../navbar";
import { PageWrapper } from "./../page-wrapper";

export default function Productpage() {
  return (
    <div className="container mx-auto">
      <h1>
        <Navbar />
        <PageWrapper>Product page</PageWrapper>
      </h1>
    </div>
  );
}
