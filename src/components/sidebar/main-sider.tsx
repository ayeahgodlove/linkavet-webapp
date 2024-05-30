import { Card, Checkbox } from "antd";
import { useEffect, useState } from "react";
import { getAllProductsCategories } from "../../services/mock-endpoints";
import { makeUpLabel } from "../../utils";
import { FilterOutlined } from "@ant-design/icons";
import "./sidebar.scss";
import ShoppingImg from "../../assets/images/shopping.svg";
import { useRouter } from "next/navigation";

function Sidebar() {
  const [checkedList, setCheckedList] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const navigator = useRouter();

  useEffect(() => {
    getAllProductsCategories().then((resp) => {
      console.log(
        "🚀 ~ file: index.js:8 ~ getAllProductsCategories ~ resp:",
        resp
      );
      setCategories([...resp]);
    });
  }, []);

  const onChange = (list: any) => {
    console.log("🚀 ~ file: index.js:22 ~ onChange ~ list:", list);
    setCheckedList(list);
    navigator.push(`/products/categories/${list[0]}`);
  };

  return (
    <>
      <Card
        title={
          <div className="cardHeader">
            <FilterOutlined /> Products Categories
          </div>
        }
      >
        <Checkbox.Group
          options={categories.map((cat) => {
            return { label: makeUpLabel(cat), value: cat };
          })}
          value={checkedList}
          onChange={onChange}
          className="categoriesGrp"
        />
      </Card>

      <img
        src={ShoppingImg}
        alt="Shopping with us"
        style={{ width: "350px", maxWidth: "80%" }}
      />
    </>
  );
}

export default Sidebar;
