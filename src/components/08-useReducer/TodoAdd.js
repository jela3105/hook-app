import { useForm } from "../../hooks/useForm";

export const TodoAdd = ({ handleAddTodo }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length <= 1) {
      return;
    }
    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };
    const action = {
      type: "add",
      payload: newTodo,
    };
    handleAddTodo(action);
    reset();
  };

  return (
    <>
      <h4>Add todo</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          name="description"
          onChange={handleInputChange}
          value={description}
          placeholder="Learn..."
        />
        <button className="btn btn-outline-primary mt-1">Add</button>
      </form>
      <hr />
    </>
  );
};
