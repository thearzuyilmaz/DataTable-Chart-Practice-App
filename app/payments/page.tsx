import { columns, Payment } from "./columns";
import { DataTable } from "./data-table";
import { TestChart } from "@/components/test-chart";

async function getData(): Promise<Payment[]> {
  return [
    // Önceki Örnekler:
    {
      id: "728ed52f",
      amount: 1500.5,
      status: "success",
      email: "alice@example.com",
    },
    {
      id: "4a2b1c3d",
      amount: 50.99,
      status: "pending",
      email: "bob@example.com",
    },
    {
      id: "f8e7d6c5",
      amount: 450.0,
      status: "processing",
      email: "charlie@example.com",
    },
    {
      id: "1g2h3i4j",
      amount: 99.99,
      status: "failed",
      email: "david@example.com",
    },
    {
      id: "k5l6m7n8",
      amount: 2345.75,
      status: "success",
      email: "eve@example.com",
    },
    {
      id: "o9p0q1r2",
      amount: 10.0,
      status: "pending",
      email: "frank@example.com",
    },

    // Yeni Eklenen Manuel Veriler:
    {
      id: "a1b2c3d4",
      amount: 35.6,
      status: "pending",
      email: "greg@company.net",
    },
    {
      id: "e5f6g7h8",
      amount: 750.0,
      status: "success",
      email: "hannah@company.net",
    },
    {
      id: "i9j0k1l2",
      amount: 0.05,
      status: "success",
      email: "tiny_purchase@mail.com",
    },
    {
      id: "m3n4o5p6",
      amount: 125.4,
      status: "failed",
      email: "ivan@webdev.io",
    },
    {
      id: "q7r8s9t0",
      amount: 5000.0,
      status: "success",
      email: "jessica@bigcorp.com",
    },
    {
      id: "u1v2w3x4",
      amount: 100.0,
      status: "processing",
      email: "kevin@mail.com",
    },
    {
      id: "y5z6a7b8",
      amount: 280.9,
      status: "pending",
      email: "lisa@mail.com",
    },
    {
      id: "c9d0e1f2",
      amount: 280.9,
      status: "pending",
      email: "lisa@mail.com",
    },
    {
      id: "g3h4i5j6",
      amount: 18.25,
      status: "failed",
      email: "mike@service.co",
    },
    {
      id: "k7l8m9n0",
      amount: 999.99,
      status: "processing",
      email: "nancy@service.co",
    },

    // ----------------------------------------------------
    // Aşağıda 50 adet eklenmiş hazır fake data var
    // ----------------------------------------------------
    {
      id: "gen001",
      amount: 123.45,
      status: "success",
      email: "user1@example.com",
    },
    {
      id: "gen002",
      amount: 875.22,
      status: "pending",
      email: "user2@mail.com",
    },
    {
      id: "gen003",
      amount: 12.99,
      status: "failed",
      email: "user3@company.net",
    },
    {
      id: "gen004",
      amount: 542.1,
      status: "processing",
      email: "user4@service.co",
    },
    { id: "gen005", amount: 76.0, status: "success", email: "user5@mail.com" },
    {
      id: "gen006",
      amount: 184.3,
      status: "failed",
      email: "user6@example.com",
    },
    {
      id: "gen007",
      amount: 999.99,
      status: "success",
      email: "user7@company.net",
    },
    {
      id: "gen008",
      amount: 32.1,
      status: "pending",
      email: "user8@service.co",
    },
    {
      id: "gen009",
      amount: 4500.0,
      status: "success",
      email: "user9@mail.com",
    },
    {
      id: "gen010",
      amount: 14.25,
      status: "failed",
      email: "user10@example.com",
    },
    {
      id: "gen011",
      amount: 210.1,
      status: "success",
      email: "user11@mail.com",
    },
    {
      id: "gen012",
      amount: 75.55,
      status: "pending",
      email: "user12@company.net",
    },
    {
      id: "gen013",
      amount: 399.0,
      status: "processing",
      email: "user13@service.co",
    },
    {
      id: "gen014",
      amount: 450.2,
      status: "success",
      email: "user14@example.com",
    },
    {
      id: "gen015",
      amount: 1299.99,
      status: "failed",
      email: "user15@mail.com",
    },
    {
      id: "gen016",
      amount: 66.66,
      status: "pending",
      email: "user16@company.net",
    },
    {
      id: "gen017",
      amount: 88.0,
      status: "success",
      email: "user17@service.co",
    },
    {
      id: "gen018",
      amount: 23.45,
      status: "processing",
      email: "user18@mail.com",
    },
    {
      id: "gen019",
      amount: 560.0,
      status: "success",
      email: "user19@example.com",
    },
    {
      id: "gen020",
      amount: 80.9,
      status: "failed",
      email: "user20@example.com",
    },
    {
      id: "gen021",
      amount: 600.1,
      status: "success",
      email: "user21@mail.com",
    },
    {
      id: "gen022",
      amount: 410.5,
      status: "success",
      email: "user22@example.com",
    },
    { id: "gen023", amount: 15.1, status: "pending", email: "user23@mail.com" },
    {
      id: "gen024",
      amount: 999.5,
      status: "processing",
      email: "user24@company.net",
    },
    {
      id: "gen025",
      amount: 35.25,
      status: "failed",
      email: "user25@service.co",
    },
    { id: "gen026", amount: 72.6, status: "success", email: "user26@mail.com" },
    {
      id: "gen027",
      amount: 48.99,
      status: "pending",
      email: "user27@example.com",
    },
    { id: "gen028", amount: 510.1, status: "failed", email: "user28@mail.com" },
    {
      id: "gen029",
      amount: 220.3,
      status: "processing",
      email: "user29@mail.com",
    },
    {
      id: "gen030",
      amount: 318.9,
      status: "success",
      email: "user30@company.net",
    },
    {
      id: "gen031",
      amount: 19.99,
      status: "failed",
      email: "user31@example.com",
    },
    { id: "gen032", amount: 85.7, status: "success", email: "user32@mail.com" },
    {
      id: "gen033",
      amount: 955.0,
      status: "pending",
      email: "user33@service.co",
    },
    {
      id: "gen034",
      amount: 155.2,
      status: "success",
      email: "user34@mail.com",
    },
    {
      id: "gen035",
      amount: 250.0,
      status: "processing",
      email: "user35@example.com",
    },
    {
      id: "gen036",
      amount: 889.4,
      status: "success",
      email: "user36@company.net",
    },
    {
      id: "gen037",
      amount: 48.2,
      status: "pending",
      email: "user37@service.co",
    },
    {
      id: "gen038",
      amount: 199.99,
      status: "failed",
      email: "user38@mail.com",
    },
    {
      id: "gen039",
      amount: 275.75,
      status: "success",
      email: "user39@example.com",
    },
    {
      id: "gen040",
      amount: 129.3,
      status: "success",
      email: "user40@mail.com",
    },
    {
      id: "gen041",
      amount: 73.99,
      status: "pending",
      email: "user41@example.com",
    },
    {
      id: "gen042",
      amount: 5100.5,
      status: "success",
      email: "user42@mail.com",
    },
    {
      id: "gen043",
      amount: 14.0,
      status: "failed",
      email: "user43@company.net",
    },
    {
      id: "gen044",
      amount: 47.5,
      status: "processing",
      email: "user44@mail.com",
    },
    {
      id: "gen045",
      amount: 899.99,
      status: "success",
      email: "user45@example.com",
    },
    {
      id: "gen046",
      amount: 310.2,
      status: "pending",
      email: "user46@mail.com",
    },
    {
      id: "gen047",
      amount: 21.15,
      status: "success",
      email: "user47@company.net",
    },
    {
      id: "gen048",
      amount: 980.1,
      status: "success",
      email: "user48@mail.com",
    },
    {
      id: "gen049",
      amount: 440.0,
      status: "pending",
      email: "user49@service.co",
    },
    { id: "gen050", amount: 38.4, status: "failed", email: "user50@mail.com" },
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <>
          <div className="container w-full max-w-3xl mx-auto">
        <TestChart />
      </div>
      <div className="container mx-auto px-4">
        <DataTable columns={columns} data={data} />
      </div>

    </>
  );
}
