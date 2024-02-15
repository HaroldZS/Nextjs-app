"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function TaskForm({ paramId }: { paramId: number }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (paramId) {
      fetch(`/api/tasks/${paramId}`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title);
          setDescription(data.description);
        });
    }
  }, []);

  const onSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    if (paramId) {
      editTask();
    } else {
      createTask();
    }

    router.push("/");
    router.refresh();
  };

  async function createTask() {
    await fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify({
        title,
        description,
      }),
      headers: { "Content-type": "application/json" },
    });
  }

  async function editTask() {
    await fetch(`/api/tasks/${paramId}`, {
      method: "PUT",
      body: JSON.stringify({
        title,
        description,
      }),
      headers: { "Content-type": "application/json" },
    });
  }

  async function deleteTask() {
    await fetch(`/api/tasks/${paramId}`, { method: "DELETE" });
    router.push("/");
    router.refresh();
  }

  return (
    <div className="container flex mx-auto h-auto mt-20 justify-center items-center">
      <form
        className="flex flex-col bg-base-300 w-1/3 px-5 py-10 rounded-md items-center shadow-xl"
        onSubmit={onSubmit}
      >
        <label className="label-text self-start ml-5 mb-1" htmlFor="title">
          Title:
        </label>
        <input
          id="title"
          type="text"
          placeholder="Title"
          className="input input-bordered w-[90%] mb-5"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label
          className="label-text self-start ml-5 mb-1"
          htmlFor="description"
        >
          Description:
        </label>
        <textarea
          id="description"
          className="textarea textarea-bordered w-[90%] mb-6"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <button className="btn btn-secondary w-[90%]">
          {paramId ? "Edit Task" : "Create Task"}
        </button>
        {!!paramId && (
          <button
            className="btn btn-error w-[90%] mt-3 text-white"
            type="button"
            onClick={deleteTask}
          >
            Delete task
          </button>
        )}
      </form>
    </div>
  );
}

export { TaskForm };
