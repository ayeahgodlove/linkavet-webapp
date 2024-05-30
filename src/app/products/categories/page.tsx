import Products from "@components/products/products";
import { makeUpLabel } from "../../../utils";

export default function IndexPage({ params }: { params: { id: string } }) {
  const key = params.id;

  return (
    <>
      <h2>Category {makeUpLabel(key)}</h2>
      <div>
        <Products category={key}/>
      </div>
    </>
  );
}
