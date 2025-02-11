export default defineEventHandler(async () => {
  try {
    const { sendMail } = useNodeMailer();

    return sendMail({
      subject: "Account confirmation",
      to: "dom.rad14@gmail.com",
      text: "test mail",
    });
  } catch (error) {
    return error;
  }
});
