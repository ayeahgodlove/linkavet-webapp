import { Card, Checkbox, Image } from "antd";
import { useEffect, useState } from "react";
import { makeUpLabel } from "../../utils";
import { FilterOutlined } from "@ant-design/icons";
import "./sidebar.scss";
import { useRouter } from "next/navigation";
import { categoryAPI } from "@store/api/category_api";

function Sidebar() {
  const [checkedList, setCheckedList] = useState<any[]>([]);
  const navigator = useRouter();

  const { data, isLoading, isFetching } =
    categoryAPI.useFetchAllCategoriesQuery();

  const onChange = (list: any) => {
    setCheckedList(list);
    navigator.push(`/products/categories/${list[0]}`);
  };
  useEffect(() => {
  }, [data, isLoading, isFetching]);

  return (
    <>
      <Card
        title={
          <div className="cardHeader">
            <FilterOutlined /> Categories
          </div>
        }
        style={{ borderRadius: 0 }}
      >
        <Checkbox.Group
          options={
            isLoading || isFetching
              ? []
              : data?.map((cat) => {
                  return { label: makeUpLabel(cat), value: cat.id };
                })
          }
          value={checkedList}
          onChange={onChange}
          className="categoriesGrp"
        />
      </Card>
      <Image
        src={"/images/64bc53a158e886d3f50a8cb8_Dog.png"}
        alt="Shopping with us"
        style={{ width: "350px", maxWidth: "80%" }}
      />
    </>
  );
}

export default Sidebar;
