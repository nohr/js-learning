// Create a data structure that implements the requirements of a Least Recently Used (LRU) cache with O(1) average time complexity.

export class LRU {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    getItem(key) {
        const item = this.cache.get(key);
        // If item is not in cache, return null 

        if (item) {
            this.cache.delete(key);
            this.cache.set(key, item);
        }

    }

    putItem(key, value) {
        // If item is already in cache, delete it
        if (this.cache.has(key)) {
            this.cache.delete(key);
        }
        // If cache is full, delete the oldest item
        else if (this.cache.size == this.capacity) {
            this.cache.delete(this.oldestItem[0]);
        }
        this.cache.set(key, value);
    }
    // Add item to cache
    get oldestItem() {
        return this.cache.entries().next().value;
    }
}

const cache = new LRU(5);
cache.putItem('a', 1);
cache.putItem('b', 2);
cache.putItem('c', 3);
cache.putItem('d', 4);
// cache.getItem('b');
cache.putItem('e', 5);
cache.putItem('f', 6);
console.log(cache.cache);