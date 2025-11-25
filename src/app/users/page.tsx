import { columns, User } from "@/app/users/columns";
import { DataTable } from "@/app/users/data-table";

const getData = async (): Promise<User[]> => {
  return [
    {
      id: "1",
      status: "active",
      FullName: "John Doe",
      avatar: "https://github.com/shadcn.png",
      email: "john.doe@example.com",
    },
    {
      id: "2",
      status: "active",
      FullName: "Jane Doe",
      avatar: "https://github.com/shadcn.png",
      email: "jane.doe@example.com",
    },
    {
      id: "3",
      status: "inactive",
      FullName: "Doe John",
      avatar: "https://github.com/shadcn.png",
      email: "doe.john@example.com",
    },
    {
      id: "4",
      avatar: "https://github.com/shadcn.png",
      status: "active",
      FullName: "John Doe",
      email: "doe.john@example.com",
    },
    {
      id: "5",
      avatar: "https://github.com/shadcn.png",
      status: "inactive",
      FullName: "Jane Doe",

      email: "jane.doe@example.com",
    },
  ];
};

async function UsersPage() {
  const data = await getData();
  return (
    <div className="">
      <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
        <h1>All Users</h1>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default UsersPage;
