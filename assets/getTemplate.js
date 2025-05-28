const template = `Hi [Recruiter’s Name],

I’m reaching out to express interest in exploring engineering opportunities at [Company Name]. With over 7+ years of experience in product-driven environments, I’ve led and shipped scalable platforms using React, Node.js, and AWS, with a sharp focus on performance, security, and long-term maintainability.

Most recently at DAZN, I architected a real-time partner integration platform using React + Next.js and NestJS, reducing onboarding time by 60% and improving cross-system consistency to 99.9%. I’ve also worked extensively on OAuth/OIDC flows, infrastructure cost optimization (25%+), and end-to-end API integrations for high-growth B2B ecosystems.

I’m particularly drawn to [Company Name]’s product depth and engineering culture. If there are frontend or full-stack roles that match my background, I’d be excited to explore further.

PFB following links that summarize my career. If you can't access the same, I have attached my resume for your reference.

🔹 Portfolio: https://anshumanupadhyay.me
🔹 GitHub: https://github.com/anshup7
🔹 LinkedIn: https://linkedin.com/in/anshumanupy
🔹 Resume: https://tinyurl.com/2c6tyfy7

Thanks for your time — I’d be happy to connect or share more details if there’s a fit.

Best regards,
Anshuman Upadhyay`

export function getTemplate(recruiterCompanyData) {
    let replacedTemplate = template.replaceAll("[Recruiter’s Name]", recruiterCompanyData["Recruiter Name"]);
    replacedTemplate = replacedTemplate.replaceAll("[Company Name]", recruiterCompanyData["Company Name"]);
    return replacedTemplate;
}