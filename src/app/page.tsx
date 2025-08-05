import { Avatar, Button, Card, Menu } from "antd";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  StarFilled,
} from "@ant-design/icons";
import badgeIcon from "../../public/firstBadge.png";
import g2logo from "../../public/g2logo.png";
import imageSnip from "../../public/snip2.png";
import logo from "../../public/theysaid.png";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";

import Image from "next/image";
import Paragraph from "antd/es/typography/Paragraph";

const menuItems = [
  { key: "home", label: "Home" },
  { key: "product", label: "Product Overview" },
  { key: "resources", label: "Resources" },
  { key: "pricing", label: "Pricing" },
  { key: "contact", label: "Contact" },
];

const feedback = [
  {
    id: 1,
    name: "Alex Farmer",
    occupation: "Chief Revenue Office @ Nezasa",
    content:
      "Implementing TheySaid has led to a 5-10% increase in qualified leads from our existing customers in just a few months while reducing churn. The results speak for themselves",

    avatar:
      "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8fHww",
  },
  {
    id: 2,
    name: "Srikrishnan Ganesan",
    occupation: "Co-Founder & CEO @ Rocketlane",
    content:
      "Integrating TheySaid has been a game-changer. We've seen a 5-10% decrease in customer churn with an increase in upsell opportunities since its implementation",
    avatar:
      "https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW58ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    name: "Brook P.",
    occupation: "VP, Marketing @ DX",
    content:
      "How did TheySaid AI come up with such a great question recommendations? These are questions that our teams really want to know and discussed internally a lot. I am impressed!",

    avatar:
      "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFufGVufDB8fDB8fHww",
  },
];

export default function Home() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 40px",
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "linear-gradient(to top, #fff0f500 0%, #fff0f5 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Image src={logo} width={180} height={180} alt="logo" />

          <Menu
            mode="horizontal"
            selectable={false}
            items={menuItems}
            style={{
              background: "rgba(0,0,0,0)",
              margin: 10,
              fontSize: 18,
              fontWeight: 500,
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <Button
            style={{
              fontSize: 18,
              fontWeight: "bold",
              padding: 20,
            }}
          >
            Login
          </Button>
          <Button
            style={{
              fontSize: 18,
              fontWeight: "bold",
              padding: 20,
            }}
          >
            Get Started - Free
          </Button>
        </div>
      </div>
      <div
        style={{
          background: "linear-gradient(to top, #e5d8f4 0%, #fffff0 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: 30,
            gap: 20,
          }}
        >
          <div
            style={{
              background: "whitesmoke",
              padding: 5,
              borderRadius: 14,
              border: "2px solid orange",
            }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ margin: 5 }}>
                <Image src={badgeIcon} alt="badge" width={40} height={50} />
              </div>
              <div style={{ color: "orange" }}>
                <p style={{ fontWeight: "bold" }}>PRODUCT HUNT</p>
                <p style={{ fontWeight: "bold" }}>#1 Product of the Day</p>
              </div>
            </div>
          </div>
          <div
            style={{
              background: "white",
              padding: 5,
              borderRadius: "50px",
              border: "1px solid grey",
            }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ margin: 5 }}>
                <Image src={g2logo} alt="g2_logo" width={40} height={50} />
              </div>
              <div style={{ marginRight: 5 }}>
                <p style={{ fontWeight: "bold" }}>4.8/5 G2 Rating</p>
                <div>
                  <StarFilled style={{ color: "#ecb446" }} />{" "}
                  <StarFilled style={{ color: "#ecb446" }} />{" "}
                  <StarFilled style={{ color: "#ecb446" }} />{" "}
                  <StarFilled style={{ color: "#ecb446" }} />{" "}
                  <StarFilled style={{ color: "#ecb446" }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            textAlign: "center",
            justifyContent: "center",
            padding: 50,
            margin: 20,
          }}
        >
          <Title level={1}>Don&apos;t create a survey.</Title>
          <Title
            level={1}
            style={{
              marginTop: 0,
              fontSize: 80,
              fontWeight: "bold",
              marginBottom: 0,
            }}
          >
            Start a conversation
          </Title>
          <Text type="secondary" style={{ fontSize: 30, marginTop: 0 }}>
            10x your insights with AI surveys and interviews
          </Text>
          <div
            style={{
              justifyContent: "center",
              flexDirection: "column",
              marginTop: 25,
            }}
          >
            <Button
              icon={<ArrowRightOutlined />}
              iconPosition="end"
              style={{
                background:
                  "linear-gradient(to right, #f9708c 0%, #888bf3 100%)",
                color: "white",
                fontSize: 16,
                padding: 20,
                fontWeight: "600",
                borderRadius: 12,
              }}
            >
              Get Started Free
            </Button>
            <br />
            <Text type="secondary">
              <i>No credit card required</i>
            </Text>
          </div>
        </div>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
            width: "50%",
          }}
        >
          <Image
            src={imageSnip}
            alt="snip"
            style={{
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
              border: "8px solid whitesmoke",
            }}
          />
        </div>
      </div>

      <div style={{ background: "#f9fafc", paddingBottom: 30 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 30,
            padding: 50,
          }}
        >
          <div>
            <Title>See what our customers had to say</Title>
          </div>
          <div>
            <Button
              icon={<ArrowLeftOutlined />}
              style={{ borderRadius: 50, padding: 20 }}
            />{" "}
            <Button
              icon={<ArrowRightOutlined />}
              style={{ borderRadius: 50, padding: 20 }}
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "15px",
            justifyContent: "center",
          }}
        >
          {feedback.map((f) => (
            <Card
              key={f.id}
              style={{
                width: 400,
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "20px",
                borderRadius: 20,
              }}
            >
              <div style={{ position: "absolute", top: 16, left: 16 }}>
                <Avatar src={f.avatar} size={58} />
              </div>

              <div
                style={{
                  display: "flex",
                  paddingTop: "40px",
                  marginBottom: 20,
                }}
              >
                <Paragraph style={{ fontSize: 18 }}>"{f.content}"</Paragraph>
              </div>

              <div
                style={{
                  position: "absolute",
                  bottom: 16,
                  left: 16,
                  textAlign: "left",
                }}
              >
                <Title level={3} style={{ margin: 0 }}>
                  {f.name}
                </Title>
                <Text>{f.occupation}</Text>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
