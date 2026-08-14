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
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev', // Replace with your verified domain if needed
      to: 'omersoyleyen24@outlook.com',   // Where you want to receive the message
      subject: `New message from ${name}`,
      text: `Email: ${email}\nMessage: ${message}`,
    });

    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});