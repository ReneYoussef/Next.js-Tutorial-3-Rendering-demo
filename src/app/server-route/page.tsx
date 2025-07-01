

import { ServerSideFunction } from "@/utils/server-utils";
import React from "react";
import { ImageSlider } from "@/components/imageSlider";

export default function ServerRoutePage() {
  const result = ServerSideFunction();

  return (
    <>
      <h1>Server Route {result}</h1>
      <ImageSlider />
    </>
  );

  // server component with one element behaving  as a client component
}
