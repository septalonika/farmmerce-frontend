export const dummyAddress = {
  name: "Andi Setiawan",
  phone: "0812-3456-7890",
  address: "Jl. Merpati No.123, Bandung, Jawa Barat, 40291",
};

export const dummyCartItems = [
  {
    id: "p1",
    name: "Beras Organik Premium",
    image:
      "https://www.ibmindonesia.com/storage/products/June2023/AOnFQKVW5OlmHbm6Pf8M.jpg",
    price: 12000,
    quantity: 2,
    unit: "kg",
  },
  {
    id: "p2",
    name: "Sayuran Segar Campuran",
    image:
      "https://media.istockphoto.com/id/453963935/id/foto/buah-dan-sayuran.jpg",
    price: 26000,
    quantity: 1,
    unit: "paket",
  },
];

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
