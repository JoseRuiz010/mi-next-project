"use client";
import { useRouter } from "next/navigation";
import React from "react";

const UserPage = ({ params }) => {
  console.log(params);
  const router = useRouter();

  return (
    <div>
      User
      <div>
        <button
          onClick={() => {
            console.log("WoW!!");
          }}
        >
          Click!!
        </button>
      </div>
    </div>
  );
};

export default UserPage;
