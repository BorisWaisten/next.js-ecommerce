import { ref, listAll, getDownloadURL, uploadBytes } from 'firebase/storage';
import { storage } from './firebase';

async function getUrls(folder) {
    const listRef = ref(storage, folder);
    const list = await listAll(listRef);
    const urls = [];
    for (let i = 0; i < list.items.length; i++) {
        const item = list.items[i];
        const url = await getDownloadURL(item);  // Usamos la función integrada de Firebase
        urls.push(url);
    }
    return urls;
}

async function addImageToFolder(folder,category,name, file) {
    const imgRef = ref(storage, `${folder}/${category}/${name}`);
    const snapshot = await uploadBytes(imgRef, file);
    const url = await getDownloadURL(snapshot.ref);  // Usamos la función integrada de Firebase
    return url;
}

export { getUrls, addImageToFolder };
