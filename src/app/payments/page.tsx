import { columns, Payment } from "./columns";
import { DataTable } from "./data-table";

const getData = async (): Promise<Payment[]> => {
  return [
    {
      id: "1",
      amount: 134.0,
      status: "Pending",
      FullName: "John Doe",
      userId: "1",
      email: "john.doe@example.com",
    },
    {
      id: "2",
      amount: 135.0,
      status: "Success",
      FullName: "Jane Doe",
      userId: "2",
      email: "jane.doe@example.com",
    },
    {
      id: "3",
      amount: 136.0,
      status: "Failed",
      FullName: "Doe John",
      userId: "3",
      email: "doe.john@example.com",
    },
    {
      id: "4",
      amount: 137.0,
      status: "Pending",
      FullName: "John Doe",
      userId: "4",
      email: "doe.john@example.com",
    },
    {
      id: "5",
      amount: 134.0,
      status: "Success",
      FullName: "Jane Doe",
      userId: "5",
      email: "jane.doe@example.com",
    },
  ];
};

async function PaymentsPage() {
  const data = await getData();
  return (
    <div className="">
      <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
        <h1>All Payments</h1>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default PaymentsPage;
