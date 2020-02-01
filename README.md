<p align="center">
  <a href="https://talaikis.com/">
    <img alt="Talaikis Ltd." src="https://github.com/TalaikisInc/talaikis.com_react/blob/master/media/logo.png" width="228">
  </a>
</p>

# Users Cubed NEXT Frontend

## Features

Fully featured React.js SSR user management system/ CMS (frontend).

* User sign in, sign up, sign out
* Profile edit, delete
* Account confirm, password reset
* Terms and conditions. privacy policy, disclaimer examples
* Contact form, etc. examples

Note. This project is SSR only, not using CSR part from Next.js, therefore, all links are `<a href=` instead of `<Link href=`.

## Backend

* [Users Cubed API Next](https://github.com/TalaikisInc/users-cubed-api-next) - protobuf API on AWS Lambda + S3

## Technologies

* [Users Cubed API Next](https://github.com/TalaikisInc/users-cubed-api-next)
* [Next.js](https://github.com/zeit/next.js/)
* [React](https://github.com/facebook/react)
* [Redux](https://github.com/reduxjs/redux)

## Performance

* 1703 rps median, 17ms latency, without API calls

## API

You should deploy your own API [backend](https://github.com/TalaikisInc/users-cubed-api-next) and set all the properties inside `.env`.

## Install

```bash
npm i
```

## Build

```bash
npm run build
```

## Start

```bash
# Development:
npm run dev

# Production
npm run build
npm run start
```

## Deploy

Docker:

```bash
./slave_build.sh
./slave_start.sh

# reload:
./reload.sh
```

## Test

```bash
# npm run test
```

## Sitemap generator

```bash
# will generate a sitemap inside public/ folder along with additional out.json and errors.json files
node sitemap/
```

## How to change texts

Use `translations/translations/*.js`

## How to change appearance

Currently all themeable items are inside `components/elements/*.js` and `components/layout/*.js`, except `forms/delete.js` and `forms/subscribe.js`

## TODO

Primary

* test reset, confirm reset
* fix confirm from browser's window
* social login
* fix edit page
* fix responsiveness
* refer, referred, refer register pages
* shop, blog

Other

* refer system (left: REFER_USE -> REFER_REGISTER, REFERRED)
* upload field/ avatar field
* fast theme changes, composable primitives, layout map, loader map,...

Nice to have:

* drop express
* improved locale switching
* fix export (+ sitemap -> routeMap)
* tests
* newsletters

## Licence

GPL v3.0
