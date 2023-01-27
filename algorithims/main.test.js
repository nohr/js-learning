import { expect, test } from "vitest";
import { cumulate } from "./sum";
// import { LRU } from "./LRU";
import { search } from "./bs";

test("cumulative sum of an array", () => {
    expect(cumulate([1, 2, 3, 4, 5,])).toBe(15);
    expect(cumulate([-2, -4, -8])).toBe(-14);
})

// test("Least Recently Used (LRU) cache", () => {
//     const cache = new LRU(3);
//     cache.putItem('a', 1);
//     cache.putItem('b', 2);
//     cache.putItem('c', 3);
//     cache.putItem('d', 4);

//     expect(cache.cache).toBe(
//         `Map { 
//         'b' => 2,
//         'c' => 3,
//         'd' => 4
//     }`)
// })


test("Binary Search", () => {
    expect(search(["a", "b", "c", "d"], "c")).toBe(2)
    expect(search(["a", "b", 1, "d"], "b")).toBe(1)
})