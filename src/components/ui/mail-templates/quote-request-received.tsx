import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Text,
} from '@react-email/components';
import * as React from 'react';

interface QuoteRequestEmailProps {
    name: string;
    email: string;
    phone: string;
    city: string;
    address: string;
    message: string;
}

export const QuoteRequestReceived = ({
    name,
    email,
    phone,
    city,
    address,
    message,
}: QuoteRequestEmailProps) => (
    <Html>
        <Head />
        <Preview>Hai ricevuto una richiesta di preventivo</Preview>
        <Body style={main}>
            <Container style={container}>
                <Img src='https://www.riabitare-ristrutturazioni.it/logo.png' style={{
                    marginBottom: '16px',
                    width: '151px',
                    height: '101px',
                    marginRight: 'auto',
                    marginLeft: 'auto',
                }} width={151} height={101} alt='Riabitare Ristrutturazioni' />
                <Heading style={h1}>Nuova richiesta di preventivo</Heading>
                <Text style={text}>
                    Hai ricevuto una nuova richiesta di preventivo ecco i dettagli:
                </Text>
                <Section style={detailsSection}>
                    <Text style={detailText}>
                        <strong>Nome:</strong> {name}
                    </Text>
                    <Text style={detailText}>
                        <strong>Email:</strong> {email}
                    </Text>
                    <Text style={detailText}>
                        <strong>Telefono:</strong> {phone}
                    </Text>
                    <Text style={detailText}>
                        <strong>Città:</strong> {city}
                    </Text>
                    <Text style={detailText}>
                        <strong>Indirizzo:</strong> {address}
                    </Text>
                </Section>
                <Hr style={hr} />
                <Text style={text}>
                    <strong>Descrizione della richiesta:</strong>
                </Text>
                <Text style={messageText}>{message}</Text>
                <Hr style={hr} />
                <Text style={footer}>
                    Questo è un messaggio automatico, non rispondere a questa email.
                </Text>
            </Container>
        </Body>
    </Html>
);

export default QuoteRequestReceived;

const main = {
    backgroundColor: '#f6f9fc',
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
    backgroundColor: '#ffffff',
    margin: '0 auto',
    padding: '20px ',
    marginBottom: '64px',

};

const h1 = {
    color: '#333',
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center' as const,
    margin: '40px 0',
};

const text = {
    color: '#333',
    fontSize: '16px',
    lineHeight: '24px',
    textAlign: 'left' as const,
    margin: '0 16px',
};

const detailsSection = {
    padding: '16px',
    borderRadius: '4px',
    margin: '0 16px',
};

const detailText = {
    ...text,
    margin: '8px 0',
};

const messageText = {
    ...text,
    margin: '16px',
    backgroundColor: '#f9f9f9',
    padding: '16px',
    borderRadius: '4px',
    fontStyle: 'italic',
};

const hr = {
    borderColor: '#e6ebf1',
    margin: '20px 0',
};

const footer = {
    ...text,
    textAlign: 'center' as const,
    fontSize: '12px',
    color: '#666',
};

