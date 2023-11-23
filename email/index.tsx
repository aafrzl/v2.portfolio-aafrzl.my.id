import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components"

interface ContactEmailProps {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactEmail({
  name,
  email,
  subject,
  message,
}: ContactEmailProps) {
  const baseUrl = "https://aafrzl.my.id/"

  return (
    <Html>
      <Head>
        <title>{`Message from ${name}`}</title>
      </Head>
      <Preview>Message from ${name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={box}>
            <Column align="center">
              <Link style={headingLink} href={baseUrl}>
                Coding with Afrizal
              </Link>
            </Column>
          </Section>

          <Section style={box}>
            <Hr style={hr} />
            <Heading
              as="h2"
              style={{
                color: "white",
                textAlign: "center",
              }}
            >
              {subject}
            </Heading>
            <Hr style={hrTransparent} />

            {message.split("\n").map((line, index) => (
              <Text key={index} style={text}>
                {line ? line : "\u00A0"}
              </Text>
            ))}

            <Hr style={hrTransparent} />
            <Text style={text}>{name}</Text>
            <Link style={{ ...text, ...anchor }} href={`mailto:${email}`}>
              {email}
            </Link>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: "#000",
  fontFamily: "Work Sans, sans-serif",
  padding: "60px 0",
}

const container = {
  backgroundColor: "#1b1c20",
  margin: "0 auto",
  padding: "20px 0 48px",
  borderRadius: "12px",
  boxShadow: "0 0 6px 0 #82E6BC",
}

const box = {
  padding: "0 48px",
}

const hr = {
  borderColor: "#82e6bc7d",
  margin: "20px 0",
}

const hrTransparent = {
  borderColor: "transparent",
  margin: "20px 0",
}

const headingLink = {
  fontSize: "18px",
  lineHeight: "24px",
  color: "#82E6BC",
}

const text = {
  color: "#fff",
  fontSize: "16px",
  lineHeight: "24px",
  margin: 0,
  textAlign: "left" as const,
}

const anchor = {
  color: "#82E6BC",
}
