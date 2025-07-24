// src/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // Auth モジュールをインポート
import { getFirestore } from 'firebase/firestore'; // Firestore モジュールをインポート
import firebaseConfig from './firebaseConfig';

// Firebase アプリを初期化
const app = initializeApp(firebaseConfig);

// Auth インスタンスを取得
export const auth = getAuth(app);

// Firestore インスタンスを取得
export const db = getFirestore(app);

// 必要に応じて他のサービス（例: Storage）もエクスポートできます
// export const storage = getStorage(app);