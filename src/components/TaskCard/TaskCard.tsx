"use client";

import { useRouter } from "next/navigation";

interface Task {
  id: number;
  title: string;
  description?: string | null;
  status: string;
  createdAt: Date;
}

function TaskCard({ id, title, description, status, createdAt }: Task) {
  const router = useRouter();

  return (
    <div
      className="card w-96 bg-base-300 shadow-xl hover:bg-secondary-content hover:cursor-pointer justify-self-center"
      onClick={() => router.push(`/tasks/edit/${id}`)}
    >
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">{status}</div>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">
            {new Date(createdAt).toLocaleDateString()}
          </div>
        </div>
      </div>
    </div>
  );
}

export { TaskCard };
