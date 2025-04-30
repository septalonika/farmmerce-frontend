"use client";

import { CardItem } from "@/components/ui/CardItem";

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
    rating: 4.5,
    duration: "1 tahun",
  },
];

const HomePage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center pt-24 md:pt-0">
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
