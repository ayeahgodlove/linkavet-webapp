"use client";
import { useEffect, useMemo, useState } from "react";
import Hashids from "hashids";
import { CartItem } from "@model/cart-item.model";

const hashids = new Hashids("Cumi", 10);

export function makeUpLabel(item: any) {
  let newTitle: string = item.name.charAt(0).toUpperCase() + item.name.slice(1);

  return newTitle.replace(/-(.)/g, function (match, group) {
    return " " + group.toUpperCase();
  });
}

export function hashidsEncode(anything: any) {
  debugger
  return hashids.encode(anything);
}

export function hashidsDecode(anything: any) {
  return hashids.decode(anything);
}

export function addCartItems(cartItems: CartItem[], addedItems: CartItem[]) {
  let newCartItems: CartItem[] = [];
  for (const item of addedItems) {
    newCartItems = addCartItem(newCartItems, item);
  }
  return newCartItems;
} 

export function addCartItem(cartItems: CartItem[], addedItem: CartItem) {
  let newCartItems: CartItem[] = [];
  const tmpCart = [...cartItems];
  let isExist: boolean = tmpCart.some((_item) => _item.id === addedItem.id);
  if (!!isExist) {
    newCartItems = tmpCart.map((_item) =>
      _item.id === addedItem.id
        ? {
            ..._item,
            quantity: _item.quantity + 1,
            total: _item.total + addedItem.price,
          }
        : _item
    );
  } else {
    newCartItems = [
      ...tmpCart,
      {
        ...addedItem,
        quantity: 1,
        total: addedItem.price,
        discountedPrice: Number(
          parseFloat(
            (
              (addedItem.price * (100 - addedItem.discountPercentage)) /
              100
            ).toString()
          ).toFixed(0)
        ),
      },
    ];
  }
  localStorage.setItem("order", JSON.stringify(newCartItems));
  console.log(
    "🚀 ~ file: index.js:41 ~ addCartItem ~ newCartItems:",
    newCartItems
  );
  return newCartItems;
}

export function removeCartItem(cartItems: any, removedItem: any) {
  let newCartItems = [...cartItems];
  localStorage.setItem("order", JSON.stringify(newCartItems));
  return newCartItems.filter((item) => item.id !== removedItem.id);
}

export function updateCart(cartItems: any) {
  localStorage.setItem("order", JSON.stringify(cartItems));
}

export function clearCart() {
  localStorage.setItem("order", JSON.stringify([]));
}

export default function useOnScreen(ref: any) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = useMemo(() => {
    if (typeof IntersectionObserver === "undefined") {
      return null; // Return null if IntersectionObserver is not defined
    }
    return new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );
  }, [ref]);

  useEffect(() => {
    if (!observer || !ref.current) return;
    observer?.observe(ref.current);
    return () => observer?.disconnect();
  }, [observer, ref]);

  return isIntersecting;
}
