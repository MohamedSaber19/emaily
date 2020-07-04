const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default (emails) => {
  const invalideEmails = emails
    .split(",")
    .map((email) => email.trim())
    .filter((email) => re.test(email) === false);

  if (invalideEmails.length) {
    return `This emails are invalid: ${invalideEmails}`;
  }
  return;
};
