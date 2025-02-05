import { Container, Flex, Group, Text, Anchor } from "@mantine/core";
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin} from "@tabler/icons-react";

const FooterComponent = () => {
    return (
    <div style={{ backgroundColor: "black", padding: "2rem 0", borderTop: "1px solid #e9ecef", marginTop: "2rem" }}>
    <Container size="lg">
    <Flex justify="space-around" align="center">
        {/* Copyright Text */}
        <Text size="sm" color="white">
        © 2024 steez. All rights reserved.
        </Text>

        {/* Social Media Links */}
            <Group spacing="sm">
                <Text size="sm" color="white">
                    Follow us on social media:
                </Text>
                <Anchor href="https://www.facebook.com/efren.laris.1?mibextid=LQQJ4d" target="_blank" style={{ color: "white" }}>
                <IconBrandFacebook size={40} />
                </Anchor>
                <Anchor href="https://www.instagram.com/youbuiltlikeafart" target="_blank" style={{ color: "white" }}>
                <IconBrandInstagram size={40} />
                </Anchor>
                <Anchor href="https://www.linkedin.com/in/efren-laris-5605a7312" target="_blank" style={{ color: "white" }}>
                <IconBrandLinkedin size={40} />
                </Anchor>
            </Group>
    </Flex>
    </Container>
</div>
);
};

export default FooterComponent;
