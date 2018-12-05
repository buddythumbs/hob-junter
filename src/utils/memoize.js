import hash from 'object-hash';

// Curried memoization takes a function as argument

let cache = {};
export const memoize = (fn) => async (...args) => {
    console.log(...args);
    
    let n = hash(args);
    if (n in cache) {
        console.log('Fetching from cache %s',n);
        console.log(cache);
        return cache[n];
    }else {
        console.log('Calculating result from %s',n);
        let result = await fn(...args);
        cache[n] = result;
        return result;
    }
  }