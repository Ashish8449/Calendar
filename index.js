const express = require('express')
const { google } = require('googleapis')

const app = express()

const obj = {
  type: 'service_account',
  project_id: 'pam-calender',
  private_key_id: 'bece98e2dc93a1bd853074c1cc2ba2ebfde96ffc',
  private_key:
    '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC0aZr6JIzMFIzb\n0IVfQKOp5ZZfD7aBRNFpl46DGH7iqOjn/FLf/JEhukRg1YEns2tsxwjytiNKqyS4\nzFTRX03E62YkbgQG2URMFVxs4GvLBPrePatdf9aOrHq1EuEUJhSpMXkotvc/Ctd8\nDoR13RF88UOWWGu+QMtI3WFSqoAeV47HrscnITlv5Qh9ZeJYKjIfu+LBPdg3niHh\n/30lDMW8ToGvUdJnhGf+ulZXsexsFLGMU1El90p896t7v87JScU+zdhDc6GanR26\nbkiN5/kV7zFiF52mWH2H10s/I3bGu0ONHZDGdxDzspBWv06qzaiwMXA9C3K6kGdJ\noarFubKPAgMBAAECggEAIgd3WW5Sdl378axDs+ND25R4CAc1M+3QmBujoFua91LH\n15YS5bfEgjmZkzBCU8Q2Y4apS+qJ/pgIbajw6KsSxq1mD0IHFWmexcETtV+hRWJz\nlT7Jl3G4/SFQZd4hQUUriXxQ75qPST9YxMgSOQ8RMOFrD60u6WxcS6qiJE8Pqmkk\nq7lE5ZAQdwwnBL7GzEhgWjrVEUjXd3kGe2SLYZ1szw4MrWYv7Mlg8fHtTXCOTqlj\njXzZjx5yl4K/3US6E45713Fqnc90Ram7y88tu9IoGRFhtVyFurZn1J6YQULmtJ7s\nx9OMljq4v+80TiDoHqjaW+TbhB8QHmAd1i8nG3burQKBgQD2UrAGZW+fUJFPha+i\nEf1gr1Yge71S/rOvHAV+7+SyyJYrWWsnYIzIw/IKaBJ5nQfuK7xzrQ5fFZSIstj5\n0uUXVGj0EuTqBXWXEaVihT7vqfsqcWdec0pbjKa0+5rg6FWcgU21020oTFvomYZC\nC+dQ3dnlFyy3zK2M1jJBhV2t4wKBgQC7gAt8nZkU2swIY/mQ96F+D4EkFxgRKPWX\nSSugvhds2irjBr3vq1T8XRxpz+tqf/Itm+ngxq8gHDxkHMXq21sXzfmyrdPanDn/\n7DR2bjjFwl0nKLk2UhCYpVnCjdCs/YqZqaHEpl2rLKVwfWGtFiqHUE2C/SSr4pWS\nUvE47GcIZQKBgQC9/IDwLgSuKIIrh70zkBSSIiqX21jnTrRgd4h1o6oNi1DoFovj\nT0DHCPsCs8qsKkYXmXw87FmNVSO/W9Kmvdcc62oX9wrAxX0xC9c36fXk/IJQ9i74\nVowfmJhsNzP6DLkbgU/i0jP7RQoOmXtILc44PST24a0IBsJFQmB40Ni0aQKBgAQs\nlpTgoU7QjChHqX+rs6Gt0K8wAG4pXkZO77S1ZqoatUe2l7XlN5AitoY4hcIqNQcE\n6JEDe1SYrFOCPHm9BmsiP8PVkNjWD4h+BrD4RTVJ3W8Ivg7ShuIPFE97fsDLKDHB\nkANjvMQZy1kUwX7r9mhqxj77Sby136SRSiN9R9HtAoGAGdxHsFOmNarrDuwxI9xk\n68et2W0LD4bKmMLLEm8Z2DhX9kht3X6NmmdGtsrBNLc8KxI/e4ZsdY/HxJSauIcA\ntzMhg7hK1tjOda3xVpe98Jt+dvqUEihfeJVIGXuzL+EeX0foyCL8wFjT3ngqoCDO\npCwdkn/bTfoDacaq3c3uDdE=\n-----END PRIVATE KEY-----\n',
  client_email: 'pamcalender@pam-calender.iam.gserviceaccount.com',
  client_id: '105666026823052687330',
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url:
    'https://www.googleapis.com/robot/v1/metadata/x509/pamcalender%40pam-calender.iam.gserviceaccount.com',
}
const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly'
const GOOGLE_PRIVATE_KEY = obj.private_key
const GOOGLE_CLIENT_EMAIL = obj.client_email
const GOOGLE_PROJECT_NUMBER = 1051405410171
const GOOGLE_CALENDAR_ID =
  'bfc08e7c249883a8053437e9e7002e4c039b30b75df21888aa2b643e62631e49@group.calendar.google.com'

