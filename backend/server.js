import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Resend } from 'resend';
<<<<<<< HEAD
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();
=======
>>>>>>> e0fe1d0a31d0cceb5596fb1231190935048fda1d

const app = express();
app.use(cors());
app.use(bodyParser.json());

<<<<<<< HEAD
// Initialize Resend with the environment variable
const resend = new Resend(process.env.RESEND_API_KEY);

=======
>>>>>>> e0fe1d0a31d0cceb5596fb1231190935048fda1d
app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  try {
<<<<<<< HEAD
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
=======
    const resend = new Resend('re_VmkTw8ez_CxNPV12z7KPBW6WMdoZ9rYcp');

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

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
>>>>>>> e0fe1d0a31d0cceb5596fb1231190935048fda1d
