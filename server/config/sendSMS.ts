import { Twilio } from 'twilio'

const accountSid = `${process.env.TWILIO_ACCOUNT_SID}`
const authToken = `${process.env.TWILIO_AUTH_TOKEN}`
const from = `${process.env.TWILIO_PHONE_NUMBER}`

const client = require('twilio')(accountSid, authToken)


export const sendSms = (to: string, body: string, txt: string) => {
  try {
    client.messages
    .create({
      body: `BlogDev ${txt} - ${body}`,
      from,
      to,
    })
    .then((message: object) => console.log(message));
    
  } catch (err) {
    console.log(err)
  }
}
