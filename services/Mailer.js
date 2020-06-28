const sendgrid = require("sendgrid");
const helper = sendgrid.mail;
const keys = require("../config/keys");
class Mailer extends helper.Mail {
  constructor(survey, content) {
    super();

    this.sgApi = sendgrid(keys.sendGridKey);
    this.from_email = new helper.Email("mohamedsaberapp@gmail.com");
    this.subject = survey.subject;
    this.body = new helper.Content("text/html", content);
    this.recipients = survey.recipients;

    this.addContent(this.body);
    this.addClickTracking();
    this.addRecipients();
  }

  // formatAddresses(recipients) {
  //   const adds = recipients.map(({ email }) => {
  //     new helper.Email(email);
  //   });
  //   console.log(adds);
  //   return adds;
  // }

  addClickTracking() {
    const trackingSettings = new helper.TrackingSettings();
    const clickTracking = new helper.ClickTracking(true, true);

    trackingSettings.setClickTracking(clickTracking);
    this.addTrackingSettings(trackingSettings);
  }

  addRecipients() {
    const personalize = new helper.Personalization();

    this.recipients.forEach((recipient) => {
      personalize.addTo(recipient);
    });

    this.addPersonalization(personalize);
  }

  async send() {
    this.request = this.sgApi.emptyRequest({
      method: "POST",
      path: "/v3/mail/send",
      body: this.toJSON(),
    });

    const response = await this.sgApi.API(this.request);
    return response;
  }
}

module.exports = Mailer;
