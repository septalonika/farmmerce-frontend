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
  stock?: number; // optional
  rating?: number; // optional
  duration?: string; // optional, untuk service
};

type CardItemProps<T extends BaseItem> = {
  data: T;
  actionLabel?: string; // Text di button (ex: "Add to Cart" / "Ajukan Jasa")
  onActionClick?: (data: T) => void; // Function pas button diklik
  onDetailClick?: (data: T) => void;
};

export const CardItem = <T extends BaseItem>({
  data,
  actionLabel,
  onActionClick,
  onDetailClick,
}: CardItemProps<T>) => {
  return (
    <Card className="w-full max-w-xs overflow-hidden rounded-2xl shadow-lg transition-transform hover:scale-105">
      <CardHeader className="relative h-48 w-full p-0">
        <div className="relative h-full w-full">
          <Image
            src={data.image}
            alt={data.name}
            fill
            className="rounded-t-2xl object-cover"
          />
        </div>
      </CardHeader>

      <CardContent className="flex h-60 flex-col justify-between p-4">
        <div>
          <h3 className="text-lg font-semibold">{data.name}</h3>
          <p className="text-muted-foreground text-sm">{data.category}</p>
          <p className="text-primary mt-2 font-bold">
            Rp {data.price.toLocaleString()}
          </p>
          <p className="text-muted-foreground mt-2 line-clamp-2 text-sm">
            {data.description}
          </p>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-gray-500">
          {/* STOCK */}
          {data.stock !== undefined && (
            <Badge
              className={`rounded-full px-2 py-1 text-white transition-transform hover:scale-110 hover:shadow-md hover:shadow-green-300/50 ${
                data.stock > 10
                  ? "bg-green-500"
                  : data.stock > 0
                    ? "bg-yellow-500"
                    : "bg-red-500"
              }`}
            >
              {data.stock > 0 ? `Stok: ${data.stock}` : "Stok Habis"}
            </Badge>
          )}

          {/* RATING */}
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
                      <Star size={14} className="stroke-gray-400" />
                    )}
                  </div>
                );
              })}

              <span className="ml-1 text-gray-600">{data.rating}/5</span>
            </div>
          )}

          {/* DURASI */}
          {data.duration && (
            <div className="ml-auto flex items-center text-gray-500">
              <ClockIcon className="mr-1 h-4 w-4" />
              <span>{data.duration}</span>
            </div>
          )}
        </div>
      </CardContent>

      {(actionLabel || onDetailClick) && (
        <CardFooter className="flex w-full gap-2 p-4 pt-0">
          {actionLabel && onActionClick && (
            <CustomButton
              type="button"
              onClick={() => onActionClick(data)}
              label="Add to Cart"
              variant="primary"
              size="small"
              className="flex-1"
            />
          )}
          {onDetailClick && (
            <CustomButton
              type="button"
              onClick={() => onDetailClick(data)}
              label="Buy Now"
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
