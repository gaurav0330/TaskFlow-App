import { useState } from "react";

type EmployeeFormProps = {
  onSubmit: (employee: {
    name: string;
    role: string;
    dept: string;
    joined: string;
    util: number;
    salary: number;
  }) => void;
  onCancel: () => void;
};

const EmployeeForm = ({ onSubmit, onCancel }: EmployeeFormProps) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [dept, setDept] = useState("Engineering");
  const [joined, setJoined] = useState("");
  const [util, setUtil] = useState(75);
  const [salary, setSalary] = useState(80000);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit({
      name,
      role,
      dept,
      joined,
      util,
      salary,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form body */}
      <div className="space-y-4 px-5 py-5">

        {/* Full name */}
        <div>
          <label className="mb-1 block text-sm text-app-text">
            Full name
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Priya Nair"
            className="w-full rounded-md border border-app-border bg-app-bg px-3 py-2 text-sm text-app-text outline-none"
          />
        </div>

        {/* Role + Department */}
        <div className="grid grid-cols-2 gap-5">
          <div>
            <label className="mb-1 block text-sm text-app-text">
              Role / title
            </label>

            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="e.g. Frontend Engineer"
              className="w-full rounded-md border border-app-border bg-app-bg px-3 py-2 text-sm text-app-text outline-none"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm text-app-text">
              Department
            </label>

            <select
              value={dept}
              onChange={(e) => setDept(e.target.value)}
              className="w-full rounded-md border border-app-border bg-app-bg px-3 py-2 text-sm text-app-text outline-none"
            >
              <option value="Design">Design</option>
              <option value="Engineering">Engineering</option>
              <option value="Sales">Sales</option>
            </select>
          </div>
        </div>

        {/* Joined + Utilization */}
        <div className="grid grid-cols-2 gap-5">
          <div>
            <label className="mb-1 block text-sm text-app-text">
              Date joined
            </label>

            <input
              type="date"
              value={joined}
              onChange={(e) => setJoined(e.target.value)}
              className="w-full rounded-md border border-app-border bg-app-bg px-3 py-2 text-sm text-app-text outline-none"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm text-app-text">
              Utilization %
            </label>

            <input
              type="number"
              min="0"
              max="100"
              value={util}
              onChange={(e) => setUtil(Number(e.target.value))}
              className="w-full rounded-md border border-app-border bg-app-bg px-3 py-2 text-sm text-app-text outline-none"
            />
          </div>
        </div>

        {/* Salary */}
        <div className="w-1/2">
          <label className="mb-1 block text-sm text-app-text">
            Salary (₹ / yr)
          </label>

          <input
            type="number"
            value={salary}
            onChange={(e) => setSalary(Number(e.target.value))}
            className="w-full rounded-md border border-app-border bg-app-bg px-3 py-2 text-sm text-app-text outline-none"
          />
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-end gap-2 border-t border-app-border px-5 py-3">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-md border border-app-border px-4 py-2 text-sm text-app-text"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white"
        >
          Save employee
        </button>
      </div>
    </form>
  );
};

export default EmployeeForm;