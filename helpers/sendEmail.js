const postmark = require("postmark");

const sendEmail = async ({ email, token }) => {
  const { BASE_URL, EMAIL_API } = process.env;
  const EMAIL_FROM = "sender@snowboards.com.ua";
  const client = new postmark.ServerClient(EMAIL_API);
  const frontendVerifyBaseRoute =
    "https://vasylievyurii.github.io/PowerPulse2.0/signup";
  const msg = {
    From: EMAIL_FROM,
    To: email,
    Subject: "Complete your PowerPulse registration",
    HtmlBody: `     
    <html>
  <head>
    <style>
      body {
        font-family: 'Roboto', sans-serif;
        background-color: #f4f4f4;
        color: #111;
        margin: 0;
        padding: 0;
      }
      header {
        background-color: #E6533C;
        padding: 20px;
      }
      .logo {
        text-align: center;
        color: #fff;
        margin: 0;
      }
      .slogan {
        text-align: center;
        color: #fff;
        font-size: 16px;
        font-weight: 300;
        margin: 0;
      }
      .container {
        padding: 40px 20px;
      }
      .emailTitle {
        text-align: center;
      }
      p {
        margin: 0;
        padding: 0;
        text-align: center;
      }
      a {
        text-decoration: none;
        transition: color 0.3ms;
        text-align: center;
      }
      a:hover {
        color: #E6533C;
      }
      .regards {
        margin-top: 20px;
      }
    </style>
  </head>
  <body>
    <header>
      <h1 class="logo">PowerPulse</h1>
      <h2 class="slogan">Transforming your body shape with Power Pulse</h2>
    </header>
    <main>
      <div class="container">
        <h2 class='emailTitle'>Thank you for registration!</h2>
        <p>Please follow the link below to confirm your email address: <a target="_blank" href=${frontendVerifyBaseRoute+token}">Click here</a></p>
        <P class='regards'>Best Regards, Power Pulse team!</P>
      </div>
    </main>
  </body>
</html>
    `,
  };

  await client.sendEmail(msg);
  return true;
};

module.exports = sendEmail;

// href="${BASE_URL}/api/auth/verify/${token}