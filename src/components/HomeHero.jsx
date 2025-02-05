import { Text, Image, Button, Box } from "@mantine/core";
import { Link } from "react-router-dom";

function HomeHeroSection() {
    return (
        <>
            {/* Hero image + content container */}
            <Box 
                style={{ 
                    position: 'relative',
                    width: '100%',
                    margin: '0 auto',
                    marginBottom: '1rem'
                }}
            >
                <Image className="home-hero"
                    src="/nyjahHero.jpeg"
                    alt="nyjah hero"
                    radius="md"
                    style={{
                        width: '100%',
                        height: 'auto'
                    }}
                />
                
                {/* Overlay container for centered content */}
                <Box
                    style={{
                        position: 'absolute',
                        top: '55%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        textAlign: 'center',
                        width: '90%', // Slightly less than container width
                        padding: '0 2%'
                    }}
                >
                    <Text className="home-steez">
                    Welcome to steez
                    </Text>
                    
                    <Button
                        component={Link}
                        to="/products"
                        variant="filled"
                        styles={{
                            root: {
                                fontSize: 'clamp(0.7rem, 1.5vw, 1rem)',
                                padding: 'clamp(0.3rem, 1vw, 0.8rem) clamp(0.8rem, 2vw, 1.5rem)',
                                height: 'auto'
                            }
                        }}
                    >
                        Shop Now
                    </Button>
                </Box>
            </Box>

            <Text className="thrasher-steez" align="center" size="xl">
                Check out Thrasher's latest shoot below, or{" "}
                <a
                    href="https://www.thrashermagazine.com/articles/halloween-hellbomb-2024-photos/"
                    target="_blank"
                    rel="noreferrer"
                >
                    click here
                </a>
            </Text>
        </>
    );
}

export default HomeHeroSection;