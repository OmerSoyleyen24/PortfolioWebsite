import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'omersoyleyen06102024@gmail.com',
      pass: 'qgnp vtas bkun iuyz'
    }
  });

  const mailOptions = {
    from: email,
    to: 'omersoyleyen06102024@gmail.com',
    subject: `Yeni Mesaj: ${name}`,
    text: message
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Mail gönderildi:', info.response);
    res.status(200).json({ message: 'Mesajınız gönderildi!' });
  } catch (error) {
    console.error('Mail gönderim hatası:', error);
    res.status(500).json({ error: error.toString() });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
