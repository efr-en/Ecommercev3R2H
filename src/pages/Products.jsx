import { useState, useEffect } from 'react';
import { Container, Grid, TextInput, Select, Title, Card, Image, Text, Button } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState({ price: "", type: "" });
    const isMobile = useMediaQuery('(max-width: 768px)');

    useEffect(() => {
        const query = new URLSearchParams(filters).toString();
        fetch(`/api/products?${query}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Failed to fetch products');
                }
                return res.json();
            })
            
            .then((data) => setProducts(data))
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }, [filters]);

    const handleFilterChange = (key, value) => {
        setFilters((prev) => ({ ...prev, [key]: value }));
    };

    return (
        <Container size="lg" style={{ marginTop: "2rem" }}>
            <Title order={1} align="center" style={{ marginBottom: "2rem" }}>
                Products
            </Title>

            {/* Filter Products */}
            <Grid style={{ marginBottom: "2rem" }}>
                <Grid.Col span={isMobile ? 12 : 6}>
                    <TextInput
                        placeholder="Max Price"
                        label="Price Filter"
                        onChange={(e) => handleFilterChange("price", e.target.value)}
                    />
                </Grid.Col>
                <Grid.Col span={isMobile ? 12 : 6}>
                    <Select
                        label="Product Type"
                        placeholder="Choose a type"
                        data={[
                            { value: "deck", label: "Deck"},
                            { value: "shoes", label: "Shoes"},
                        ]}
                        onChange={(value) => handleFilterChange("type", value)}
                    />
                </Grid.Col>
            </Grid>

            {/* Products Card Grid */}
            <Grid>
                {products.map((product) => (
                    <Grid.Col key={product.id} span={isMobile ? 12 : 6}>
                        <Card shadow="md" padding="xl" radius="lg" withBorder>
                            <Card.Section className='product-image'>
                                <Image 
                                    src={product.image} 
                                    alt={product.title} 
                                    height={isMobile ? 400 : 600} 
                                    style={{ objectFit: "contain"}} 
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
            <Text size='md' align='center' style={{ marginTop: "2rem" }}>
                Looking for something we don't carry? Please <a href='/contact'>Contact Us</a>
            </Text>
        </Container>
    );
};

export default Products;