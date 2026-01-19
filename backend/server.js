import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Resend } from 'resend';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  try {
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
