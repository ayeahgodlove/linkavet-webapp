"use client";
import { useEffect, useMemo, useState } from "react";
import Hashids from "hashids";

const hashids = new Hashids("Cumi", 10);

export function makeUpLabel(item: any) {
  let newTitle: string = item.name.charAt(0).toUpperCase() + item.name.slice(1);

  return newTitle.replace(/-(.)/g, function (match, group) {
    return " " + group.toUpperCase();
  });
}

export function hashidsEncode(anything: any) {
  
  return hashids.encode(anything);
}

export function hashidsDecode(anything: any) {
  return hashids.decode(anything);
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
