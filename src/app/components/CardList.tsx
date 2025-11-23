"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const popularProducts = [
  {
    id: 1,
    title: "Product 1",
    badge: "New",
    image: "/products/1g.png",
    count: 4100,
  },
  {
    id: 2,
    title: "Product 2",
    badge: "New",
    image: "/products/2g.png",
    count: 4200,
  },
  {
    id: 3,
    title: "Product 3",
    badge: "New",
    image: "/products/3b.png",
    count: 4300,
  },
  {
    id: 4,
    title: "Product 4",
    badge: "New",
    image: "/products/4p.png",
    count: 4400,
  },
  {
    id: 5,
    title: "Product 5",
    badge: "New",
    image: "/products/5o.png",
    count: 4500,
  },
];
const LatestTransactions = [
  {
    id: 1,
    title: "Transaction 1",
    badge: "John Doe",
    image: "/products/1g.png",
    count: 1800,
  },
  {
    id: 2,
    title: "Transaction 2",
    badge: "Jane Doe",
    image: "/products/2g.png",
    count: 1900,
  },
  {
    id: 3,
    title: "Transaction 3",
    badge: "John Doe",
    image: "/products/3b.png",
    count: 2000,
  },
  {
    id: 4,
    title: "Transaction 4",
    badge: "Jane Doe",
    image: "/products/4p.png",
    count: 2100,
  },
  {
    id: 5,
    title: "Transaction 5",
    badge: "John Doe",
    image: "/products/5o.png",
    count: 2200,
  },
];

function CardList({ title }: { title: string }) {
  const list =
    title === "Popular Products" ? popularProducts : LatestTransactions;
  return (
    <div className="">
      <h1 className="text-lg font-medium mb-6"> {title}</h1>
      <div className="flex flex-col gap-2">
        {list.map((item) => (
          <Card
            key={item.id}
            className="flex flex-row justify-between items-center gap-4 p-4"
          >
            <div className="relative w-12 h-12 rounded-sm overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-0 flex-1">
              <CardTitle className="text-sm font-medium">
                {item.title}
              </CardTitle>
              <Badge variant="secondary">{item.badge}</Badge>
            </CardContent>
            <CardFooter className="p-0">{item.count / 1000}K</CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default CardList;
