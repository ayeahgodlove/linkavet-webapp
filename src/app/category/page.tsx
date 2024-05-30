import Products from "@components/products/products";
import { makeUpLabel } from "../../utils";
import { useParams } from "next/navigation";

function Category() {
  // returned from `useParams`
  const params = useParams();
  const key = params.categoryId;

  return (
    <>
      <h2>Category {makeUpLabel(key)}</h2>
      <div>
        <Products category={key}/>
      </div>
    </>
  );
}

export default Category;
