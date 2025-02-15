"use client";

import Image from "next/image";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";

export default function Home() {
  const tasks = useQuery(api.tasks.getAllTasks);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {tasks?.map(({ _id, text, isCompleted }) => (
        <div key={_id}>
          {text} = {isCompleted ? "true" : "false"}
        </div>
      ))}
    </main>
  );
}
