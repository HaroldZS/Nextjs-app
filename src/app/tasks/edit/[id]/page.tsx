import { TaskForm } from "@/components/TaskForm/TaskForm";

type Params = {
  id: number;
};

function EditTaskPage({ params }: { params: Params }) {
  return (
    <>
      <TaskForm paramId={params.id} />
    </>
  );
}

export default EditTaskPage;
