import cacheData from "memory-cache";

export default async function apiCacheFetch(url, options = {}) {
    const value = cacheData.get(url);
    if (value) {
        return value;
    } else {
        const res = await fetch(url, options);
        const data = await res.json();
        cacheData.put(url, data, 24 * 1000 * 60 * 60);
        return data;
    }
}