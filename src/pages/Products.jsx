import { useState, useEffect } from 'react';
import { Container, Grid, TextInput, Select, Title, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Cards from '../components/Cards';

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

            {/* Display Products with cards */}
            <Cards products={products} />

            <Text size='md' align='center' style={{ marginTop: "2rem" }}>
                Looking for something we don't carry? Please <a href='/contact'>Contact Us</a>
            </Text>
        </Container>
    );
};

export default Products;