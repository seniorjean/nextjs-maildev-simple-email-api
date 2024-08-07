// components/EmailTemplate.js
import React from 'react';

const EmailTemplate = ({ fullName, email, message }) => (
    <div style={{
        margin: 'auto',
        backgroundColor: 'white',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        maxWidth: '40em',
        marginTop: '20px',
        padding: '20px',
    }}>
        <div style={{
            padding: '12px',
            backgroundColor: '#2f855a', // Tailwind green-600
            color: 'white',
            textAlign: 'center',
        }}>
            <h1>New Contact</h1>
            <p style={{
                fontSize: '12px',
                marginTop: '8px',
            }}>
                {new Date().toLocaleString()}
            </p>
        </div>
        <div style={{
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            marginTop: '12px',
            color:'black'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                color:'black'
            }}>
                <p><strong>Name:</strong></p>
                <p>{fullName}</p>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                color:'black'
            }}>
                <p><strong>Email:</strong></p>
                <p>{email}</p>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                color:'black'
            }}>
                <p><strong>Message:</strong></p>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '12px',
                color:'black'
            }}>
                <hr style={{
                    flex: 1,
                }} />
                <strong>Message</strong>
                <hr style={{
                    flex: 1,
                }} />
            </div>
            <p style={{
                color:'black'
            }}>
                {message}
            </p>
        </div>
    </div>
);


export default EmailTemplate;
