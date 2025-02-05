import { Flex, Container, Group, Burger, Text } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [opened, { toggle }] = useDisclosure(false);
    const isMobile = useMediaQuery("(max-width: 768px)");

    return (
        <>
        <div style={{ backgroundColor: "black", borderBottom: "1px solid #e9ecef", padding: "10px 0" }}>
        <Container size="lg">
        <Flex justify="space-between" align="center">

          {/* Logo */}
            <Text
            component={Link}
            to="/"
            weight={700}
            size="xl"
            style={{ textDecoration: "none", color: "white" }}
            >
            <img className="nav-logo" src="/logo2.png"></img>
            </Text>

          {/* Navigation Links */}
            {isMobile ? (
            // Mobile View: Burger menu
            <Burger 
            opened={opened} 
            onClick={toggle} 
            size="sm"
            color="white"
            />
            ) : (
            // Desktop View: Full navigation links
            <Group spacing="xl">
                <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "1rem" }}>
                    Home
                </Link>
                <Link to="/products" style={{ textDecoration: "none", color: "white", fontSize: "1rem" }}>
                    Products
                </Link>
                <Link to="/contact" style={{ textDecoration: "none", color: "white", fontSize: "1rem" }}>
                    Contact Us
                </Link>
            </Group>
            )}
        </Flex>
        </Container>
    </div>

    {isMobile && opened && (
                <div style={{
                    position: "fixed",
                    top: "65px", // navbar height
                    left: 0,
                    right: 0,
                    backgroundColor: "black",
                    padding: "20px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    zIndex: 1000,
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px"
                }}>
                    <Link 
                        to="/" 
                        onClick={() => toggle()} 
                        style={{ 
                            textDecoration: "none", 
                            color: "white", 
                            fontSize: "1.1rem",
                            padding: "10px",
                        }}
                    >
                        Home
                    </Link>
                    <Link 
                        to="/products" 
                        onClick={() => toggle()} 
                        style={{ 
                            textDecoration: "none", 
                            color: "white", 
                            fontSize: "1.1rem",
                            padding: "10px",
                        }}
                    >
                        Products
                    </Link>
                    <Link 
                        to="/contact" 
                        onClick={() => toggle()} 
                        style={{ 
                            textDecoration: "none", 
                            color: "white", 
                            fontSize: "1.1rem",
                            padding: "10px",
                        }}
                    >
                        Contact Us
                    </Link>
                </div>
            )}
        </>

    );
};



export default Navbar;