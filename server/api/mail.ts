import Handlebars from "handlebars";

export default defineEventHandler(async () => {
  const { sendMail } = useNodeMailer();

  const source = await useStorage().getItem(
    "root:assets:mail-templates/account-confirmation.html",
  );

  if (!source) {
    throw new Error("Email template not found!");
  }

  const template = Handlebars.compile(source);
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
