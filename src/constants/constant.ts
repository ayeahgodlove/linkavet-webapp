export const TOKEN_KEY = "TOKEN_KEY";
export const USER_DATA = "USER_DATA";
import type { ThemeConfig } from "antd";

export const THEME: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary: "#81ce89",
  },
};

export enum STATUS {
  APPROVED = "APPROVED",
  PENDING = "PENDING",
  CANCELED = "CANCELED",
}
export const ROLES = {
  ADMIN: "ADMIN", // post products
  DOCTOR: "DOCTOR", //review appointments
  CREATOR: "CREATOR", //posting articles,
  PETOWNER: "PETOWNER", //or USERS make appointments
  TRAINER: "TRAINER",
  STUDENT: "STUDENT",
};

export enum AVAILABILITY_STATUS {
  IN_STOCK = "IN_STOCK",
  OUT_STOCK = "OUT_STOCK",
}

export const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { header: "3" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
