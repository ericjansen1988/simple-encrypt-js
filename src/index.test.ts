import Encryption from './Encryption';
const encryption = new Encryption();

const key = encryption.generateRandomKey(32);

const testPassword = 'Test123!';

test('Hash string without errors', () => {
    expect(() => encryption.hashString(testPassword)).not.toThrow();
});

test('Generate random key without errors', () => {
    expect(() => encryption.generateRandomKey(32)).not.toThrow();
});

test('Encrypt string and return object', () => {
    expect(() => encryption.encryptString(testPassword, key)).not.toThrow();
});

test('Decrypt string and return object', () => {
    const encrypted = encryption.encryptString(testPassword, key);
    expect(() => encryption.decryptString(encrypted.encryptedString, key, encrypted.iv)).not.toThrow();
});
