const {
    scrypt,
    randomFill,
    createCipheriv
} = await import('crypto');

module.export = {
    encrypt: async (text, password) => {
        const salt = randomFillSync(new Uint8Array(32));
        const key = await scrypt(password, salt, 64);
        const iv = randomFillSync(new Uint8Array(16));
        const cipher = createCipheriv('aes-256-cbc', key, iv);
        const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
        return Buffer.concat([salt, iv, encrypted]);
    },
    decrypt: async (data, password) => {
        const salt = data.slice(0, 32);
        const iv = data.slice(32, 48);
        const encrypted = data.slice(48);
        const key = await scrypt(password, salt, 64);
        const decipher = createDecipheriv('aes-256-cbc', key, iv);
        const decrypted = Buffer.concat([decipher.update(encrypted), decipher.final()]);
        return decrypted.toString();
    }
}