import React from "react";
import CustomButton from "../ui/CustomButton";

type CartItem = {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  unit: string;
};

type MyShoppingBagProps = {
  cartItems: CartItem[];
  onQuantityChange: (id: string, newQty: number) => void;
  onRemove: (id: string) => void;
};

export const ShoppingBag: React.FC<MyShoppingBagProps> = ({
  cartItems,
  onQuantityChange,
  onRemove,
}) => {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center p-4">
      <h2 className="mb-4 text-2xl font-bold">🛒 My Shopping Bag</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Keranjangmu masih kosong.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between gap-4 rounded-xl border p-4 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-20 w-20 rounded-md object-cover"
                />
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-600">
                    Rp {item.price.toLocaleString()} / {item.unit}
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <label className="text-sm">Qty:</label>
                    <input
                      type="number"
                      value={item.quantity}
                      min={1}
                      className="w-16 rounded-md border px-2 py-1"
                      onChange={(e) =>
                        onQuantityChange(item.id, parseInt(e.target.value))
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <p className="mb-1 text-right text-sm text-gray-500">
                  Subtotal:
                </p>
                <p className="font-bold text-green-600">
                  Rp {(item.price * item.quantity).toLocaleString()}
                </p>
                <button
                  onClick={() => onRemove(item.id)}
                  className="mt-2 text-sm text-red-500 hover:underline"
                >
                  Hapus
                </button>
              </div>
            </div>
          ))}

          <div className="flex items-center justify-between border-t pt-4">
            <span className="text-lg font-semibold">Total:</span>
            <span className="text-xl font-bold text-green-700">
              Rp {totalPrice.toLocaleString()}
            </span>
          </div>

          <CustomButton
            type="button"
            label="Checkout Sekarang"
            onClick={() => console.log("Lanjut ke checkout")}
            variant="primary"
            size="large"
            className="w-full"
          />
        </div>
      )}
    </div>
  );
};
