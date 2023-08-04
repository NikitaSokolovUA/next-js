"use client";
// import { getServerSession } from "next-auth/next";
// import { authConfig } from "../configs/auth";
import { useSession } from "next-auth/react";

export default function Profile() {
  const session = useSession();
  //   return <pre>{JSON.stringify(session, null, 2)}</pre>;

  return (
    <div>
      <h2>Profile of: {session?.data?.user?.name}</h2>
      {session?.data?.user?.image && (
        <img src={session.data.user.image} alt="" />
      )}
    </div>
  );
}
