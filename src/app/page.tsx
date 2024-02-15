import { TaskCard } from "@/components/TaskCard/TaskCard";
import { prisma } from "@/libs/prisma";

export const dynamic = "force-dynamic";

async function loadTasks() {
  return await prisma.task.findMany();
}

async function HomePage() {
  const tasks = await loadTasks();

  return (
    <section className="container mx-auto">
      <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 mt-10">
        {tasks.map((task) => (
          <TaskCard key={task.id} {...task} />
        ))}
      </div>
    </section>
  );
}

export default HomePage;
