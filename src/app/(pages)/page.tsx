"use client";

import { CardItem } from "@/components/ui/CardItem";
import { FilterSelect } from "@/components/ui/FilterSelect";

const products = [
  {
    id: "1",
    name: "Beras Organik Premium",
    image:
      "https://www.ibmindonesia.com/storage/products/June2023/AOnFQKVW5OlmHbm6Pf8M.jpg",
    price: 12000, // per kilogram
    description:
      "Beras organik berkualitas tinggi, bebas pestisida dan bahan kimia.",
    category: "Hasil Tani",
    stock: 200,
    rating: 4.7,
  },
  {
    id: "2",
    name: "Sayuran Segar Campuran",
    image:
      "https://media.istockphoto.com/id/453963935/id/foto/buah-dan-sayuran-di-pasar-kota-di-riga.jpg?b=1&s=612x612&w=0&k=20&c=zNIqo_H4eLtrQP3ar0KXTv6XB7y25xadVQjh9mwzFvo=",
    price: 25000, // per paket
    description:
      "Paket sayuran segar langsung dari kebun, terdiri dari bayam, kangkung, dan sawi.",
    category: "Hasil Tani",
    stock: 150,
    rating: 4.6,
  },
  {
    id: "3",
    name: "Sewa Lahan Pertanian 1 Hektar",
    image:
      "https://images.pexels.com/photos/31837708/pexels-photo-31837708/free-photo-of-pemandangan-pedesaan-jerman-yang-indah-dengan-jalan-pedesaan.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 5000000, // harga sewa
    description:
      "Lahan pertanian siap tanam seluas 1 hektar untuk masa sewa 1 tahun.",
    category: "Jasa Sewa Lahan",
    stock: 5,
    rating: 4,
    duration: "1 tahun",
  },
];

const HomePage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center pt-24 md:pt-0">
      {/* Hero Section */}
      <section className="relative flex w-screen flex-col items-center justify-center gap-4 bg-green-100 py-28 text-center">
        <h1 className="text-4xl font-bold text-green-800 md:text-5xl">
          Selamat Datang di Farmmerce 🌾
        </h1>
        <p className="max-w-md text-gray-600 md:text-lg">
          Dukung petani lokal dengan membeli produk segar dan menyewa lahan
          pertanian terbaik.
        </p>
        <a
          href="#products"
          className="mt-6 rounded-full bg-green-600 px-6 py-3 text-white transition hover:bg-green-700"
        >
          Belanja Sekarang
        </a>
      </section>
      {/* Product Filter Placeholder */}
      <section className="flex items-center justify-center p-4">
        <div className="w-full max-w-5xl">
          <div className="flex flex-wrap justify-center gap-4">
            {/* Kategori */}
            <FilterSelect
              placeholder="Semua Kategori"
              options={[
                { label: "Hasil Tani", value: "hasil-tani" },
                { label: "Jasa Sewa Lahan", value: "jasa-sewa-lahan" },
              ]}
              onChange={(value) => console.log("Kategori selected:", value)}
            />

            {/* Harga */}
            <FilterSelect
              placeholder="Harga"
              options={[
                { label: "Termurah", value: "low" },
                { label: "Termahal", value: "high" },
              ]}
              onChange={(value) => console.log("Harga selected:", value)}
            />

            {/* Rating */}
            <FilterSelect
              placeholder="Rating"
              options={[
                { label: "⭐⭐⭐⭐⭐", value: "5" },
                { label: "⭐⭐⭐⭐", value: "4" },
                { label: "⭐⭐⭐", value: "3" },
              ]}
              onChange={(value) => console.log("Rating selected:", value)}
            />

            {/* Stok */}
            <FilterSelect
              placeholder="Stok"
              options={[
                { label: "Tersedia", value: "available" },
                { label: "Habis", value: "sold-out" },
              ]}
              onChange={(value) => console.log("Stok selected:", value)}
            />
          </div>
        </div>
      </section>

      <div className="flex flex-wrap justify-center gap-3 p-4">
        {products.map((product) => (
          <CardItem
            key={product.id}
            data={product}
            addToCartLabel="Add to Cart"
            buyNowLabel="Buy Now"
            onAddToCartClick={(item) => {
              console.log("Tambah ke keranjang:", item);
            }}
            onBuyNowClick={(item) => {
              console.log("Beli sekarang:", item);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
