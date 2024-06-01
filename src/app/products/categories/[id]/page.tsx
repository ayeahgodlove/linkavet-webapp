import Products from "@components/products/products";
import { makeUpLabel } from "../../../../utils";
import DefaultLayout from "@layouts/default-layout";
import PageContent from "@components/page-content/page-content";

export default function IndexPage({ params }: { params: { id: string } }) {
  const key = params.id;

  return (
    <DefaultLayout>
      <PageContent hasSider>
        {/* <h2>Category {makeUpLabel(key)}</h2> */}
        <div>
          <Products category={key} />
        </div>
      </PageContent>
    </DefaultLayout>
  );
}
