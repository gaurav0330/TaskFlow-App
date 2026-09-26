type EmployeeToolbarProps = {
  search: string;
  department: string;

  onSearchChange: (value: string) => void;
  onDepartmentChange: (value: string) => void;
  onAddModal: (value: boolean) => void;
};

const EmployeeToolbar = ({
  search,
  onSearchChange,
  department,
  onDepartmentChange,
  onAddModal,
}: EmployeeToolbarProps) => {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search employee..."
          className="rounded-md border border-app-border bg-surface px-3 py-2 text-sm text-app-text outline-none"
        />

        <select
          className="rounded-md border border-app-border bg-surface px-3 py-2 text-sm text-app-text outline-none"
          onChange={(event) => {
            console.log(event.target.value);
            onDepartmentChange(event.target.value);
          }}
          value={department}
        >
          <option value="">All departments</option>
          <option value="Design">Design</option>
          <option value="Engineering">Engineering</option>
          <option value="Sales">Sales</option>
        </select>
      </div>

      <div className="flex gap-2">
        <button
          type="button"
          className="rounded-md border border-app-border px-3 py-2 text-sm text-app-text"
        >
          Delete Selected
        </button>

        <button
          type="button"
          className="rounded-md bg-primary px-3 py-2 text-sm text-white"
          onClick={ () => onAddModal(true)}
        >
          + Add Employee
        </button>
      </div>
    </div>
  );
};

export default EmployeeToolbar;
