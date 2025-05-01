"use client";

import React from "react";
import CustomButton from "@/components/ui/CustomButton";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@mui/material";
import { ClockIcon, Star, StarHalf } from "lucide-react";

export type BaseItem = {
  id: string;
  name: string;
  image: string;
  price: number;
  description: string;
  category: string;
  stock?: number;
  rating?: number;
  duration?: string;
};

type CardItemProps<T extends BaseItem> = {
  data: T;
  addToCartLabel?: string; // Label buat Add to Cart button
  buyNowLabel?: string;
  onAddToCartClick?: (data: T) => void;
  onBuyNowClick?: (data: T) => void;
};

export const CardItem = <T extends BaseItem>({
  data,
  addToCartLabel,
  buyNowLabel,
  onAddToCartClick,
  onBuyNowClick,
}: CardItemProps<T>) => {
  return (
    <Card className="w-full max-w-xs overflow-hidden rounded-3xl border bg-white shadow-md transition-all">
      <CardHeader className="group relative h-52 w-full overflow-hidden p-0">
        <Image
          src={data.image}
          alt={data.name}
          fill
          className="object-cover transition-transform group-hover:scale-110"
        />

        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/10 transition-all duration-700 ease-in-out group-hover:bg-black/70 group-hover:backdrop-blur-xs" />

        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
          <button
            type="button"
            className="relative cursor-pointer overflow-hidden rounded-full bg-gradient-to-r from-[#232526] to-[#414345] px-8 py-2 text-sm font-bold text-white shadow-md transition-all duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <span className="relative z-10">View All</span>

            {/* Efek Shine */}
            <span className="absolute inset-0 translate-x-[-100%] bg-white/10 opacity-0 blur-md transition-all duration-700 group-hover:translate-x-[100%] group-hover:opacity-100"></span>
          </button>
        </div>
      </CardHeader>

      <CardContent className="flex h-54 flex-col justify-between space-y-3 p-4">
        <div className="space-y-1">
          <h3 className="truncate text-lg font-bold text-gray-800">
            {data.name}
          </h3>
          <p className="text-xs text-gray-400">{data.category}</p>

          <div className="mt-1 flex items-center justify-between">
            {data.rating !== undefined && (
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, index) => {
                  const rating = data.rating ?? 0;
                  return (
                    <div key={index}>
                      {rating >= index + 1 ? (
                        <Star
                          size={14}
                          className="fill-yellow-400 stroke-yellow-400"
                        />
                      ) : rating >= index + 0.5 ? (
                        <StarHalf
                          size={14}
                          className="fill-yellow-400 stroke-yellow-400"
                        />
                      ) : (
                        <Star size={14} className="stroke-gray-300" />
                      )}
                    </div>
                  );
                })}
                <span className="ml-1 text-gray-500">{data.rating}/5</span>
              </div>
            )}

            <div className="flex flex-wrap items-center gap-2 text-xs">
              {data.stock !== undefined && (
                <Badge
                  className={`rounded-full px-2 py-1 text-white ${
                    data.stock > 10
                      ? "bg-green-500"
                      : data.stock > 0
                        ? "bg-yellow-400"
                        : "bg-red-500"
                  }`}
                >
                  {data.stock > 0 ? `Stok: ${data.stock}` : "Stok Habis"}
                </Badge>
              )}
            </div>
          </div>

          <div className="mt-2 flex items-center justify-between">
            <p className="text-primary text-lg font-bold">
              Rp {data.price.toLocaleString()}
            </p>

            {data.duration && (
              <div className="flex items-center text-xs text-gray-400">
                <ClockIcon className="mr-1 h-4 w-4" />
                <span>{data.duration}</span>
              </div>
            )}
          </div>

          <p className="mt-2 line-clamp-2 text-sm text-gray-600">
            {data.description}
          </p>
        </div>
      </CardContent>

      {/* Action Buttons */}
      {(onAddToCartClick || onBuyNowClick) && (
        <CardFooter className="flex w-full gap-2 p-4 pt-0">
          {addToCartLabel && onAddToCartClick && (
            <CustomButton
              type="button"
              onClick={() => onAddToCartClick(data)}
              label={addToCartLabel}
              variant="primary"
              size="small"
              className="flex-1"
            />
          )}
          {buyNowLabel && onBuyNowClick && (
            <CustomButton
              type="button"
              onClick={() => onBuyNowClick(data)}
              label={buyNowLabel}
              variant="secondary"
              size="small"
              className="flex-1"
            />
          )}
        </CardFooter>
      )}
    </Card>
  );
};
