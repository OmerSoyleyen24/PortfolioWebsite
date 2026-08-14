import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Resend } from 'resend';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Initialize Resend with the environment variable
const resend = new Resend(process.env.RESEND_API_KEY);

app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: ['omersoyleyen24@outlook.com'],
      subject: `Yeni Mesaj: ${name}`,
      html: `
        <p><strong>Gönderen:</strong> ${email}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${message}</p>
      `
    });

    res.status(200).json({ message: 'Mesaj gönderildi!' });
  } catch (error) {
    console.error('Mail hatası:', error);
    res.status(500).json({ error: 'Mail gönderilemedi' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
