import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDq1HlMfeyYmaRtH-KoHh9tyTvUnoEoV-w',
  authDomain: 'organick-f1be5.firebaseapp.com',
  projectId: 'organick-f1be5',
  storageBucket: 'organick-f1be5.appspot.com',
  messagingSenderId: '638425392083',
  appId: '1:638425392083:web:5f545012deb9a3ccca8526',
  measurementId: 'G-2DB86XE15W',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);