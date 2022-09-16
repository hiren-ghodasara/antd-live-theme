import { Button } from "antd";

const ButtonsSection = () => {
  return (
    <div className="example">
      <Button type="primary">Primary Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <Button type="primary" disabled>
        Primary(disabled)
      </Button>
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
    </div>
  );
};

export { ButtonsSection };
