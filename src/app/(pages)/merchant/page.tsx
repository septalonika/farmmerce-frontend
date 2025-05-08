"use client";
import { products, stores } from "@/data/dummyData";
import { Product } from "@/interface/products";
import React, { useState } from "react";
import { FiEdit, FiTrash, FiPlus } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const currentUserId = "user123";

const DashboardSeller = () => {
  const [storesList] = useState(stores);
  const [productsList, setProductsList] = useState(products);
  const [form, setForm] = useState({
    name: "",
    price: 0,
    stock: 0,
    category: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Menampilkan produk berdasarkan store_id
  const getStoreProducts = (storeId: string) => {
    return productsList.filter((product) => product.store.store_id === storeId);
  };

  // Filter toko yang hanya dimiliki oleh pengguna yang sedang login
  const userStores = storesList.filter(
    (store) => store.owner_id === currentUserId,
  );

  // Fungsi untuk membuka modal
  const openModal = (product: Product | null = null) => {
    setSelectedProduct(product);
    setForm(
      product
        ? {
            name: product.name,
            price: product.price,
            stock: product.stock,
            category: product.category,
          }
        : {
            name: "",
            price: 0,
            stock: 0,
            category: "",
          },
    );
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    setForm({ name: "", price: 0, stock: 0, category: "" });
  };

  // Fungsi untuk menampilkan notifikasi
  const showNotification = (message: string) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleDeleteProduct = (productId: string) => {
    setProductsList((prevList) =>
      prevList.filter((product) => product.id !== productId),
    );
    showNotification("Produk berhasil dihapus");
  };

  return (
    <div className="mt-[70px] min-h-screen p-8 text-gray-900">
      {userStores.map((store) => (
        <section key={store.store_id} className="rounded-lg p-6">
          <header className="mb-8 flex items-center space-x-6">
            <img
              src={store.logo}
              alt={`${store.name} Logo`}
              className="h-20 w-20 rounded-full shadow-md"
            />
            <div>
              <h2 className="text-3xl font-semibold">{store.name}</h2>
              <p className="text-lg text-gray-700">{store.description}</p>
            </div>
          </header>

          {/* Tombol Tambah Produk */}
          <div className="mb-4 flex justify-end">
            <button
              onClick={() => openModal()}
              className="flex items-center rounded-lg bg-indigo-500 px-6 py-3 text-white transition duration-200 ease-in-out hover:bg-indigo-600"
            >
              <FiPlus size={20} className="mr-2" /> Tambah Produk
            </button>
          </div>

          {/* Tabel Produk */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold">Produk Toko</h3>
            <table className="min-w-full table-auto overflow-hidden rounded-lg border border-gray-300">
              <thead>
                <tr className="bg-indigo-500 text-white">
                  <th className="px-6 py-4 text-left text-sm font-medium">
                    Nama Produk
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium">
                    Kategori
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium">
                    Harga
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium">
                    Stok
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-medium">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {getStoreProducts(store.store_id).map((product) => (
                  <tr
                    key={product.id}
                    className="transition duration-200 ease-in-out hover:bg-gray-50"
                  >
                    <td className="px-6 py-4 text-sm">{product.name}</td>
                    <td className="px-6 py-4 text-sm">{product.category}</td>
                    <td className="px-6 py-4 text-sm">Rp {product.price}</td>
                    <td className="px-6 py-4 text-sm">{product.stock}</td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => openModal(product)}
                        className="mr-4 text-indigo-600 hover:text-indigo-800"
                      >
                        <FiEdit size={20} />
                      </button>
                      <button
                        onClick={() => handleDeleteProduct(product.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <FiTrash size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}

      {/* Modal untuk Menambah atau Mengedit Produk */}
      {isModalOpen && (
        <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div className="w-1/3 rounded-lg bg-white p-6 shadow-xl">
            <h2 className="mb-4 text-2xl font-semibold">
              {selectedProduct ? "Edit Produk" : "Tambah Produk"}
            </h2>
            <input
              type="text"
              placeholder="Nama Produk"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="mb-4 w-full rounded-lg border border-gray-300 p-2"
            />

            <input
              type="number"
              placeholder="Harga"
              value={form.price}
              onChange={(e) =>
                setForm({ ...form, price: Number(e.target.value) })
              }
              className="mb-4 w-full rounded-lg border border-gray-300 p-2"
            />

            <input
              type="number"
              placeholder="Stok"
              value={form.stock}
              onChange={(e) =>
                setForm({ ...form, stock: Number(e.target.value) })
              }
              className="mb-4 w-full rounded-lg border border-gray-300 p-2"
            />

            <input
              type="text"
              placeholder="Kategori"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="mb-4 w-full rounded-lg border border-gray-300 p-2"
            />

            <textarea
              placeholder="Deskripsi"
              className="mb-4 w-full rounded-lg border border-gray-300 p-2"
            />
            <div className="flex justify-between">
              <button
                onClick={closeModal}
                className="rounded-lg bg-gray-400 px-4 py-2 text-white hover:bg-gray-500"
              >
                Batal
              </button>
              <button
                onClick={() => {
                  showNotification("Produk berhasil disimpan");
                  closeModal();
                }}
                className="rounded-lg bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-600"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default DashboardSeller;
