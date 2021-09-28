import 'firebase/analytics';
// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

import app from 'firebase/app';

import { CreateIProRequest } from '../containers/ApplyForm/types';
import { Category } from '../types/api';
import { Blog } from '../types/blog';

const firebaseConfig = {
    apiKey: 'AIzaSyA94kqL4BpToxywY0UdPb5s27ews1sCfgc',
    authDomain: 'topipro-72edb.firebaseapp.com',
    projectId: 'topipro-72edb',
    storageBucket: 'topipro-72edb.appspot.com',
    messagingSenderId: '231792178056',
    appId: '1:231792178056:web:437874c19a2fa8d7ebc03d',
    measurementId: 'G-GPETB9P2SZ'
};

function snapshotToArray(snapshot) {
    const returnArr = [];

    snapshot.forEach(function (childSnapshot) {
        const item = childSnapshot.val();
        item.key = childSnapshot.key;

        returnArr.push(item);
    });

    return returnArr;
}
let singleton = 0;

class Firebase {
    auth: app.auth.Auth;
    db: app.database.Database;
    storage: app.storage.Storage;
    analytics: app.analytics.Analytics;
    constructor() {
        if (singleton === 0) {
            app.initializeApp(firebaseConfig);
            singleton++;
        }
        this.auth = app.auth();
        this.db = app.database();
        this.storage = app.storage();
        this.analytics = app.analytics();
    }

    login(email: string, password: string) {
        return this.auth.signInWithEmailAndPassword(email, password);
    }
    logout() {
        return this.auth.signOut();
    }
    async resetPassword(mailAddress: string) {
        return await this.auth.sendPasswordResetEmail(mailAddress);
    }
    async contResetPassword(code: string, newPassword: string) {
        return await this.auth.confirmPasswordReset(code, newPassword);
    }
    getCurrentUser() {
        return this.auth.currentUser;
    }
    async register(email: string, password: string, fullName: string) {
        const res = await this.auth.createUserWithEmailAndPassword(email, password);
        this.auth.currentUser.updateProfile({
            displayName: fullName
        });
        await this.auth.currentUser.sendEmailVerification();
        return res;
    }
    async verifyEmail(code: string) {
        return await this.auth.applyActionCode(code);
    }
    isInitialized() {
        return new Promise((resolve) => this.auth.onAuthStateChanged(resolve));
    }
    async simpleGet() {
        return await (await this.db.ref('/test').get()).exportVal();
    }
    async getCategories(): Promise<Record<number, Category>> {
        return (await this.db.ref('/categories').get()).exportVal();
    }
    async getBlogs(): Promise<Blog[]> {
        return (await this.db.ref('/blogs').get()).exportVal();
    }
    async createIPro(iPro: CreateIProRequest) {
        return await this.db.ref('ipros').push(iPro);
    }
    async uploadImage(image: File) {
        await this.storage.ref('users/images').child(image.name).put(image);
        return this.storage.ref('users/images').child(image.name).getDownloadURL();
    }
    async getIPros() {
        return (await this.db.ref('ipros').get()).exportVal();
    }
}
export default new Firebase();
