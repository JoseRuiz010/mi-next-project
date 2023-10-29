import React from "react";
import { useRouter, useParams } from "next/navigation";

const Users = () => {
  const router = useRouter();
  const params = useParams();
  console.log({ router, params });
  return <div>Users</div>;
};

export default Users;
