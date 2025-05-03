export const dummyAddress = {
  name: "Andi Setiawan",
  phone: "0812-3456-7890",
  address: "Jl. Merpati No.123, Bandung, Jawa Barat, 40291",
};

export const dummyVoucher = {
  code: "HEMAT5RB",
  discount: 5000,
  minimumPurchase: 50000,
};

export const shippingOptions = [
  { id: "jne", name: "JNE (2-3 hari)", price: 9000 },
  { id: "sicepat", name: "SiCepat (1-2 hari)", price: 10000 },
  { id: "anteraja", name: "AnterAja (3-4 hari)", price: 8000 },
];

export const paymentMethods = [
  { id: "transfer", name: "Transfer Bank (VA)" },
  { id: "ewallet", name: "E-Wallet (OVO, GoPay, ShopeePay)" },
  { id: "cod", name: "COD (Bayar di Tempat)" },
];

export const dummyFreeShippingVoucher = {
  code: "ONGKIRGRATIS",
  freeShipping: true,
  minimumPurchase: 30000,
};

export const products = [
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
    unit: "kg", // Menambahkan unit
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
    unit: "paket", // Menambahkan unit
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
    unit: "tahun", // Menambahkan unit
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
    unit: "kg", // Menambahkan unit
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
    unit: "pack", // Menambahkan unit
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
    unit: "sesi", // Menambahkan unit
  },
];
