"use client";

import React, { useState } from "react";
import CustomButton from "@/components/ui/CustomButton";
import {
  dummyAddress,
  dummyCartItems,
  dummyVoucher,
  shippingOptions,
  paymentMethods,
  dummyFreeShippingVoucher,
} from "@/data/dummyData";

const CheckoutPage: React.FC = () => {
  const [selectedPayment, setSelectedPayment] = useState("transfer");
  const [selectedShipping, setSelectedShipping] = useState("jne");
  const subtotal = dummyCartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const [voucherCode, setVoucherCode] = useState("");
  const [isVoucherApplied, setIsVoucherApplied] = useState(false);
  const [shippingVoucherCode, setShippingVoucherCode] = useState("");
  const [isFreeShippingApplied, setIsFreeShippingApplied] = useState(false);

  const handleApplyFreeShippingVoucher = () => {
    if (shippingVoucherCode === dummyFreeShippingVoucher.code) {
      if (subtotal < dummyFreeShippingVoucher.minimumPurchase) {
        alert(
          `Minimal belanja Rp${dummyFreeShippingVoucher.minimumPurchase.toLocaleString(
            "id-ID",
          )} untuk menggunakan voucher ini.`,
        );
        return;
      }
      setIsFreeShippingApplied(true);
    } else {
      alert("Kode voucher ongkir tidak valid");
    }
  };

  const handleApplyVoucher = () => {
    if (voucherCode === dummyVoucher.code) {
      if (subtotal < dummyVoucher.minimumPurchase) {
        alert(
          `Minimal belanja Rp${dummyVoucher.minimumPurchase.toLocaleString("id-ID")} untuk menggunakan voucher.`,
        );
        return;
      }
      setIsVoucherApplied(true);
    } else {
      alert("Kode voucher tidak valid");
    }
  };

  const shippingCost = isFreeShippingApplied
    ? 0
    : (shippingOptions.find((s) => s.id === selectedShipping)?.price ?? 0);

  const voucherDiscount =
    isVoucherApplied && subtotal >= dummyVoucher.minimumPurchase
      ? dummyVoucher.discount
      : 0;

  const total = subtotal + shippingCost - voucherDiscount;

  const handleCreateOrder = () => {
    alert("Pesanan berhasil dibuat!");
  };

  return (
    <div className="mx-auto mt-[70px] max-w-4xl space-y-6 p-4">
      {/* Alamat Penerima */}
      <section className="rounded-xl bg-white p-4 shadow">
        <h2 className="mb-2 text-lg font-bold">Alamat Penerima</h2>
        <div>
          <p className="font-medium">{dummyAddress.name}</p>
          <p>{dummyAddress.phone}</p>
          <p>{dummyAddress.address}</p>
          <button className="mt-2 text-sm text-green-600">Ubah Alamat</button>
        </div>
      </section>

      {/* Item yang Dibeli */}
      <section className="rounded-xl bg-white p-4 shadow">
        <h2 className="mb-2 text-lg font-bold">Item yang Dibeli</h2>
        <div className="space-y-4">
          {dummyCartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4">
              <img
                src={item.image}
                className="h-16 w-16 rounded object-cover"
              />
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">
                  {item.quantity} {item.unit} x Rp
                  {item.price.toLocaleString("id-ID")}
                </p>
              </div>
              <p className="ml-auto font-semibold">
                Rp{(item.quantity * item.price).toLocaleString("id-ID")}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Voucher */}
      <section className="rounded-xl bg-white p-4 shadow">
        <h2 className="mb-2 text-lg font-bold">Voucher Toko</h2>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Masukkan kode voucher"
            value={voucherCode}
            onChange={(e) => setVoucherCode(e.target.value)}
            className="flex-1 rounded border p-2"
          />
          <CustomButton
            type="button"
            label={isVoucherApplied ? "Terapkan ✔" : "Terapkan"}
            onClick={handleApplyVoucher}
            variant="secondary"
            size="small"
            disabled={isVoucherApplied}
          />
        </div>
        {isVoucherApplied && (
          <p className="mt-1 text-sm text-green-600">
            Voucher <strong>{dummyVoucher.code}</strong> berhasil diterapkan!
          </p>
        )}
      </section>

      {/* Pengiriman */}
      <section className="rounded-xl bg-white p-4 shadow">
        <h2 className="mb-2 text-lg font-bold">Opsi Pengiriman</h2>
        <select
          className="w-full rounded border p-2"
          value={selectedShipping}
          onChange={(e) => setSelectedShipping(e.target.value)}
        >
          {shippingOptions.map((opt) => (
            <option key={opt.id} value={opt.id}>
              {opt.name} - Rp{opt.price.toLocaleString("id-ID")}
            </option>
          ))}
        </select>
      </section>

      {/* Voucher Gratis Ongkir */}
      <section className="rounded-xl bg-white p-4 shadow">
        <h2 className="mb-2 text-lg font-bold">Voucher Gratis Ongkir</h2>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Masukkan kode voucher"
            value={shippingVoucherCode}
            onChange={(e) =>
              setShippingVoucherCode(e.target.value.toUpperCase())
            }
            className="flex-1 rounded border p-2"
          />
          <CustomButton
            type="button"
            label={isFreeShippingApplied ? "Terapkan ✔" : "Terapkan"}
            onClick={handleApplyFreeShippingVoucher}
            variant="secondary"
            size="small"
            disabled={isFreeShippingApplied}
          />
        </div>
        {isFreeShippingApplied && (
          <p className="mt-1 text-sm text-green-600">
            Voucher <strong>{dummyFreeShippingVoucher.code}</strong> berhasil
            diterapkan!
          </p>
        )}
      </section>

      {/* Metode Pembayaran */}
      <section className="rounded-xl bg-white p-4 shadow">
        <h2 className="mb-2 text-lg font-bold">Metode Pembayaran</h2>
        <select
          className="w-full rounded border p-2"
          value={selectedPayment}
          onChange={(e) => setSelectedPayment(e.target.value)}
        >
          {paymentMethods.map((method) => (
            <option key={method.id} value={method.id}>
              {method.name}
            </option>
          ))}
        </select>
      </section>

      {/* Rincian Pembayaran */}
      <section className="rounded-xl bg-white p-4 shadow">
        <h2 className="mb-2 text-lg font-bold">Rincian Pembayaran</h2>
        <div className="space-y-1 text-sm">
          <div className="flex justify-between">
            <span>Subtotal Produk</span>
            <span>Rp{subtotal.toLocaleString("id-ID")}</span>
          </div>
          <div className="flex justify-between">
            <span>Ongkir</span>
            <span>
              Rp
              {isFreeShippingApplied
                ? (
                    shippingOptions.find((s) => s.id === selectedShipping)
                      ?.price ?? 0
                  ).toLocaleString("id-ID")
                : shippingCost.toLocaleString("id-ID")}
            </span>
          </div>
          {isFreeShippingApplied && (
            <div className="flex justify-between text-green-600">
              <span>Diskon Ongkir</span>
              <span>
                - Rp
                {(
                  shippingOptions.find((s) => s.id === selectedShipping)
                    ?.price ?? 0
                ).toLocaleString("id-ID")}
              </span>
            </div>
          )}
          <div className="flex justify-between">
            <span>Diskon Voucher</span>
            <span>
              - Rp
              {isVoucherApplied
                ? dummyVoucher.discount.toLocaleString("id-ID")
                : "0"}
            </span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between text-lg font-semibold">
            <span>Total</span>
            <span>Rp{total.toLocaleString("id-ID")}</span>
          </div>
        </div>
      </section>

      {/* Tombol Buat Pesanan */}
      <div className="text-right">
        <CustomButton
          type="button"
          label="Buat Pesanan"
          onClick={handleCreateOrder}
          variant="primary"
        />
      </div>
    </div>
  );
};

export default CheckoutPage;
