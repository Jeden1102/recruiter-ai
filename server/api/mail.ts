import { readFile } from "fs/promises";
import Handlebars from "handlebars";

export default defineEventHandler(async () => {
  const { sendMail } = useNodeMailer();

  const templatePath = "mail-templates/account-confirmation.html";
  const templateSource = await readFile(templatePath, "utf8");

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
