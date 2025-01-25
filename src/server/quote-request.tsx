import { QuoteRequestReceived } from "@/components/ui/mail-templates/quote-request-received";
import { sendMail } from "./mail";
import { render } from "@react-email/components";
import QuoteRequestSent from "@/components/ui/mail-templates/quote-request-sent";

export const sendQuoteRequest = async ({
  name,
  phone,
  email,
  city,
  address,
  message,
}: {
  name: string;
  phone: string;
  email: string;
  city: string;
  address: string;
  message: string;
}) => {
  const emailHtmlReceived = await render(<QuoteRequestReceived name={name} phone={phone} email={email} city={city} address={address} message={message} />);
  const emailHtmlSent = await render(<QuoteRequestSent name={name} phone={phone} email={email} city={city} address={address} message={message} />);
  await sendMail('mossa.eman@gmail.com', "Richiesta Preventivo", '', emailHtmlReceived);
  await sendMail(email, "Nuova richiesta Preventivo", '', emailHtmlSent);
  return;
};
