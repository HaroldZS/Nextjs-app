"use client";

import { useRouter } from "next/navigation";

function TaskForm() {
  const router = useRouter();

  const onSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    const { title, description } = e.target as typeof e.target & {
      title: { value: string };
      description: { value: string };
    };
    const titleValue = title.value;
    const descriptionValue = description.value;

    const res = await fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify({
        title: titleValue,
        description: descriptionValue,
      }),
      headers: { "Content-type": "application/json" },
    });

    const data = await res.json();
    console.log(data);

    router.push("/");
  };

  return (
    <div className="container flex mx-auto h-screen justify-center items-center">
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
        ></textarea>
        <button className="btn btn-secondary w-[90%]">Submit</button>
      </form>
    </div>
  );
}

export { TaskForm };
