import { SearchOutlined } from "@ant-design/icons";
import { Badge, Input, Popover } from "antd";
import { SearchProps } from "antd/es/input";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function SearchBox() {
  const [popovervisible, setPopovervisible] = useState(false);
  const navigator = useRouter();

  const handlePopoverChange = (newOpen: boolean) => {
    setPopovervisible(newOpen);
  };

  const onFinish = ({ query }: { query: string }) => {
    setPopovervisible(false);
    navigator.push(`/products/search?q=${query}`);
  };

  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  const SearchBoxForm = () => {
    return (
      <Input.Search
        placeholder="accessories, animals, services ..."
        style={{ width: "100%" }}
        onSearch={onSearch}
        enterButton
        size="large"
      />
    );
  };

  return (
    <Popover
      placement="bottomRight"
      content={<SearchBoxForm />}
      trigger="click"
      open={popovervisible}
      onOpenChange={handlePopoverChange}
      style={{
        overflow: "hidden",
      }}
    >
      <Badge dot>
        <SearchOutlined className="searchIcon" />
      </Badge>
    </Popover>
  );
}

export default SearchBox;
