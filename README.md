# The URL shortener of [`pia.sh`](https://pia.sh)

![GitHub branch checks state](https://img.shields.io/github/checks-status/maacpiash/piash-redirect-nextjs/main?label=deployment&logo=github&style=flat-square)
</div>

## 🖥 Technology Stack

- React.js
- Next.js
- MongoDB

## 🧠 How it works

The web app redirects via the [`redirects`](https://nextjs.org/docs/api-reference/next.config.js/redirects) option of the [Next.js config file](/next.config.js). Every request that looks like `/{some-value}` is redirected to `/api/redirects/{some-value}`, which is then handled by [ `pages/api/[shortcut].js` ](/pages/api/[shortcut].js). It uses [`middleware/db.js`](/middleware/db.js) to look up the URL assigned for the `{some-value}` string.

The database documents look like this:

```json
{
    "_id": { "$oid": "5e0682401c9e4400007e440a" },
    "RealUrl": "https://github.com/maacpiash/static/raw/master/ahad-resume.pdf",
    "ShortKey": "resume"
}
```

The middleware finds the `RealUrl` of the document with the `ShortKey` value `{some-value}` and then redirects to that `RealUrl`.

However, the ednpoint that redirects `/gh/{repo-name}` to `https://github.com/maacpiash/{repo-name}` is hard-coded in the aforementioned [config file](/next.config.js). This is simpler and requires no database lookup.

## 🌏 Hosting

The web-app is hosted on [Vercel](https://vercel.com). The database is hosted on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

## 🤝🏽 Contributing

Any kind of contributions are welcome. Bump the version and create a PR.
