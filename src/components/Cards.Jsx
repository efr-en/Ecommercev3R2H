import { Grid, Card, Image, Text, Button } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

const Cards = ({ products }) => {
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <Grid>
            {products.map((product) => (
                <Grid.Col key={product.id} span={isMobile ? 12 : 6}>
                    <Card shadow="md" padding="xl" radius="lg" withBorder>
                        <Card.Section className='product-image'>
                            <Image
                                src={product.image}
                                alt={product.title}
                                height={isMobile ? 400 : 600}
                                style={{ objectFit: "contain" }}
                            />
                        </Card.Section>

                        <Text weight={500} size="lg" style={{ marginBottom: "1rem" }}>
                            {product.title}
                        </Text>
                        <Text size="sm" color="dimmed" style={{ marginBottom: "1rem" }}>
                            {product.description}
                        </Text>
                        <Text weight={700} size="md">
                            ${product.price}
                        </Text>
                        <Button variant="light" fullWidth style={{ marginTop: "1rem" }}>
                            Add to Cart
                        </Button>
                    </Card>
                </Grid.Col>
            ))}
        </Grid>
    );
};

export default Cards;