type CacheEntry = {
    data: any;
    expiresAt: number;
};

const cache = new Map<string, CacheEntry>();
const TTL = 5 * 60 * 1000; // 5 minutes

export const getCache = (key: string) => {
    const entry = cache.get(key);
    if (!entry) return null;

    if (Date.now() > entry.expiresAt) {
        cache.delete(key);
        return null;
    }
    return entry.data;
};

export const setCache = (key: string, data: any) => {
    cache.set(key, {
        data,
        expiresAt: Date.now() + TTL,
    });
};

export const getCacheStatus = (key: string) => {
    const entry = cache.get(key);
    if (!entry) return "MISS";
    if (Date.now() > entry.expiresAt) return "EXPIRED";
    return "HIT";
};
