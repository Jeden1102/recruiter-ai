import Handlebars from "handlebars";

export default defineEventHandler(async () => {
  const { sendMail } = useNodeMailer();
  const config = useRuntimeConfig();

  const templateUrl = `${config.public.APP_BASE_URI}/mail-templates/account-confirmation.html`;

  const response = await fetch(templateUrl);
  if (!response.ok) {
    throw new Error(`Failed to fetch email template: ${response.statusText}`);
  }
  const templateSource = await response.text();

  const template = Handlebars.compile(templateSource);
  const htmlContent = template({
    name: "Dominik",
    url: "http://localhost:3000/account/confirm?code=1234",
  });

  return sendMail({
    subject: "Account confirmation",
    to: "dom.rad14@gmail.com",
    html: htmlContent,
  });
});
