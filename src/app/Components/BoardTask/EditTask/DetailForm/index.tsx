import {
  CheckOutlined,
  CloseOutlined,
  MenuOutlined,
  MinusOutlined,
  PauseOutlined,
  UpOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Collapse,
  Input,
  InputNumber,
  Select,
  Slider,
  Tag,
} from "antd";
import React from "react";

interface Props {
  isEstimateOpen: boolean;
  handleEstimateOpen: () => void;
  handleEstimateClose: () => void;
}

export default function DetailFormComponent({
  isEstimateOpen,
  handleEstimateOpen,
  handleEstimateClose,
}: Props) {
  const detailForm = () => {
    return (
      <div className="space-y-3">
        <div className="space-y-1">
          <p className="font-bold">Assignees</p>
          <Select
            placeholder={"Choose assignees..."}
            className="w-full"
            mode="multiple"
            size="large"
            options={[
              {
                label: (
                  <div className="flex items-center space-x-1">
                    <Avatar
                      size={"small"}
                      style={{ backgroundColor: "#f56a00" }}
                    >
                      K
                    </Avatar>
                    <span>luong</span>
                  </div>
                ),
                value: 1,
              },
              {
                label: (
                  <div className="flex items-center space-x-1">
                    <Avatar
                      size={"small"}
                      style={{ backgroundColor: "#f56a00" }}
                    >
                      K
                    </Avatar>
                    <span>quynh</span>
                  </div>
                ),
                value: 2,
              },
              {
                label: (
                  <div className="flex items-center space-x-1">
                    <Avatar
                      size={"small"}
                      style={{ backgroundColor: "#f56a00" }}
                    >
                      K
                    </Avatar>
                    <span>dat</span>
                  </div>
                ),
                value: 3,
              },
              {
                label: (
                  <div className="flex items-center space-x-1">
                    <Avatar
                      size={"small"}
                      style={{ backgroundColor: "#f56a00" }}
                    >
                      K
                    </Avatar>
                    <span>luong</span>
                  </div>
                ),
                value: 4,
              },
              {
                label: (
                  <div className="flex items-center space-x-1">
                    <Avatar
                      size={"small"}
                      style={{ backgroundColor: "#f56a00" }}
                    >
                      K
                    </Avatar>
                    <span>luong</span>
                  </div>
                ),
                value: 5,
              },
              {
                label: (
                  <div className="flex items-center space-x-1">
                    <Avatar
                      size={"small"}
                      style={{ backgroundColor: "#f56a00" }}
                    >
                      K
                    </Avatar>
                    <span>luong</span>
                  </div>
                ),
                value: 6,
              },
              {
                label: (
                  <div className="flex items-center space-x-1">
                    <Avatar
                      size={"small"}
                      style={{ backgroundColor: "#f56a00" }}
                    >
                      K
                    </Avatar>
                    <span>luong</span>
                  </div>
                ),
                value: 7,
              },
            ]}
          />
        </div>
        <div className="space-y-1">
          <span className="font-bold">Priority</span>
          <Select
            className="w-full"
            defaultValue={1}
            options={[
              {
                label: (
                  <div className="space-x-2">
                    <MinusOutlined className="text-green-400" />
                    <span>Lowest</span>
                  </div>
                ),
                value: 1,
              },
              {
                label: (
                  <div className="space-x-2">
                    <PauseOutlined rotate={90} className="text-blue-500" />
                    <span>Low</span>
                  </div>
                ),
                value: 2,
              },
              {
                label: (
                  <div className="space-x-2">
                    <MenuOutlined className="text-yellow-300" />
                    <span>Medium</span>
                  </div>
                ),
                value: 3,
              },
              {
                label: (
                  <div className="space-x-2">
                    <UpOutlined className="text-red-500" />
                    <span>High</span>
                  </div>
                ),
                value: 4,
              },
            ]}
          />
        </div>
        <div className="space-y-1">
          <span className="font-bold">Estimate</span>
          {isEstimateOpen ? (
            <div className="flex flex-wrap justify-end gap-1 border p-1">
              <Input onBlur={handleEstimateClose} autoFocus={isEstimateOpen} />
              <Button
                onClick={handleEstimateClose}
                icon={<CheckOutlined />}
                type="primary"
              />

              <Button onClick={handleEstimateClose} icon={<CloseOutlined />} />
            </div>
          ) : (
            <div onClick={handleEstimateOpen} className="hover:bg-gray-300 p-1">
              <Tag>500m</Tag>
            </div>
          )}
        </div>
        <div>
          <span className="font-bold">Time tracking</span>
          <div className="border p-1">
            <div className="flex justify-between">
              <div>
                <p>Time spent</p>
                <InputNumber
                  min={0}
                  defaultValue={0}
                  style={{ width: "120px" }}
                />
              </div>
              <div>
                <p>Time remaining</p>
                <InputNumber
                  min={0}
                  defaultValue={0}
                  style={{ width: "120px" }}
                />
              </div>
            </div>
            <Slider defaultValue={30} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <Collapse
      defaultActiveKey={1}
      expandIconPosition="end"
      items={[{ key: 1, label: "Detail", children: detailForm() }]}
    />
  );
}
