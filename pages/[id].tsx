import { useRouter } from "next/router";
import React from "react";

const Id = () => {
  const router = useRouter();
  const { id } = router.query;

  return <p>Post: {id}</p>;
};

export default Id;
