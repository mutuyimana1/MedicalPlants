import React from "react";

const Step1 = () => {
  return (
    <div>
      <div className="flex gap-4 flex-wrap mt-10">
        <Form.Item
          label="Name"
          name="title"
          rules={[
            {
              required: true,
              message: "Please input name of Plant!",
            },
          ]}
        >
          <Input
            style={{
              width: "100%",
              height: "45px",
            }}
          />
        </Form.Item>
        <Form.Item
          label="Scientific name"
          name="scientificName"
          rules={[
            {
              required: true,
              message: "Please enter Scientific name!",
            },
          ]}
        >
          <Input
            style={{
              width: "100%",
              height: "45px",
            }}
          />
        </Form.Item>
        <Form.Item
          label="Common name"
          name="commonName"
          rules={[
            {
              required: true,
              message: "Please enter Common name!",
            },
          ]}
        >
          <Input
            style={{
              width: "100%",
              height: "45px",
            }}
          />
        </Form.Item>
      </div>
      <Form.Item
        label="Plant Category"
        name="category"
        rules={[
          {
            required: true,
            message: "Please select category  of Plant!",
          },
        ]}
      >
        <Select
          labelInValue
          mode="single"
          defaultValue={{
            value: "vegetables",
            label: "Vegetables",
          }}
          style={{
            width: "100%",
            height: "45px",
          }}
          onChange={handleChange}
          options={categories.map((item) => {
            return {
              value: item._id,
              label: item.title,
            };
          })}
        />
      </Form.Item>
      <Form.Item
        label="Description"
        name="description"
        rules={[
          {
            required: true,
            message: "Please input plant description!",
          },
        ]}
      >
        <TextArea rows={3} placeholder="provide plant Descriptions" />
      </Form.Item>
    </div>
  );
};

export default Step1;
