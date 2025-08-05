import { Button, Menu } from "antd";

export default function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 24px",
        borderBottom: "1px solid #f0f0f0",
        position: "sticky",
        top: 0,
        background: "#fff",
        zIndex: 100,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
        <h2 style={{ margin: 0, fontWeight: "bold", color: "#1677ff" }}>
          TheySaid
        </h2>

        <Menu mode="horizontal" selectable={false}>
          <Menu.Item key="home">Home</Menu.Item>
          <Menu.Item key="product">Product Overview</Menu.Item>
          <Menu.Item key="resources">Resources</Menu.Item>
          <Menu.Item key="pricing">Pricing</Menu.Item>
          <Menu.Item key="contact">Contact</Menu.Item>
        </Menu>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <Button type="text">Login</Button>
        <Button type="primary">Get Started - Free</Button>
      </div>
    </div>
  );
}
