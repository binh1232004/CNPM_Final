# Firebase Cloud Functions Sample: Moderated Guestbook

This sample demonstrates using Google Cloud Functions (GCF) and its interaction with a Firebase DB through a simple Web UI.

## Introduction

This sample app is a Guestbook. Anyone can add messages using a Web UI.
A Server Side GCF automatically moderates the messages (e.g. remove swearwords).

Further reading:

 - [Read more about GCF](https://sites.google.com/a/google.com/apheleia/)
 - [Read more about Hearth: GCF integration with Firebase](https://sites.google.com/a/google.com/hearth/home)


## Prerequisites

 - [Sign up for GCF EAP](http://go/apheleia-alpha-signup-internal)
 - [Sign up for Hearth EAP](http://go/hearth-alpha-signup)


## Initial setup, build tools and dependencies

You need to have installed [npm](https://www.npmjs.com/) which typically comes with [Node.js](https://nodejs.org).

Install the Firebase CLI Alpha:

 - Download it at [go/hearth-alpha-cli](http://go/hearth-alpha-cli)
 - Install it using `npm install -g firebase-cli-hearth.tar.gz` (might have to `sudo`)

Clone this repo and enter the `functions` directory:

```bash
git clone sso://devrel/samples/firebase/quickstart/web
cd web/moderator-gcf
```

Create a Firebase/Google Developer Project. Do this on the [App Manager (Staging)](http://go/appmanager-staging)

> PS: If you get an error you need to initially follow a [small process]((https://docs.google.com/document/d/18iI_4uG6uh_AcewWD9OVTQbq_xNZRNAUzgcf7QML2Ek/edit#heading=h.36bxeqj15c70)) to enable the experiment.

Find your Firebase DB URL. You can find it in the **Database** section. It will look like:
`https://<YOUR_APP_ID>.firebaseio-staging.com/` Note your **App ID** and the **Database URL**.
Use these values to replace `<APP_ID>` in the `firebase.json` and the `<DATABASE_URL>` in `scripts/main.js` and `functions/config.json`.
You can also do this automatically by running: `./setup.sh <DATABASE_URL>`. For example: `setup.sh https://hearth-quickstart-752c4.firebaseio-staging.com/`.

Enable the Google Cloud Functions APIs on your project:

 - Open [this page](https://console.developers.google.com/flows/enableapi?apiid=cloudfunctions,container,compute_component,storage_component,pubsub,logging)
 - Choose the project you created earlier and click **Continue**

Enable Billing on your project:

 - Open [this page](https://console.developers.google.com/project/_/settings)
 - Choose the project you created earlier and click **Continue**
 - Click **Enable Billing**
 - Select one of your **Billing accounts**. You may have to [create a Billing account](https://pantheon.corp.google.com/billing/create) first.

Run `firebase auth` and authenticate with your Google account.


## Start a local development server

You can start a local development server by running:

```bash
firebase serve
```

Then open [http://localhost:5000](http://localhost:5000)

You'll see a working Guestbook. Simply add some messages and they should appear in the card below.

The GCF haven't been deployed yet so they are not active. Once we've deployed the GCF in the next step offensive messages will be moderated server side.


## Deploy the app to prod

Deploy to Firebase using the following command:

```bash
firebase deploy
```

This deploys a new version of your code that will be served from `https://<APP_ID>.firebaseapp-staging.com`

This also deploys and activate the GCF which will moderate all your messages.

> The first time you call `firebase deploy` your GCP project is spinning up the GCE instances and Kubernetes clusters required to run Cloud Functions. Wait a few minutes and run `firebase deploy` again.

On the Web UI offensive messages will now get moderated. For instance try to add "I DON'T LIKE THIS APP!!" this will get moderated to a - more civilized - non uppercase message: "I don't like this app.". Also messages containing swearwords (like "crap" or "poop") will also be moderated.


## Contributing

We'd love that you contribute to the project. Before doing so please read our [Contributor guide](../CONTRIBUTING.md).


## License

© Google, 2015. Licensed under an [Apache-2](../LICENSE) license.