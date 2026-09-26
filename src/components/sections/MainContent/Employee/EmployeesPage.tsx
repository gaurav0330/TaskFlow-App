import { employeeData } from "../../../../data/employeeData";
import EmployeeToolbar from "./EmployeeToolbar";
import EmployeeTable from "./EmployeeTable";
import { useState } from "react";
import Modal from "../../../UI/Modal";
import EmployeeForm from "./EmployeeForm";

const EmployeesPage = () => {
  const [search, setSearch] = useState<string>("");
  const [department, setDepartment] = useState<string>("");
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);

  return (
    <div className="bg-app-bg p-4">
      <h1 className="mb-4 text-lg font-semibold text-app-text">
        Employee Directory
      </h1>

      <EmployeeToolbar
        search={search}
        onSearchChange={setSearch}
        department={department}
        onDepartmentChange={setDepartment}
        onAddModal={setIsAddModalOpen}
      />

      <EmployeeTable
        employees={employeeData}
        search={search}
        department={department}
      />

      {isAddModalOpen && (
        <Modal
          open={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          title="Add Employee"
        >
          <EmployeeForm
            onSubmit={(employee) => {
              console.log(employee);
              setIsAddModalOpen(false);
            }}
            onCancel={() => setIsAddModalOpen(false)}
          />
        </Modal>
      )}
    </div>
  );
};

export default EmployeesPage;
