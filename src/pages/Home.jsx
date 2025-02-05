import { Container, Title, Text } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import HomeHeroSection from '../components/HomeHero';
import '../index.css'


const Home = () => {
    const carouselStyles = {
        height: 400, // Fixed height for the carousel
        maxWidth: "100%", // Prevents overflow
        margin: "0 auto", // Centers the carousel horizontally
        borderRadius: "8px", // Optional: Rounded corners for a cleaner look
        overflow: "hidden", // Hides content outside of the carousel boundaries
    };

    return (
        <Container size="lg" style={{ marginTop: "2.5rem" }}>
            {/* <Title className="home-steez" align="center" order={1}>
            </Title> */}
            <HomeHeroSection />

            <Carousel className='home-carousel'
            withIndicators
            height={400}
            slideSize="100%"
            loop
            dragFree
            align="start"
            styles={{
                indicator: {
                    width: 12,
                    height: 4,
                    transition: "width 400ms ease",
                    "&[dataActive]": {
                        width: 24,
                    },
                },
            }}
                style={carouselStyles}
            >
                <Carousel.Slide>
                    <img
                    src="/shred1.jpg"
                    alt="..."
                    style={{ width: "100%", height: "100%", objectFit: "contain" }}
                    />
                </Carousel.Slide>

                <Carousel.Slide>
                    <img
                    src="/shred2.jpg"
                    alt="..."
                    style={{ width: "100%", height: "100%", objectFit: "contain" }}
                    />
                </Carousel.Slide>

                <Carousel.Slide>
                    <img
                    src="/shred3.jpg"
                    alt="..."
                    style={{ width: "100%", height: "100%", objectFit: "contain" }}
                    />
                </Carousel.Slide>

                <Carousel.Slide>
                    <img
                    src="/shred4.jpg"
                    alt="..."
                    style={{ width: "100%", height: "100%", objectFit: "contain" }}
                    />
                </Carousel.Slide>

                <Carousel.Slide>
                    <img
                    src="/shred5.jpg"
                    alt="..."
                    style={{ width: "100%", height: "100%", objectFit: "contain" }}
                    />
                </Carousel.Slide>
            </Carousel>
        </Container>
    );
};

export default Home;