const jwtClient = new google.auth.JWT(
  GOOGLE_CLIENT_EMAIL,
  null,
  GOOGLE_PRIVATE_KEY,
  SCOPES
)

var event = {
  summary: 'My first event!',
  location: 'Hyderabad,India',
  description: 'First event with nodeJS!',
  start: {
    dateTime: '2022-01-12T09:00:00-07:00',
    timeZone: 'Asia/Dhaka',
  },
  end: {
    dateTime: '2022-01-14T17:00:00-07:00',
    timeZone: 'Asia/Dhaka',
  },
  attendees: [],
  reminders: {
    useDefault: false,
    overrides: [
      { method: 'email', minutes: 24 * 60 },
      { method: 'popup', minutes: 10 },
    ],
  },
}

const calendar = google.calendar({
  version: 'v3',
  project: GOOGLE_PROJECT_NUMBER,
  auth: jwtClient,
})
const auth = new google.auth.GoogleAuth({
  keyFile: './service.json',
  scopes: 'https://www.googleapis.com/auth/calendar', //full access to edit calendar
})
// auth.getClient().then((a) => {
//   calendar.events.insert(
//     {
//       auth: a,
//       calendarId: GOOGLE_CALENDAR_ID,
//       resource: event,
//     },
//     function (err, event) {
//       if (err) {
//         console.log(
//           'There was an error contacting the Calendar service: ' + err
//         )
//         return
//       }
//       console.log('Event created: %s', event.data)
//       res.json('Event successfully created!')
//     }
//   )
// })

app.get('/', (req, res) => {
  calendar.events.list(
    {
      calendarId: GOOGLE_CALENDAR_ID,
      timeMin: new Date().toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: 'startTime',
    },
    (error, result) => {
      if (error) {
        res.send(JSON.stringify({ error: error }))
      } else {
        if (result.data.items.length) {
          res.send({ events: result.data.items })
        } else {
          res.send(JSON.stringify({ message: 'No upcoming events found.' }))
        }
      }
    }
  )
})

app.get('/createEvent', (req, res) => {
  var event = {
    summary: 'My first event!',
    location: 'Hyderabad,India',
    description: 'First event with nodeJS!',
    start: {
      dateTime: '2023-01-12T09:00:00-07:00',
      timeZone: 'Asia/Dhaka',
    },
    end: {
      dateTime: '2023-01-14T17:00:00-07:00',
      timeZone: 'Asia/Dhaka',
    },
    attendees: [],
    reminders: {
      useDefault: false,
      overrides: [
        { method: 'email', minutes: 24 * 60 },
        { method: 'popup', minutes: 10 },
      ],
    },
  }

  const auth = new google.auth.GoogleAuth({
    keyFile: './service.json',
    scopes: 'https://www.googleapis.com/auth/calendar',
  })
  auth.getClient().then((a) => {
    calendar.events.insert(
      {
        auth: a,
        calendarId: GOOGLE_CALENDAR_ID,
        resource: event,
      },
      function (err, event) {
        if (err) {
          console.log(
            'There was an error contacting the Calendar service: ' + err
          )
          return
        }
        console.log('Event created: %s', event.data)
        res.json('Event successfully created!')
      }
    )
  })
})

app.listen(3000, () => console.log(`App listening on port 3000!`))
