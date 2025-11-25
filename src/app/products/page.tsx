import { columns, Product } from "@/app/products/columns";
import { DataTable } from "@/app/products/data-table";

const getData = async (): Promise<Product[]> => {
  return [
    {
      id: "1",
      price: 134.0,
      ShortDescription: "Short Description",
      Description: "Description",
      Sizes: ["S", "M", "L", "XL", "XXL"],
      Colors: ["Red", "Blue", "Green"],
      images: {
        Red: "/products/1g.png",
        Blue: "/products/1gr.png",
        Green: "/products/1p.png",
      },
      name: "Product 1",
    },
    {
      id: "2",
      price: 135.0,
      ShortDescription: "Short Description",
      Description: "Description",
      Sizes: ["S", "M", "L", "XL", "XXL"],
      Colors: ["Red", "Blue", "Green"],
      images: {
        Red: "/products/2g.png",
        Blue: "/products/2gr.png",
        Green: "/products/2g.png",
      },
      name: "Product 2",
    },
    {
      id: "3",
      price: 136.0,
      ShortDescription: "Short Description",
      Description: "Description",
      Sizes: ["S", "M", "L", "XL", "XXL"],
      Colors: ["Red", "Blue", "Green"],
      images: {
        Red: "/products/3b.png",
        Blue: "/products/3bl.png",
        Green: "/products/3gr.png",
      },
      name: "Product 3",
    },
    {
      id: "4",
      price: 137.0,
      ShortDescription: "Short Description",
      Description: "Description",
      Sizes: ["S", "M", "L", "XL", "XXL"],
      Colors: ["Red", "Blue", "Green"],
      images: {
        Red: "/products/4p.png",
        Blue: "/products/4p.png",
        Green: "/products/4w.png",
      },
      name: "Product 4",
    },
    {
      id: "5",
      price: 138.0,
      ShortDescription: "Short Description",
      Description: "Description",
      Sizes: ["S", "M", "L", "XL", "XXL"],
      Colors: ["Red", "Blue", "Green"],
      images: {
        Red: "/products/5bl.png",
        Blue: "/products/5o.png",
        Green: "/products/5r.png",
      },
      name: "Product 5",
    },
  ];
};

async function ProductsPage() {
  const data = await getData();
  return (
    <div className="">
      <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
        <h1>All Products</h1>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default ProductsPage;
