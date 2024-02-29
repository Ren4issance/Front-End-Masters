import NewToDoForm from "@/components/NewTodoForm";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <h1>dashboard</h1>
      <NewToDoForm />
      {children}
    </div>
  );
};

export default DashboardLayout;
