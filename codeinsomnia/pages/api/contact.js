// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { mailOptions, transporter } from "../../config/nodemailer";

const handler = async (req, res) => {
  console.log(req.body)

  if(req.method === "POST") {
    const data = req.body;
    if(!data.name || !data.user_email || !data.subject || !data.msg){
      return res.status(400).json({ message: 'bad request' })
    }
    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: data.subject,
        text: "This is test string",
        html: "<h1>Test Title</h1><p>some body text</p>"
      });

      return res.status(200).json({ success: true });
    }catch(error){
      console.log(error)
      return res.status(400).json({ message: error.message })
    }
  }


return res.status(400).json({ message: 'BAD request' })
}

export default handler;
