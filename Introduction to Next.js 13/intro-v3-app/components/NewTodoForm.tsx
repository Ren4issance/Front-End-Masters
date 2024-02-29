import { newTodo } from "@/utils/actions";

const NewToDoForm = () => {
  return (
    <>
      <form action={newTodo}>
        <input name="content" type="text" className="border border-black/25" />
        <button type="submit">new todo</button>
      </form>
    </>
  );
};

export default NewToDoForm;
