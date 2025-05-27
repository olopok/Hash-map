export class HashMap {
  capacity = 16;
  loadFactor = 0.75;
  growingAt = Math.ceil(this.capacity * this.loadFactor);
  buckets = new Array(this.capacity).fill(null).map(() => []);

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    hashCode = hashCode % this.capacity;
    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key);

    if (this.length() >= this.growingAt) {
      this.resize();
    }

    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }

    const bucket = [key, value];
    if (!this.buckets[index]) {
      this.buckets[index] = [bucket];
      return;
    }
    for (let i = 0; i < this.buckets[index].length; i++) {
      if (this.buckets[index][i][0] === key) {
        this.buckets[index][i][1] = value;
        return;
      }
    }
    this.buckets[index].push(bucket);
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return console.log(`The value of ${key} is: ${bucket[i][1]}`);
      } else return console.log(`The key ${key} not found:`, null);
    }
  }

  has(key) {
    for (let i = 0; i < this.buckets.length; i++) {
      for (let elem of this.buckets[i]) {
        if (elem[0] === key) {
          return true;
        }
      }
    }
    return false;
  }

  remove(key) {
    if (this.has(key)) {
      const index = this.hash(key);
      const bucket = this.buckets[index];
      for (let arr of this.buckets[index]) {
        if (arr[0] === key) {
          const entryIndex = this.buckets[index].indexOf(arr);
          this.buckets[index].splice(entryIndex, 1);
          console.log("remove", this.buckets);
          return true;
        }
      }
    }
    return false;
  }

  length() {
    let entries = 0;
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i]) {
        for (let arr of this.buckets[i]) {
          if (arr) {
            entries++;
          }
        }
      }
    }
    return entries;
  }

  clear() {
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
    return this.buckets;
  }

  keys() {
    const keys = [];
    for (let i in this.buckets) {
      for (let element of this.buckets[i]) {
        keys.push(element[0]);
      }
    }
    return keys;
  }

  values() {
    const values = [];
    for (let i in this.buckets) {
      for (let element of this.buckets[i]) {
        values.push(element[1]);
      }
    }
    return values;
  }

  entries() {
    const entriesArr = [];
    for (let i in this.buckets) {
      for (let element of this.buckets[i]) {
        if (element) {
          entriesArr.push(element);
        }
      }
    }
    return entriesArr;
  }

  resize() {
    this.capacity *= 2;
    let buckets = new Array(this.capacity).fill(null).map(() => []);
    const entries = this.entries();
    for (let arr of entries) {
      let index = this.hash(arr[0]);
      buckets[index].push(arr);
    }
    this.buckets = buckets;
    this.growingAt = Math.ceil(this.capacity * this.loadFactor);
  }
}
