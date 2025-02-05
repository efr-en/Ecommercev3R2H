import { Container, Title, TextInput, Textarea, Button, Group, Text } from '@mantine/core';
import { useState, useEffect } from 'react';
import { IconPhoneFilled, IconPackage, IconMailFilled } from '@tabler/icons-react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", comment: ""});
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");

    useEffect(() => {
        if (successMessage) {
            const timer = setTimeout(() => {
                setSuccessMessage("");
            }, 5000);

            // Cleanup function to clear timeout if component unmounts
            return () => clearTimeout(timer);
        }
    }, [successMessage]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        const errors = {};
        if (!formData.name) errors.name = "Name is required.";
        if (!formData.email) {
            errors.email = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = "Invalid email.";
        } 
        if (!formData.comment) errors.comment = "Comment is required.";
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate();
        if (Object.keys(errors).length > 0) {
            setErrors(errors);
        } else {
            setErrors({})
            setSuccessMessage("Thank you for contacting us. We will get back to you soon!");
            setFormData({ name: "", email: "", comment: "" });
        }
    };

    // The form's visual layout
    return (
        <>
        <Container className="contact-form" size="sm" style={{ marginTop: "2rem" }}>
            <Title align="Center" order={1} style={{ marginBottom: "2rem" }}>
                Contact Us
            </Title>
            <Title align="Center" order={6} style={{ marginBottom: "2rem" }}>
                Note:  messages will be answered 24 to 72 hours from submission.
            </Title>
            <form onSubmit={handleSubmit}>
                <TextInput
                label="Name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                />
                <TextInput
                label="Email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                style={{ marginTop: "1rem" }}
                />
                <Textarea
                label="Comment"
                name="comment"
                placeholder="Your message"
                value={formData.comment}
                onChange={handleChange}
                error={errors.comment}
                style={{ marginTop: "1rem" }}
                />
                <Group position="center" style={{ marginTop: "1rem" }}>
                    <Button type="submit">Submit</Button>
                </Group>
            </form>
            {successMessage && (
                <Text color="green" align="center" style={{ marginTop: "1rem" }}>
                    {successMessage}
                </Text>
            )}

        </Container>
        <Container className='contact-lower-hero' size="md" radius="lg"
        padding="xl" style={{ marginTop: "2rem", paddingBottom: "2rem" }} >
        
            <Text align="center" color='black'>
            <IconPhoneFilled size={100} color='black' align="center" />
                Need more support? Give us a call at 1-800-430-4422
            </Text>

            <Text align="center" color='black'>
            <IconPackage size={100} color='black' align="center" />
                Interested in wholesale? Email us at steezwholesale@steez.com
            </Text>

            <Text align="center" color='black'>
            <IconMailFilled size={100} color='black' align="center" />

                Mailing Address: 1234 Steez St. Los Angeles, CA 90001
            </Text>
        </Container>
        </>
    );
};

export default Contact;