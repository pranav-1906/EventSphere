# EventApp 🎉

A simple event management app built with React and Firebase Firestore. Users can add, view, and delete events seamlessly.

## 🚀 Live Demo
🔗 [Check it out on Netlify](https://eventsphere-v1.netlify.app/)

## 📌 Features
- 📅 Add events with a name, description, and date.
- 🔍 View a list of upcoming events.
- ❌ Delete events when no longer needed.
- 🔥 Responsive and minimalistic UI.

## 🛠 Setup Instructions

### 1️⃣ Clone this repository
```sh
git clone https://github.com/pranav-1906/EventSphere
cd your-repo
```

### 2️⃣ Install dependencies
```sh
npm install
```

### 3️⃣ Configure Firebase
1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
2. Set up Firestore and obtain your Firebase config.
3. Create a `.env` file in the root folder and add:
   ```env
   REACT_APP_FIREBASE_API_KEY=your-api-key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
   REACT_APP_FIREBASE_PROJECT_ID=your-project-id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   REACT_APP_FIREBASE_APP_ID=your-app-id
   ```

### 4️⃣ Start the app
```sh
npm start
```
The app should now be running at `http://localhost:3000`.

## ⚡ Technologies Used
- React.js ⚛️
- Firebase Firestore 🔥
- HTML & CSS 🎨

## 🏗 Deployment
To deploy the app on Netlify:
1. Run `npm run build` to create a production build.
2. Push the repository to GitHub.
3. Connect your GitHub repo to Netlify and deploy.

## 📝 License
This project is open-source.

---

💡 **Feel free to contribute!** Fork the repo, make your changes, and submit a pull request. Happy coding! 🚀

