
const baseUrl = process.env.NEXT_PUBLIC_APP_URL
  || (typeof window !== 'undefined' ? window.location.origin : 'https://gyratedigital.com');

// Colors
const colors = {
  background: '#ffffff',
  text: '#000000',
  textMuted: '#666666',
  link: '#68ba7f',
  border: '#cccccc',
};

// Simplified Email Layout with Signature
const getEmailLayout = (content: string, preheader: string = "") => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gyrate Digital</title>
  <style>
    body { margin: 0; padding: 0; font-family: Arial, sans-serif; color: ${colors.text}; background-color: ${colors.background}; line-height: 1.6; }
    a { color: ${colors.link}; text-decoration: none; }
    .email-container { max-width: 600px; margin: 20px auto; padding: 20px; }
    p { margin-bottom: 15px; }
    .footer { margin-top: 20px; }
    .divider { height: 1px; background-color: ${colors.border}; margin: 15px 0; border: none; }
    .signature-table td { vertical-align: middle; }
  </style>
</head>
<body>
  <div style="display:none;font-size:1px;color:#333333;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;">
    ${preheader}
  </div>
  
  <div class="email-container">
    <!-- Main Content -->
    <div style="font-size: 16px; color: ${colors.text};">
      ${content}
    </div>

    <!-- Signature Footer -->
    <div class="footer">
      <hr class="divider" />
      
      <table border="0" cellpadding="0" cellspacing="0" class="signature-table" style="width: 100%; margin-bottom: 20px;">
        <tr>
          <td style="width: 110px; padding-right: 15px; vertical-align: middle;">
             <!-- Logo -->
             <img src="${baseUrl}/email/email-template.gif" alt="Gyrate Logo" style="width: 100px; height: auto; display: block;" />
          </td>
          <td style="vertical-align: middle;">
            <p style="margin: 0; font-size: 18px; font-weight: bold; color: #000;">Abdullah Zahid <span style="font-weight: normal;">|</span> Project Manager</p>
          </td>
        </tr>
      </table>

      <div style="margin-top: 20px; font-size: 14px; color: ${colors.text}; line-height: 1.6;">
        <p style="margin: 3px 0;">33 Copgrove Road, Leeds, West Yorkshire LS8 2SP, United Kingdom</p>
        
        <p style="margin: 3px 0;">Office 210, Building 1691, Road 432, Salmabad 704, Bahrain.</p>
        
        <p style="margin: 15px 0 3px 0;"><strong>Phone:</strong> <a href="tel:+447814580990" style="color: #0066cc; text-decoration: underline;">+44 7814 580990</a></p>
        <p style="margin: 3px 0;"><strong>Email:</strong> <a href="mailto:info@gyratedigital.com" style="color: #0066cc; text-decoration: underline;">info@gyratedigital.com</a></p>
        <p style="margin: 3px 0;"><strong>Web:</strong> <a href="https://www.gyratedigital.com" style="color: #0066cc; text-decoration: underline;">www.gyratedigital.com</a></p>
      </div>

      <div style="margin-top: 25px;">
        <a href="https://www.linkedin.com/company/gyrate-digital/" style="text-decoration: none; margin-right: 10px; display: inline-block;">
          <img src="https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-linkedin-3.png" alt="LinkedIn" width="24" height="24" style="border-radius: 50%;">
        </a>
        <a href="https://www.facebook.com/GyrateDigital/" style="text-decoration: none; margin-right: 10px; display: inline-block;">
           <img src="https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-facebook-3.png" alt="Facebook" width="24" height="24" style="border-radius: 50%;">
        </a>
        <a href="https://twitter.com/" style="text-decoration: none; margin-right: 10px; display: inline-block;">
           <img src="https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-twitter-3.png" alt="Twitter" width="24" height="24" style="border-radius: 50%;">
        </a>
        <a href="https://www.instagram.com/gyrate.digital/" style="text-decoration: none; margin-right: 10px; display: inline-block;">
           <img src="https://cdns.iconmonstr.com/wp-content/releases/preview/2016/240/iconmonstr-instagram-13.png" alt="Instagram" width="24" height="24" style="border-radius: 50%;">
        </a>
      </div>

      <hr class="divider" style="width: 100%; margin-top: 25px; margin-bottom: 25px;" />
      
      <p style="margin: 0; font-weight: bold; color: #888; font-size: 16px; text-align: center;">
        <a href="https://www.gyratedigital.com" style="color: #888; text-decoration: none;">Gyrate Digital Agency</a>
      </p>
      <div style="display: none; max-height: 0px; overflow: hidden;">
        Message ID: ${Math.random().toString(36).substring(7)} - ${new Date().getTime()}
      </div>
    </div>
  </div>
</body>
</html>
`;

export const generateContactUserEmail = (name: string) => {
  const content = `
    <p>Hello ${name},</p>
    <p>Thank you for reaching out to Gyrate Digital. This is an automated confirmation that we have received your inquiry.</p>
    <p>Our team will review your message and get back to you shortly.</p>
    <p>Best regards,</p>
  `;
  return getEmailLayout(content, "We received your message.");
};

export const generateContactAdminEmail = (data: { name: string; email: string; phone?: string; subject?: string; message: string; services?: string[] }) => {
  const content = `
    <p><strong>New Inquiry Received</strong></p>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
    ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
    ${data.subject ? `<p><strong>Subject:</strong> ${data.subject}</p>` : ''}
    ${data.services && data.services.length > 0 ? `<p><strong>Services:</strong> ${data.services.join(', ')}</p>` : ''}
    <br/>
    <p><strong>Message:</strong></p>
    <p style="white-space: pre-wrap; background-color: #f5f5f5; padding: 15px; border-radius: 5px;">${data.message}</p>
  `;
  return getEmailLayout(content, `New Inquiry: ${data.name}`);
};

export const generateSubscribeUserEmail = (email: string) => {
  const content = `
    <p>Hello,</p>
    <p>Thank you for subscribing to the Gyrate Digital newsletter.</p>
    <p>We're excited to share our latest updates and insights with you.</p>
    <p>Best regards,</p>
  `;
  return getEmailLayout(content, "Welcome to Gyrate Digital!");
};

export const generateSubscribeAdminEmail = (email: string) => {
  const content = `
    <p><strong>New Subscriber Alert</strong></p>
    <p>New subscriber email: <a href="mailto:${email}">${email}</a></p>
  `;
  return getEmailLayout(content, `New subscriber: ${email}`);
};
