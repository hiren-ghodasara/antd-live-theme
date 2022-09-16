import { Tabs } from "antd";
import { AndroidOutlined, AppleOutlined } from "@ant-design/icons";

const TabSection = () => {
  return (
    <div className="example">
      <div className="item">
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="Tab 1" key="1">
            Content of Tab Pane 1
          </Tabs.TabPane>
          <Tabs.TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </Tabs.TabPane>
          <Tabs.TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </Tabs.TabPane>
        </Tabs>
      </div>
      <div className="item">
        <Tabs
          defaultActiveKey="2"
          items={[AppleOutlined, AndroidOutlined].map((Icon, i) => {
            const id = String(i + 1);

            return {
              label: (
                <span>
                  <Icon />
                  Tab {id}
                </span>
              ),
              key: id,
              children: `Tab ${id}`,
            };
          })}
        />
      </div>
      <div className="item">
        <Tabs
          onChange={(key) => {
            console.log(key);
          }}
          type="card"
          items={new Array(3).fill(null).map((_, i) => {
            const id = String(i + 1);
            return {
              label: `Tab ${id}`,
              key: id,
              children: `Content of Tab Pane ${id}`,
            };
          })}
        />
      </div>
    </div>
  );
};

export { TabSection };
