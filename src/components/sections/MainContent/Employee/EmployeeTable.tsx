import { useMemo } from "react";

import {
  columnFilteringFeature,
  columnGroupingFeature,
  createExpandedRowModel,
  createFilteredRowModel,
  createGroupedRowModel,
  filterFn_includesString,
  rowExpandingFeature,
  rowSelectionFeature,
  tableFeatures,
  useTable,
} from "@tanstack/react-table";

import type { ColumnDef } from "@tanstack/react-table";

import { Pencil, Trash2, ChevronDown, ChevronRight } from "lucide-react";

import type { EmployeeType } from "../../../../data/employeeData";

type EmployeeTableProps = {
  employees: EmployeeType[];
  search: string;
  department: string;
};

const features = tableFeatures({
  columnFilteringFeature,
  columnGroupingFeature,
  rowExpandingFeature,
  rowSelectionFeature,

  filteredRowModel: createFilteredRowModel(),
  groupedRowModel: createGroupedRowModel(),
  expandedRowModel: createExpandedRowModel(),

  filterFns: {
    includesString: filterFn_includesString,
  },
});

const columns: Array<ColumnDef<typeof features, EmployeeType>> = [
  {
    id: "select",

    header: ({ table }) => (
      <input
        type="checkbox"
        checked={table.getIsAllRowsSelected()}
        ref={(element) => {
          if (element) {
            element.indeterminate = table.getIsSomeRowsSelected();
          }
        }}
        onChange={table.getToggleAllRowsSelectedHandler()}
        className="h-4 w-4 cursor-pointer"
        aria-label="Select all employees"
      />
    ),

    cell: ({ row }) => (
      <input
        type="checkbox"
        checked={row.getIsSelected()}
        disabled={!row.getCanSelect()}
        onChange={row.getToggleSelectedHandler()}
        className="h-4 w-4 cursor-pointer"
        aria-label={`Select ${row.getValue("name")}`}
      />
    ),
  },

  /* -------------------------------------------------------
     Name
     ------------------------------------------------------- */

  {
    accessorKey: "name",
    header: "NAME",
    filterFn: "includesString",

    cell: (info) => info.getValue(),
  },

  {
    accessorKey: "role",
    header: "ROLE",

    cell: (info) => info.getValue(),
  },

  {
    accessorKey: "dept",
    header: "DEPARTMENT",

    cell: (info) => info.getValue(),
  },

  {
    accessorKey: "joined",
    header: "JOINED",

    cell: (info) => {
      const value = info.getValue<string>();

      const date = new Date(`${value}T00:00:00`);

      return date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    },
  },

  {
    accessorKey: "util",
    header: "UTILIZATION",

    cell: (info) => {
      const value = info.getValue<number>();

      return (
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-14 overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full bg-primary"
              style={{
                width: `${value}%`,
              }}
            />
          </div>

          <span>{value}%</span>
        </div>
      );
    },
  },

  {
    accessorKey: "salary",
    header: "SALARY",

    cell: (info) => `₹${info.getValue<number>().toLocaleString("en-IN")}`,
  },
  {
    id: "actions",

    header: "ACTIONS",

    cell: () => (
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="text-app-text-muted hover:text-app-text"
          aria-label="Edit employee"
        >
          <Pencil size={16} />
        </button>

        <button
          type="button"
          className="text-app-text-muted hover:text-danger"
          aria-label="Delete employee"
        >
          <Trash2 size={16} />
        </button>
      </div>
    ),
  },
];

const EmployeeTable = ({
  employees,
  search,
  department,
}: EmployeeTableProps) => {

  // Stable reference: a new array every render makes the row models
  // recompute, which resets the expanded state.
  const columnFilters = useMemo(
    () => [
      { id: "name", value: search },
      { id: "dept", value: department },
    ],
    [search,department],
  );

  const table = useTable({
    key: "employee-table",

    features,

    columns,

    data: employees,

    state: {
      columnFilters,
    },

    autoResetExpanded: false,

    initialState: {
      grouping: ["dept"],
      expanded: true,
    },

    groupedColumnMode: "remove",
  });

  return (
    <div className="mt-2 overflow-x-auto rounded-md border border-app-border bg-surface">
      <table className="w-full border-collapse text-sm">
        <thead className="bg-app-bg">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="border-b border-app-border px-4 py-3 text-left text-[11px] font-semibold text-app-text-muted"
                >
                  {header.isPlaceholder ? null : (
                    <table.FlexRender header={header} />
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => {
            if (row.getIsGrouped()) {
              const isExpanded = row.getIsExpanded();

              return (
                <tr
                  key={row.id}
                  className="border-b border-app-border bg-app-bg hover:bg-surface"
                >
                  <td colSpan={row.getAllCells().length} className="px-4 py-2">
                    <button
                      type="button"
                      onClick={() => {
                        row.toggleExpanded();
                      }}
                      className="flex w-full items-center gap-2 text-left text-xs font-semibold text-app-text"
                      aria-expanded={isExpanded}
                    >
                      {isExpanded ? (
                        <ChevronDown size={13} />
                      ) : (
                        <ChevronRight size={13} />
                      )}

                      <span>
                        {row.groupingValue} ({row.subRows.length})
                      </span>
                    </button>
                  </td>
                </tr>
              );
            }

            return (
              <tr
                key={row.id}
                className="border-b border-app-border last:border-b-0 hover:bg-app-bg"
              >
                {row.getAllCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="px-4 py-3 text-[13px] text-app-text"
                  >
                    <table.FlexRender cell={cell} />
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
