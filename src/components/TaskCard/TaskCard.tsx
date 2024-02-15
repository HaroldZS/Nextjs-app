"use client";

interface Task {
  id: number;
  title: string;
  description?: string | null;
  status: string;
  createdAt: Date;
}

function TaskCard({ title, description, status, createdAt }: Task) {
  return (
    <div className="card w-96 bg-base-300 shadow-xl hover:bg-secondary-content hover:cursor-pointer">
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
