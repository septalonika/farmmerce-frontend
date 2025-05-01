"use client";

import { CardItem } from "@/components/ui/CardItem";
import RatingStars from "@/components/ui/RatingStars";
import { ChevronRight, CreditCard, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { use, useState } from "react";

type Params = {
  id: string;
};

type ProductDetailPageProps = {
  params: Promise<Params>;
};

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
      "https://lenteradesa.id/api/v1/assets/article/631b0918bd41a_1700308528.jpg.webp",
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
    rating: 2.9,
  },
];

const ProductDetail = ({ params }: ProductDetailPageProps) => {
  const { id } = use(params);
  const product = products.find((product) => product.id === id);

  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(product?.image);

  if (!product) {
    return <div>Produk tidak ditemukan!</div>;
  }

  const totalPrice = product.price * quantity;

  // Dummy gambar tambahan (bisa diganti dengan gambar berbeda)
  const additionalImages = [
    product.image,
    product.image,
    product.image,
    product.image,
  ];

  return (
    <div className="px-4 pt-24 sm:px-8 md:px-12 lg:px-20 xl:px-28 2xl:px-40">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center text-sm text-gray-600">
        <Link
          href="/"
          className="flex items-center gap-1 text-green-700 transition hover:underline"
        >
          <span className="font-medium">Home</span>
        </Link>

        <ChevronRight className="mx-1 h-4 w-4 text-gray-400" />

        <Link
          href="/products"
          className="flex items-center gap-1 text-green-700 transition hover:underline"
        >
          <span className="font-medium">All Products</span>
        </Link>

        <ChevronRight className="mx-1 h-4 w-4 text-gray-400" />

        <span className="font-semibold text-gray-800">{product.name}</span>
      </nav>

      <section className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:flex-row">
        {/* Left - Image Gallery */}
        <div className="w-full md:w-1/2">
          <div className="overflow-hidden rounded-2xl shadow-md">
            <img
              src={mainImage}
              alt={product.name}
              className="h-60 w-full object-cover transition-transform duration-300 hover:scale-105 sm:h-80 md:h-96"
            />
          </div>

          <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">
            {additionalImages.slice(0, 4).map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                onClick={() => setMainImage(img)}
                className={`h-16 w-16 cursor-pointer rounded-xl border-2 object-cover transition-transform duration-300 hover:scale-105 sm:h-20 sm:w-20 ${
                  mainImage === img ? "border-green-600" : "border-transparent"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right - Product Info */}
        <div className="w-full space-y-5 md:w-1/2">
          <h2 className="text-2xl font-bold text-green-800 sm:text-3xl">
            {product.name}
          </h2>
          <p className="text-sm text-gray-500">{product.category}</p>
          <RatingStars rating={product.rating} />
          <p className="text-sm text-gray-700 sm:text-base">
            {product.description}
          </p>

          <div className="flex items-center gap-7">
            <label className="md:text-md mb-1 block text-gray-600">Qty :</label>
            <div className="inline-flex items-center gap-3 rounded-full bg-gray-100 px-3 py-1 sm:gap-5">
              <button
                className="cursor-pointer text-lg text-gray-600 hover:text-green-700"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                -
              </button>
              <span className="text-base font-semibold sm:text-lg">
                {quantity}
              </span>
              <button
                className="cursor-pointer text-lg text-gray-600 hover:text-green-700"
                onClick={() => setQuantity((q) => q + 1)}
              >
                +
              </button>
            </div>
          </div>
          <div className="flex justify-end text-2xl font-bold text-green-700 transition-colors duration-300 sm:text-3xl">
            Rp {totalPrice.toLocaleString()}
          </div>
          <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4">
            <button className="flex w-full max-w-xs cursor-pointer items-center justify-center gap-2 rounded-full bg-green-600 p-3 text-sm text-white shadow-md transition hover:bg-green-700 sm:px-6 sm:py-3 sm:text-base">
              <ShoppingCart size={16} /> Add to Cart
            </button>
            <button className="flex w-full max-w-xs cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-green-600 p-3 text-sm text-green-700 transition hover:bg-green-600 hover:text-white sm:px-6 sm:py-3 sm:text-base">
              <CreditCard size={16} /> Buy Now
            </button>
          </div>
        </div>
      </section>

      <section className="mt-16 text-center">
        <h3 className="mb-8 text-2xl font-semibold text-gray-800">
          Shop Similar
        </h3>

        {products.filter(
          (p) => p.id !== product.id && p.category === product.category,
        ).length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-3 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 animate-bounce text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 3h18M9 3v18m6-18v18M4 21h16"
              />
            </svg>
            <p className="text-lg font-medium">
              Yah, produk serupa belum tersedia 😥
            </p>
            <p className="text-sm text-gray-400">
              Coba cek kategori lain, siapa tahu ada yang cocok!
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <div className="flex w-max gap-6 pb-6">
              {products
                .filter(
                  (p) => p.id !== product.id && p.category === product.category,
                )
                .map((item) => (
                  <CardItem key={item.id} data={item} />
                ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default ProductDetail;
