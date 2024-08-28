import sendEmail from "../service/SendEmail.js";
import { KedubesTemplate } from "../EmailTemplate/Kedubes.js";
import { PerusahaanTemplate } from "../EmailTemplate/Perusahaan.js";

export const handleVerifikasiForm = async (req, res) => {
    const { EmailKedubes, emailPerusahaan, ...formData } = req.body;

    console.log('Received form data:', formData);
    console.log('Email Kedubes:', EmailKedubes);
    console.log('Email Perusahaan:', emailPerusahaan);

    try {
        let info;
        let htmlContent1 = KedubesTemplate(formData);
        let htmlContent2 = PerusahaanTemplate(formData)

        if (formData.occupation === 'kedubes' && EmailKedubes) {
            const subject = 'Laporan Verifikasi Form - Kedubes';
            const text = `Halo,\n\nBerikut adalah laporan Form untuk kedubes:\n\n${JSON.stringify(formData, null, 2)}`;

            info = await sendEmail(EmailKedubes, subject, text, htmlContent1);
            console.log('Email sent to Kedubes:', info);
        } else if (formData.occupation === 'perusahaan' && emailPerusahaan) {
            const subject = 'Laporan Verifikasi Form - Perusahaan';
            const text = `Halo,\n\nBerikut adalah laporan Form untuk perusahaan:\n\n${JSON.stringify(formData, null, 2)}`;

            info = await sendEmail(emailPerusahaan, subject, text, htmlContent2);
            console.log('Email sent to Perusahaan:', info);
        } else {
            return res.status(400).send('Invalid form data or missing email address.');
        }

        res.status(200).send('Verifikasi Form submitted and email sent.');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email.');
    }
};
