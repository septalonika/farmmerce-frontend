"use client";

import { CardItem } from "@/components/ui/CardItem";
import { FilterSelect } from "@/components/ui/FilterSelect";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

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
  {
    id: "4",
    name: "Pupuk Organik Kompos",
    image:
      "data:image/jpeg;base64,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",
    price: 30000, // per 50kg
    description:
      "Pupuk organik kompos berkualitas tinggi untuk meningkatkan kesuburan tanah.",
    category: "Hasil Tani",
    stock: 100,
    rating: 4.8,
  },
  {
    id: "5",
    name: "Benih Jagung Super",
    image:
      "https://asset-2.tstatic.net/tribunnews/foto/bank/images/ilustrasi-metik-jagung-benih-jagung-manis-nb-super.jpg",
    price: 5000, // per pack
    description:
      "Benih jagung super berkualitas tinggi, siap tanam untuk hasil maksimal.",
    category: "Benih",
    stock: 300,
    rating: 4.5,
  },
  {
    id: "6",
    name: "Jasa Konsultasi Pertanian",
    image: "https://images.pexels.com/photos/3200900/pexels-photo-3200900.jpeg",
    price: 100000, // per sesi
    description:
      "Jasa konsultasi pertanian untuk membantu petani dalam pengelolaan lahan dan pemilihan tanaman.",
    category: "Jasa Pertanian",
    stock: 50,
    rating: 4.9,
  },
];

const HomePage = () => {
  return (
    <div className="mt-7 flex min-h-screen flex-col items-center justify-center md:mt-[70px]">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-b from-green-50 via-green-100 to-green-50 py-14 md:py-10">
        <div className="relative z-10 mx-auto flex flex-col-reverse items-center gap-10 px-6 md:mx-44 md:flex-row md:items-center md:gap-16">
          {/* Left Side - Promotion / Ad */}
          <div className="flex flex-col items-start text-left md:w-1/2">
            <span className="mb-4 inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-600">
              Produk Unggulan 🌾
            </span>
            <h2 className="mb-4 text-3xl font-extrabold text-green-800 drop-shadow-sm md:text-4xl">
              Dukung Petani Lokal
            </h2>
            <p className="mb-6 text-gray-600 md:text-lg">
              Dapatkan produk pertanian segar berkualitas langsung dari tangan
              para petani terbaik. Pilih, sewa lahan, atau beli hasil panen
              favoritmu sekarang juga!
            </p>
            <a
              href="#products"
              className="rounded-full bg-green-600 px-6 py-3 text-white transition hover:bg-green-700 hover:shadow-md"
            >
              Belanja Sekarang
            </a>
          </div>

          {/* Right Side - Product Featured */}
          <div className="w-full md:w-1/2">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={40}
              slidesPerView={1}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              pagination={{
                clickable: true,
              }}
            >
              {products.slice(0, 3).map((product) => (
                <SwiperSlide key={product.id}>
                  <div className="group relative h-80 w-full overflow-hidden rounded-3xl transition-all duration-300">
                    {/* Gambar Produk */}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-75"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <h3 className="translate-y-4 text-2xl font-bold text-white opacity-0 transition-all delay-200 duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                        {product.name}
                      </h3>
                      <p className="mt-2 mb-4 max-w-xs translate-y-4 text-center text-sm text-gray-200 opacity-0 transition-all delay-300 duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                        {product.description}
                      </p>
                      <button className="mt-4 scale-95 transform rounded-full bg-green-600 px-6 py-2 text-white transition group-hover:scale-100 hover:bg-green-700">
                        Detail
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
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
                { label: "⭐⭐", value: "2" },
                { label: "⭐", value: "1" },
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
      <section className="flex flex-wrap justify-center gap-3 p-4 md:mx-16 md:gap-9">
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
      </section>
    </div>
  );
};

export default HomePage;
