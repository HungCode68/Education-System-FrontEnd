import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SecureStorageService {
  private readonly SECRET_KEY = environment.production ? 'LmsSecretKeyProd2026' : 'LmsSecretKeyDev2026';

  constructor() {}

  public setItem(key: string, data: any): void {
    try {
      const jsonString = JSON.stringify(data);
      const encrypted = CryptoJS.AES.encrypt(jsonString, this.SECRET_KEY).toString();
      localStorage.setItem(key, encrypted);
    } catch (e) {
      console.error('Lỗi khi mã hóa dữ liệu lưu vào localStorage', e);
    }
  }

  public getItem<T>(key: string): T | null {
    try {
      const encrypted = localStorage.getItem(key);
      if (!encrypted) {
        return null;
      }
      const decrypted = CryptoJS.AES.decrypt(encrypted, this.SECRET_KEY).toString(CryptoJS.enc.Utf8);
      if (!decrypted) {
        return null; 
      }
      return JSON.parse(decrypted) as T;
    } catch (e) {
      console.error('Lỗi khi giải mã dữ liệu từ localStorage', e);
      return null;
    }
  }

  public removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  public clear(): void {
    localStorage.clear();
  }
}
