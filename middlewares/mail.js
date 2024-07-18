import nodemailer from "nodemailer";

const sendmail = async (req, res, next) => {
    const { name, email } = req.body;
    const { originalname, buffer } = req.file; // Assuming req.file contains the file details

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'sandakasairam63675@gmail.com',
            pass: 'emcn xadd edop gsxb'
        }
    });

    const mailoptions = {
        from: "sandakasairam63675@gmail.com",
        to: email,
        subject: "Confirmation of application",
        text: "Hello " + name + ", We have received your resume",
        attachments: [
            {
                filename: originalname,
                content: buffer, // assuming buffer contains the file data
            }
        ]
    };

    try {
        const info = await transporter.sendMail(mailoptions);
        console.log("Email sent: " + info.response);
        next();
    } catch (error) {
        console.error("Error sending email: ", error);
        res.status(500).send("Error sending email");
    }
};

export default sendmail;
