// components/UploadImage.tsx
import { Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadFile } from "antd/es/upload/interface";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "@constants/api-url";

const UploadImage = ({
  onUpload,
  maxCount = 1,
  folderName,
  name,
  extra = false,
  uri = "",
}: {
  onUpload: (url: string) => void;
  maxCount?: number;
  folderName: string;
  name: string;
  extra?: boolean;
  uri?: string;
}) => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handleChange = (info: any) => {
    setFileList(info.fileList);
    if (info.file.status === "done") {
      const url = info.file.response.data; // Assume the response contains the URL
      debugger;
      onUpload(url);
    }
  };

  const customRequest = async ({ file, onSuccess }: any) => {
    const formData = new FormData();
    formData.append(name, file);

    const response = await axios.post(
      extra
        ? `${API_URL}/api/uploads/${folderName}/${uri}`
        : `${API_URL}/api/uploads/${folderName}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    onSuccess(response.data);
  };

  return (
    <Upload
      maxCount={maxCount}
      name={name}
      customRequest={customRequest}
      onChange={handleChange}
      fileList={fileList}
    >
      <Button icon={<UploadOutlined />}>Upload Image</Button>
    </Upload>
  );
};

export default UploadImage;
