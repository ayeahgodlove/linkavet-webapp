// AppointmentForm.tsx

import React from "react";
import { Form, Input, DatePicker, Button, Select, Row, Col } from "antd";
import { emptyAppointment, IAppointment } from "@model/health/appointment";
import { useRouter } from "next/navigation";

const AppointmentForm: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useRouter();

  const handleSubmit = async (values: any) => {
    const obj: IAppointment = {
      ...emptyAppointment,
      ...values,
      // userId: user.id,
      isConfirmed: false,
      durationMinutes: 0,
    };

    // const feedback = await addAppointment(obj);
    // if (feedback) {
    //   message.success("Appointment set successfully!");
    //   navigate.push("/appointments");
    // } else {
    //   message.error("failed to set appointment!");
    // }
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  // Filter `option.label` match the user type `input`
  const filterOption = (
    input: string,
    option?: { label: string; value: string }
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  return (
    <Form
      layout="vertical"
      initialValues={{ ...emptyAppointment }}
      onFinish={handleSubmit}
      form={form}
    >
      <Form.Item
        label="Full Name"
        name={"fullName"}
        rules={[{ required: true, message: "Your Name is Required!" }]}
      >
        <Input size="large" placeholder="Enter your name" />
      </Form.Item>

      <Row justify={"start"}>
        <Col xs={24} md={12}>
          <Form.Item
            label="Email"
            name={"email"}
            rules={[{ required: true, message: "Your Email is Required!" }]}
          >
            <Input size="large" placeholder="Enter your email" />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item
            label="Contact Number"
            name={"contact"}
            rules={[{ required: true, message: "Your Contact is Required!" }]}
            style={{ marginLeft: 10 }}
          >
            <Input size="large" placeholder="Enter your contact" />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item
        label="Doctor's Name"
        name={"doctorId"}
        rules={[
          {
            required: true,
            message: "Select a medical practitioner to consult",
          },
        ]}
      >
        <Select
          size="large"
          showSearch
          optionFilterProp="children"
          placeholder={"Select Professional"}
          onChange={onSearch}
          onSearch={onSearch}
          filterOption={filterOption}
          // options={
          //   specialties.length > 0
          //     ? specialties.map((r) => {
          //         return {
          //           label: `${r.fullname}`,
          //           value: r.userId,
          //         };
          //       })
          //     : [{ label: "No data", value: "" }]
          // }
        />
      </Form.Item>

      <Row justify={"start"}>
        <Col xs={24} md={12}>
          <Form.Item
            label="Appointment Date"
            name={"appointmentDate"}
            rules={[{ required: true, message: "Date is Required!" }]}
          >
            <DatePicker
              size="large"
              format={"DD/MM/YYYY"}
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item
            label="Appointment Time"
            name={"appointmentTime"}
            rules={[{ required: true, message: "Time is Required!" }]}
            style={{ marginLeft: 10 }}
          >
            <DatePicker
              size="large"
              picker={"time"}
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item
        label="Symptoms"
        name={"symptoms"}
        rules={[{ required: true, message: "Enter identifiable symptoms!" }]}
      >
        <Input.TextArea size="large" rows={3} placeholder="Enter symptoms" />
      </Form.Item>

      <Button htmlType="submit" type="primary">
        Book Appointment
      </Button>
    </Form>
  );
};

export default AppointmentForm;
