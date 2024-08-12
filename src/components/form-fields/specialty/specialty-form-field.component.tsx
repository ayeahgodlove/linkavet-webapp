import { userAPI } from "@store/api/user_api";
import { Form, Input, Select } from "antd";
import React from "react";

const SpecialtyFormField = () => {
  const {
    data: users,
    isLoading: isLoadingUser,
    isFetching: isFetchUser,
  } = userAPI.useFetchAllUsersQuery(1);

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  // Filter `option.label` match the user type `input`
  const filterOption = (
    input: string,
    option?: { label: string; value: string }
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  return (
    <>
      <Form.Item
        name="userId"
        label=""
        style={{ marginBottom: 10 }}
        rules={[
          {
            required: true,
            message: "Specialty is required",
          },
        ]}
      >
        <Select
          size="large"
          showSearch
          placeholder="Select ..."
          optionFilterProp="children"
          onChange={onSearch}
          onSearch={onSearch}
          filterOption={filterOption}
          options={
            users && users.length
              ? users.map((r) => {
                  return {
                    label: r.username,
                    value: r.id,
                  };
                })
              : []
          }
        />
      </Form.Item>
      <Form.Item
        name="twitter"
        label="Twitter"
        style={{ marginBottom: 10 }}
        rules={[
          {
            required: true,
            message: "Twitter is required",
          },
        ]}
      >
        <Input size="large" />
      </Form.Item>

      <Form.Item
        name="fullname"
        label="Fullname"
        style={{ marginBottom: 10 }}
        rules={[
          {
            required: true,
            message: "Full Name is required",
          },
        ]}
      >
        <Input size="large" />
      </Form.Item>

      <Form.Item
        name="yearsOfExperience"
        label="Years Of Experience"
        style={{ marginBottom: 10 }}
        rules={[
          {
            required: true,
            message: "Years Of Experience is required",
          },
        ]}
      >
        <Input size="large" />
      </Form.Item>

      <Form.Item
        name="title"
        label="Title"
        style={{ marginBottom: 10 }}
        rules={[
          {
            required: true,
            message: "Title is required",
          },
        ]}
      >
        <Input size="large" />
      </Form.Item>

      <Form.Item
        name="website"
        label="Website"
        style={{ marginBottom: 10 }}
        rules={[
          {
            required: true,
            message: "Website is required",
          },
        ]}
      >
        <Input size="large" />
      </Form.Item>
      <Form.Item
        name="facebook"
        label="Facebook"
        style={{ marginBottom: 10 }}
        rules={[
          {
            required: true,
            message: "Facebook is required",
          },
        ]}
      >
        <Input size="large" />
      </Form.Item>
      <Form.Item
        name="linkedin"
        label="Linkedin"
        style={{ marginBottom: 10 }}
        rules={[
          {
            required: true,
            message: "Linkedin is required",
          },
        ]}
      >
        <Input size="large" />
      </Form.Item>
      <Form.Item
        name="specialty"
        label="Specialty"
        style={{ marginBottom: 10 }}
        rules={[
          {
            required: true,
            message: "Specialty is required",
          },
        ]}
      >
        <Input size="large" />
      </Form.Item>
    </>
  );
};

export default SpecialtyFormField;
