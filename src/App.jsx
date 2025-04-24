import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const items = [
  {
    name: "Kite",
    category: "Beach Items",
    price: "$5",
    image: "https://images.unsplash.com/photo-1598032894162-0a6fa7bcd785",
  },
  {
    name: "Cooler",
    category: "Beach Items",
    price: "$10",
    image: "https://images.unsplash.com/photo-1597423244029-86b8e1279d3b",
  },
  {
    name: "Adult Bikes (2)",
    category: "Sports and Games",
    price: "$20",
    image: "https://images.unsplash.com/photo-1520975698511-2f9b3b3d7672",
  },
  {
    name: "Spike Ball",
    category: "Beach Items",
    price: "$15",
    image: "https://images.unsplash.com/photo-1599392153586-1bd3be9df8f3",
  },
  {
    name: "Boogie Boards (2)",
    category: "Beach Items",
    price: "$10",
    image: "https://images.unsplash.com/photo-1604082420639-87a61a89f0f3",
  },
  {
    name: "Beach Chair (2)",
    category: "Beach Items",
    price: "$8",
    image: "https://images.unsplash.com/photo-1601313909599-2b1468ba8813",
  },
  {
    name: "Umbrella (1)",
    category: "Beach Items",
    price: "$5",
    image: "https://images.unsplash.com/photo-1558024920-b41e5aa2f9b2",
  },
  {
    name: "Cotton Candy Machine",
    category: "Food Makers",
    price: "$20",
    image: "/Momos_Rental_CottonCandy.png",
  },
  {
    name: "Corn Hole Game",
    category: "Lawn Equipment",
    price: "$15",
    image: "/Momos_Rental_CornHole.png",
  },
  {
    name: "Ping Pong Table",
    category: "Sports and Games",
    price: "$25",
    image: "https://images.unsplash.com/photo-1612197587881-0890b222295e",
  },
  {
    name: "Axe Thrower",
    category: "Lawn Equipment",
    price: "$15",
    image: "/Momos_Rental_AxeThrower.webp",
  },
  {
    name: "Bead Kit",
    category: "Arts & Craft",
    price: "$10",
    image: "https://images.unsplash.com/photo-1617957743243-e4421b7c2c6f",
  },
  {
    name: "Laminator (with laminating sheets)",
    category: "Arts & Craft",
    price: "$10",
    image: "/Momos_Rental_Laminator.png",
  },
];

export default function MomosRental() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    item: [],
    startDate: "",
    endDate: "",
    delivery: "pickup",
    address: "",
    message: ""
  });

  const [filter, setFilter] = useState("All");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleMultiSelectChange = (e) => {
    const options = Array.from(e.target.selectedOptions, (option) => option.value);
    setForm((prev) => ({ ...prev, item: options }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for your request! Momo will be in touch via email.");
    setForm({
      name: "",
      email: "",
      phone: "",
      item: [],
      startDate: "",
      endDate: "",
      delivery: "pickup",
      address: "",
      message: ""
    });
  };

  const categories = ["All", "Food Makers", "Lawn Equipment", "Sports and Games", "Arts & Craft", "Beach Items"];
  const filteredItems = filter === "All" ? items : items.filter((item) => item.category === filter);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="flex flex-col items-center justify-center mb-4">
        <img src="/Momos_Rental_Logo.png" alt="Momo's Rental Logo" className="w-32 h-32 mb-2" />
        <h1 className="text-4xl font-bold text-center">Welcome to Momo's Rental!</h1>
      </div>
      <p className="text-center text-orange-500 font-bold italic text-xl mb-4">🎉 All the fun, none of the clutter! 🏖️🚲</p>
      <p className="text-center text-lg mb-8">
        Momo is 8 years old and renting out fun gear to neighbors this summer! Browse below and get in touch.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Catalog</h2>
      <div className="flex gap-2 mb-4 flex-wrap justify-center">
        {categories.map((cat) => (
          <Button key={cat} variant={filter === cat ? "default" : "outline"} onClick={() => setFilter(cat)}>
            {cat}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map((item, index) => (
          <Card key={index}>
            <img src={item.image} alt={item.name} className="rounded-t-2xl h-48 object-cover w-full" />
            <CardContent>
              <h3 className="text-xl font-bold">{item.name}</h3>
              <p className="text-gray-600">Category: {item.category}</p>
              <p className="text-green-600 font-semibold">{item.price}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Reserve an Item</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
        <Input name="email" type="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
        <Input name="phone" type="tel" placeholder="Your Phone Number" value={form.phone} onChange={handleChange} />

        <select name="item" multiple value={form.item} onChange={handleMultiSelectChange} className="w-full p-2 border rounded" required>
          {items.map((item, idx) => (
            <option key={idx} value={item.name}>{item.name}</option>
          ))}
        </select>

        <div className="flex gap-4">
          <Input name="startDate" type="date" value={form.startDate} onChange={handleChange} required />
          <Input name="endDate" type="date" value={form.endDate} onChange={handleChange} required />
        </div>

        <div className="flex gap-4">
          <label className="flex items-center gap-2">
            <input type="radio" name="delivery" value="pickup" checked={form.delivery === "pickup"} onChange={handleChange} />
            Pick-up (Free)
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="delivery" value="delivery" checked={form.delivery === "delivery"} onChange={handleChange} />
            Delivery ($5)
          </label>
        </div>

        {form.delivery === "delivery" && (
          <Input name="address" placeholder="Delivery Address" value={form.address} onChange={handleChange} required />
        )}

        <Textarea name="message" placeholder="Any other details or questions?" value={form.message} onChange={handleChange} />

        <div className="bg-gray-50 p-4 rounded-xl border mt-8">
          <h3 className="text-xl font-semibold mb-2">Cart Summary</h3>
          {form.item.length === 0 ? (
            <p className="text-gray-500">No items selected.</p>
          ) : (
            <>
              <ul className="list-disc list-inside">
                {form.item.map((itemName, i) => {
                  const item = items.find(it => it.name === itemName);
                  return (
                    <li key={i} className="flex justify-between">
                      <span>{itemName}</span>
                      <span className="text-green-600 font-semibold">{item?.price}</span>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-4 flex justify-between font-bold text-lg">
                <span>Total:</span>
                <span className="text-green-700">
                  ${form.item.reduce((total, itemName) => {
                    const item = items.find(it => it.name === itemName);
                    const price = item ? parseFloat(item.price.replace('$', '')) : 0;
                    return total + price;
                  }, 0) + (form.delivery === "delivery" ? 5 : 0)}
                </span>
              </div>
            </>
          )}
        </div>

        <Button type="submit">Send Request</Button>
      </form>
    </div>
  );
}

