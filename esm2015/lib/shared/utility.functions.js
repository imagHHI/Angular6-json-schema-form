/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { hasValue, inArray, isArray, isDefined, isObject, isEmpty, isMap, isSet, isString } from './validator.functions';
/**
 * 'addClasses' function
 *
 * Merges two space-delimited lists of CSS classes and removes duplicates.
 *
 * // {string | string[] | Set<string>} oldClasses
 * // {string | string[] | Set<string>} newClasses
 * // {string | string[] | Set<string>} - Combined classes
 * @param {?} oldClasses
 * @param {?} newClasses
 * @return {?}
 */
export function addClasses(oldClasses, newClasses) {
    /** @type {?} */
    const badType = i => !isSet(i) && !isArray(i) && !isString(i);
    if (badType(newClasses)) {
        return oldClasses;
    }
    if (badType(oldClasses)) {
        oldClasses = '';
    }
    /** @type {?} */
    const toSet = i => isSet(i) ? i : isArray(i) ? new Set(i) : new Set(i.split(' '));
    /** @type {?} */
    const combinedSet = toSet(oldClasses);
    /** @type {?} */
    const newSet = toSet(newClasses);
    newSet.forEach(c => combinedSet.add(c));
    if (isSet(oldClasses)) {
        return combinedSet;
    }
    if (isArray(oldClasses)) {
        return Array.from(combinedSet);
    }
    return Array.from(combinedSet).join(' ');
}
/**
 * 'copy' function
 *
 * Makes a shallow copy of a JavaScript object, array, Map, or Set.
 * If passed a JavaScript primitive value (string, number, boolean, or null),
 * it returns the value.
 *
 * // {Object|Array|string|number|boolean|null} object - The object to copy
 * // {boolean = false} errors - Show errors?
 * // {Object|Array|string|number|boolean|null} - The copied object
 * @param {?} object
 * @param {?=} errors
 * @return {?}
 */
export function copy(object, errors = false) {
    if (typeof object !== 'object' || object === null) {
        return object;
    }
    if (isMap(object)) {
        return new Map(object);
    }
    if (isSet(object)) {
        return new Set(object);
    }
    if (isArray(object)) {
        return [...object];
    }
    if (isObject(object)) {
        return Object.assign({}, object);
    }
    if (errors) {
        console.error('copy error: Object to copy must be a JavaScript object or value.');
    }
    return object;
}
/**
 * 'forEach' function
 *
 * Iterates over all items in the first level of an object or array
 * and calls an iterator funciton on each item.
 *
 * The iterator function is called with four values:
 * 1. The current item's value
 * 2. The current item's key
 * 3. The parent object, which contains the current item
 * 4. The root object
 *
 * Setting the optional third parameter to 'top-down' or 'bottom-up' will cause
 * it to also recursively iterate over items in sub-objects or sub-arrays in the
 * specified direction.
 *
 * // {Object|Array} object - The object or array to iterate over
 * // {function} fn - the iterator funciton to call on each item
 * // {boolean = false} errors - Show errors?
 * // {void}
 * @param {?} object
 * @param {?} fn
 * @param {?=} recurse
 * @param {?=} rootObject
 * @param {?=} errors
 * @return {?}
 */
export function forEach(object, fn, recurse = false, rootObject = object, errors = false) {
    if (isEmpty(object)) {
        return;
    }
    if ((isObject(object) || isArray(object)) && typeof fn === 'function') {
        for (const key of Object.keys(object)) {
            /** @type {?} */
            const value = object[key];
            if (recurse === 'bottom-up' && (isObject(value) || isArray(value))) {
                forEach(value, fn, recurse, rootObject);
            }
            fn(value, key, object, rootObject);
            if (recurse === 'top-down' && (isObject(value) || isArray(value))) {
                forEach(value, fn, recurse, rootObject);
            }
        }
    }
    if (errors) {
        if (typeof fn !== 'function') {
            console.error('forEach error: Iterator must be a function.');
            console.error('function', fn);
        }
        if (!isObject(object) && !isArray(object)) {
            console.error('forEach error: Input object must be an object or array.');
            console.error('object', object);
        }
    }
}
/**
 * 'forEachCopy' function
 *
 * Iterates over all items in the first level of an object or array
 * and calls an iterator function on each item. Returns a new object or array
 * with the same keys or indexes as the original, and values set to the results
 * of the iterator function.
 *
 * Does NOT recursively iterate over items in sub-objects or sub-arrays.
 *
 * // {Object | Array} object - The object or array to iterate over
 * // {function} fn - The iterator funciton to call on each item
 * // {boolean = false} errors - Show errors?
 * // {Object | Array} - The resulting object or array
 * @param {?} object
 * @param {?} fn
 * @param {?=} errors
 * @return {?}
 */
export function forEachCopy(object, fn, errors = false) {
    if (!hasValue(object)) {
        return;
    }
    if ((isObject(object) || isArray(object)) && typeof object !== 'function') {
        /** @type {?} */
        const newObject = isArray(object) ? [] : {};
        for (const key of Object.keys(object)) {
            newObject[key] = fn(object[key], key, object);
        }
        return newObject;
    }
    if (errors) {
        if (typeof fn !== 'function') {
            console.error('forEachCopy error: Iterator must be a function.');
            console.error('function', fn);
        }
        if (!isObject(object) && !isArray(object)) {
            console.error('forEachCopy error: Input object must be an object or array.');
            console.error('object', object);
        }
    }
}
/**
 * 'hasOwn' utility function
 *
 * Checks whether an object or array has a particular property.
 *
 * // {any} object - the object to check
 * // {string} property - the property to look for
 * // {boolean} - true if object has property, false if not
 * @param {?} object
 * @param {?} property
 * @return {?}
 */
export function hasOwn(object, property) {
    if (!object || !['number', 'string', 'symbol'].includes(typeof property) ||
        (!isObject(object) && !isArray(object) && !isMap(object) && !isSet(object))) {
        return false;
    }
    if (isMap(object) || isSet(object)) {
        return object.has(property);
    }
    if (typeof property === 'number') {
        if (isArray(object)) {
            return object[/** @type {?} */ (property)];
        }
        property = property + '';
    }
    return object.hasOwnProperty(property);
}
/**
 * 'mergeFilteredObject' utility function
 *
 * Shallowly merges two objects, setting key and values from source object
 * in target object, excluding specified keys.
 *
 * Optionally, it can also use functions to transform the key names and/or
 * the values of the merging object.
 *
 * // {PlainObject} targetObject - Target object to add keys and values to
 * // {PlainObject} sourceObject - Source object to copy keys and values from
 * // {string[]} excludeKeys - Array of keys to exclude
 * // {(string: string) => string = (k) => k} keyFn - Function to apply to keys
 * // {(any: any) => any = (v) => v} valueFn - Function to apply to values
 * // {PlainObject} - Returns targetObject
 * @param {?} targetObject
 * @param {?} sourceObject
 * @param {?=} excludeKeys
 * @param {?=} keyFn
 * @param {?=} valFn
 * @return {?}
 */
export function mergeFilteredObject(targetObject, sourceObject, excludeKeys = /** @type {?} */ ([]), keyFn = (key) => key, valFn = (val) => val) {
    if (!isObject(sourceObject)) {
        return targetObject;
    }
    if (!isObject(targetObject)) {
        targetObject = {};
    }
    for (const key of Object.keys(sourceObject)) {
        if (!inArray(key, excludeKeys) && isDefined(sourceObject[key])) {
            targetObject[keyFn(key)] = valFn(sourceObject[key]);
        }
    }
    return targetObject;
}
/**
 * 'uniqueItems' function
 *
 * Accepts any number of string value inputs,
 * and returns an array of all input vaues, excluding duplicates.
 *
 * // {...string} ...items -
 * // {string[]} -
 * @param {...?} items
 * @return {?}
 */
export function uniqueItems(...items) {
    /** @type {?} */
    const returnItems = [];
    for (const item of items) {
        if (!returnItems.includes(item)) {
            returnItems.push(item);
        }
    }
    return returnItems;
}
/**
 * 'commonItems' function
 *
 * Accepts any number of strings or arrays of string values,
 * and returns a single array containing only values present in all inputs.
 *
 * // {...string|string[]} ...arrays -
 * // {string[]} -
 * @param {...?} arrays
 * @return {?}
 */
export function commonItems(...arrays) {
    /** @type {?} */
    let returnItems = null;
    for (let array of arrays) {
        if (isString(array)) {
            array = [array];
        }
        returnItems = returnItems === null ? [...array] :
            returnItems.filter(item => array.includes(item));
        if (!returnItems.length) {
            return [];
        }
    }
    return returnItems;
}
/**
 * 'fixTitle' function
 *
 *
 * // {string} input -
 * // {string} -
 * @param {?} name
 * @return {?}
 */
export function fixTitle(name) {
    return name && toTitleCase(name.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/_/g, ' '));
}
/**
 * 'toTitleCase' function
 *
 * Intelligently converts an input string to Title Case.
 *
 * Accepts an optional second parameter with a list of additional
 * words and abbreviations to force into a particular case.
 *
 * This function is built on prior work by John Gruber and David Gouch:
 * http://daringfireball.net/2008/08/title_case_update
 * https://github.com/gouch/to-title-case
 *
 * // {string} input -
 * // {string|string[]} forceWords? -
 * // {string} -
 * @param {?} input
 * @param {?=} forceWords
 * @return {?}
 */
export function toTitleCase(input, forceWords) {
    if (!isString(input)) {
        return input;
    }
    /** @type {?} */
    let forceArray = ['a', 'an', 'and', 'as', 'at', 'but', 'by', 'en',
        'for', 'if', 'in', 'nor', 'of', 'on', 'or', 'per', 'the', 'to', 'v', 'v.',
        'vs', 'vs.', 'via'];
    if (isString(forceWords)) {
        forceWords = (/** @type {?} */ (forceWords)).split('|');
    }
    if (isArray(forceWords)) {
        forceArray = forceArray.concat(forceWords);
    }
    /** @type {?} */
    const forceArrayLower = forceArray.map(w => w.toLowerCase());
    /** @type {?} */
    const noInitialCase = input === input.toUpperCase() || input === input.toLowerCase();
    /** @type {?} */
    let prevLastChar = '';
    input = input.trim();
    return input.replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, (word, idx) => {
        if (!noInitialCase && word.slice(1).search(/[A-Z]|\../) !== -1) {
            return word;
        }
        else {
            /** @type {?} */
            let newWord;
            /** @type {?} */
            const forceWord = forceArray[forceArrayLower.indexOf(word.toLowerCase())];
            if (!forceWord) {
                if (noInitialCase) {
                    if (word.slice(1).search(/\../) !== -1) {
                        newWord = word.toLowerCase();
                    }
                    else {
                        newWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
                    }
                }
                else {
                    newWord = word[0].toUpperCase() + word.slice(1);
                }
            }
            else if (forceWord === forceWord.toLowerCase() && (idx === 0 || idx + word.length === input.length ||
                prevLastChar === ':' || input[idx - 1].search(/[^\s-]/) !== -1 ||
                (input[idx - 1] !== '-' && input[idx + word.length] === '-'))) {
                newWord = forceWord[0].toUpperCase() + forceWord.slice(1);
            }
            else {
                newWord = forceWord;
            }
            prevLastChar = word.slice(-1);
            return newWord;
        }
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0eS5mdW5jdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9qc29uLXNjaGVtYS1mb3JtLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC91dGlsaXR5LmZ1bmN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFFBQVEsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQ3RFLFFBQVEsRUFDVCxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7Ozs7Ozs7O0FBa0IvQixNQUFNLHFCQUNKLFVBQTJDLEVBQzNDLFVBQTJDOztJQUUzQyxNQUFNLE9BQU8sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFBQyxNQUFNLENBQUMsVUFBVSxDQUFDO0tBQUU7SUFDL0MsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7S0FBRTs7SUFDN0MsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOztJQUNsRixNQUFNLFdBQVcsR0FBYSxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7O0lBQ2hELE1BQU0sTUFBTSxHQUFhLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMzQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFBQyxNQUFNLENBQUMsV0FBVyxDQUFDO0tBQUU7SUFDOUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0tBQUU7SUFDNUQsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0NBQzFDOzs7Ozs7Ozs7Ozs7Ozs7QUFhRCxNQUFNLGVBQWUsTUFBVyxFQUFFLE1BQU0sR0FBRyxLQUFLO0lBQzlDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sTUFBTSxLQUFLLFFBQVEsSUFBSSxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztRQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FBRTtJQUNyRSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBSSxDQUFDO1FBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQUU7SUFDakQsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUksQ0FBQztRQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUFFO0lBQ2pELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFFLENBQUM7UUFBQyxNQUFNLENBQUMsQ0FBRSxHQUFHLE1BQU0sQ0FBRSxDQUFDO0tBQUk7SUFDakQsRUFBRSxD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aXNEZWZpbmVkLCBpc09iamVjdCwgaXNFbXB0eSwgaXNNYXAsIGlzU2V0LFxuICBpc1N0cmluZywgUGxhaW5PYmplY3Rcbn0gZnJvbSAnLi92YWxpZGF0b3IuZnVuY3Rpb25zJztcblxuLyoqXG4gKiBVdGlsaXR5IGZ1bmN0aW9uIGxpYnJhcnk6XG4gKlxuICogYWRkQ2xhc3NlcywgY29weSwgZm9yRWFjaCwgZm9yRWFjaENvcHksIGhhc093biwgbWVyZ2VGaWx0ZXJlZE9iamVjdCxcbiAqIHVuaXF1ZUl0ZW1zLCBjb21tb25JdGVtcywgZml4VGl0bGUsIHRvVGl0bGVDYXNlXG4qL1xuXG4vKipcbiAqICdhZGRDbGFzc2VzJyBmdW5jdGlvblxuICpcbiAqIE1lcmdlcyB0d28gc3BhY2UtZGVsaW1pdGVkIGxpc3RzIG9mIENTUyBjbGFzc2VzIGFuZCByZW1vdmVzIGR1cGxpY2F0ZXMuXG4gKlxuICogLy8ge3N0cmluZyB8IHN0cmluZ1tdIHwgU2V0PHN0cmluZz59IG9sZENsYXNzZXNcbiAqIC8vIHtzdHJpbmcgfCBzdHJpbmdbXSB8IFNldDxzdHJpbmc+fSBuZXdDbGFzc2VzXG4gKiAvLyB7c3RyaW5nIHwgc3RyaW5nW10gfCBTZXQ8c3RyaW5nPn0gLSBDb21iaW5lZCBjbGFzc2VzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRDbGFzc2VzKFxuICBvbGRDbGFzc2VzOiBzdHJpbmcgfCBzdHJpbmdbXSB8IFNldDxzdHJpbmc+LFxuICBuZXdDbGFzc2VzOiBzdHJpbmcgfCBzdHJpbmdbXSB8IFNldDxzdHJpbmc+XG4pOiBzdHJpbmcgfCBzdHJpbmdbXSB8IFNldDxzdHJpbmc+IHtcbiAgY29uc3QgYmFkVHlwZSA9IGkgPT4gIWlzU2V0KGkpICYmICFpc0FycmF5KGkpICYmICFpc1N0cmluZyhpKTtcbiAgaWYgKGJhZFR5cGUobmV3Q2xhc3NlcykpIHsgcmV0dXJuIG9sZENsYXNzZXM7IH1cbiAgaWYgKGJhZFR5cGUob2xkQ2xhc3NlcykpIHsgb2xkQ2xhc3NlcyA9ICcnOyB9XG4gIGNvbnN0IHRvU2V0ID0gaSA9PiBpc1NldChpKSA/IGkgOiBpc0FycmF5KGkpID8gbmV3IFNldChpKSA6IG5ldyBTZXQoaS5zcGxpdCgnICcpKTtcbiAgY29uc3QgY29tYmluZWRTZXQ6IFNldDxhbnk+ID0gdG9TZXQob2xkQ2xhc3Nlcyk7XG4gIGNvbnN0IG5ld1NldDogU2V0PGFueT4gPSB0b1NldChuZXdDbGFzc2VzKTtcbiAgbmV3U2V0LmZvckVhY2goYyA9PiBjb21iaW5lZFNldC5hZGQoYykpO1xuICBpZiAoaXNTZXQob2xkQ2xhc3NlcykpIHsgcmV0dXJuIGNvbWJpbmVkU2V0OyB9XG4gIGlmIChpc0FycmF5KG9sZENsYXNzZXMpKSB7IHJldHVybiBBcnJheS5mcm9tKGNvbWJpbmVkU2V0KTsgfVxuICByZXR1cm4gQXJyYXkuZnJvbShjb21iaW5lZFNldCkuam9pbignICcpO1xufVxuXG4vKipcbiAqICdjb3B5JyBmdW5jdGlvblxuICpcbiAqIE1ha2VzIGEgc2hhbGxvdyBjb3B5IG9mIGEgSmF2YVNjcmlwdCBvYmplY3QsIGFycmF5LCBNYXAsIG9yIFNldC5cbiAqIElmIHBhc3NlZCBhIEphdmFTY3JpcHQgcHJpbWl0aXZlIHZhbHVlIChzdHJpbmcsIG51bWJlciwgYm9vbGVhbiwgb3IgbnVsbCksXG4gKiBpdCByZXR1cm5zIHRoZSB2YWx1ZS5cbiAqXG4gKiAvLyB7T2JqZWN0fEFycmF5fHN0cmluZ3xudW1iZXJ8Ym9vbGVhbnxudWxsfSBvYmplY3QgLSBUaGUgb2JqZWN0IHRvIGNvcHlcbiAqIC8vIHtib29sZWFuID0gZmFsc2V9IGVycm9ycyAtIFNob3cgZXJyb3JzP1xuICogLy8ge09iamVjdHxBcnJheXxzdHJpbmd8bnVtYmVyfGJvb2xlYW58bnVsbH0gLSBUaGUgY29waWVkIG9iamVjdFxuICovXG5leHBvcnQgZnVuY3Rpb24gY29weShvYmplY3Q6IGFueSwgZXJyb3JzID0gZmFsc2UpOiBhbnkge1xuICBpZiAodHlwZW9mIG9iamVjdCAhPT0gJ29iamVjdCcgfHwgb2JqZWN0ID09PSBudWxsKSB7IHJldHVybiBvYmplY3Q7IH1cbiAgaWYgKGlzTWFwKG9iamVjdCkpICAgIHsgcmV0dXJuIG5ldyBNYXAob2JqZWN0KTsgfVxuICBpZiAoaXNTZXQob2JqZWN0KSkgICAgeyByZXR1cm4gbmV3IFNldChvYmplY3QpOyB9XG4gIGlmIChpc0FycmF5KG9iamVjdCkpICB7IHJldHVybiBbIC4uLm9iamVjdCBdOyAgIH1cbiAgaWYgKGlzT2JqZWN0KG9iamVjdCkpIHsgcmV0dXJuIHsgLi4ub2JqZWN0IH07ICAgfVxuICBpZiAoZXJyb3JzKSB7XG4gICAgY29uc29sZS5lcnJvcignY29weSBlcnJvcjogT2JqZWN0IHRvIGNvcHkgbXVzdCBiZSBhIEphdmFTY3JpcHQgb2JqZWN0IG9yIHZhbHVlLicpO1xuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5cbi8qKlxuICogJ2ZvckVhY2gnIGZ1bmN0aW9uXG4gKlxuICogSXRlcmF0ZXMgb3ZlciBhbGwgaXRlbXMgaW4gdGhlIGZpcnN0IGxldmVsIG9mIGFuIG9iamVjdCBvciBhcnJheVxuICogYW5kIGNhbGxzIGFuIGl0ZXJhdG9yIGZ1bmNpdG9uIG9uIGVhY2ggaXRlbS5cbiAqXG4gKiBUaGUgaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIHdpdGggZm91ciB2YWx1ZXM6XG4gKiAxLiBUaGUgY3VycmVudCBpdGVtJ3MgdmFsdWVcbiAqIDIuIFRoZSBjdXJyZW50IGl0ZW0ncyBrZXlcbiAqIDMuIFRoZSBwYXJlbnQgb2JqZWN0LCB3aGljaCBjb250YWlucyB0aGUgY3VycmVudCBpdGVtXG4gKiA0LiBUaGUgcm9vdCBvYmplY3RcbiAqXG4gKiBTZXR0aW5nIHRoZSBvcHRpb25hbCB0aGlyZCBwYXJhbWV0ZXIgdG8gJ3RvcC1kb3duJyBvciAnYm90dG9tLXVwJyB3aWxsIGNhdXNlXG4gKiBpdCB0byBhbHNvIHJlY3Vyc2l2ZWx5IGl0ZXJhdGUgb3ZlciBpdGVtcyBpbiBzdWItb2JqZWN0cyBvciBzdWItYXJyYXlzIGluIHRoZVxuICogc3BlY2lmaWVkIGRpcmVjdGlvbi5cbiAqXG4gKiAvLyB7T2JqZWN0fEFycmF5fSBvYmplY3QgLSBUaGUgb2JqZWN0IG9yIGFycmF5IHRvIGl0ZXJhdGUgb3ZlclxuICogLy8ge2Z1bmN0aW9ufSBmbiAtIHRoZSBpdGVyYXRvciBmdW5jaXRvbiB0byBjYWxsIG9uIGVhY2ggaXRlbVxuICogLy8ge2Jvb2xlYW4gPSBmYWxzZX0gZXJyb3JzIC0gU2hvdyBlcnJvcnM/XG4gKiAvLyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvckVhY2goXG4gIG9iamVjdDogYW55LCBmbjogKHY6IGFueSwgaz86IHN0cmluZyB8IG51bWJlciwgYz86IGFueSwgcmM/OiBhbnkpID0+IGFueSxcbiAgcmVjdXJzZTogYm9vbGVhbiB8IHN0cmluZyA9IGZhbHNlLCByb290T2JqZWN0OiBhbnkgPSBvYmplY3QsIGVycm9ycyA9IGZhbHNlXG4pOiB2b2lkIHtcbiAgaWYgKGlzRW1wdHkob2JqZWN0KSkgeyByZXR1cm47IH1cbiAgaWYgKChpc09iamVjdChvYmplY3QpIHx8IGlzQXJyYXkob2JqZWN0KSkgJiYgdHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMob2JqZWN0KSkge1xuICAgICAgY29uc3QgdmFsdWUgPSBvYmplY3Rba2V5XTtcbiAgICAgIGlmIChyZWN1cnNlID09PSAnYm90dG9tLXVwJyAmJiAoaXNPYmplY3QodmFsdWUpIHx8IGlzQXJyYXkodmFsdWUpKSkge1xuICAgICAgICBmb3JFYWNoKHZhbHVlLCBmbiwgcmVjdXJzZSwgcm9vdE9iamVjdCk7XG4gICAgICB9XG4gICAgICBmbih2YWx1ZSwga2V5LCBvYmplY3QsIHJvb3RPYmplY3QpO1xuICAgICAgaWYgKHJlY3Vyc2UgPT09ICd0b3AtZG93bicgJiYgKGlzT2JqZWN0KHZhbHVlKSB8fCBpc0FycmF5KHZhbHVlKSkpIHtcbiAgICAgICAgZm9yRWFjaCh2YWx1ZSwgZm4sIHJlY3Vyc2UsIHJvb3RPYmplY3QpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoZXJyb3JzKSB7XG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc29sZS5lcnJvcignZm9yRWFjaCBlcnJvcjogSXRlcmF0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xuICAgICAgY29uc29sZS5lcnJvcignZnVuY3Rpb24nLCBmbik7XG4gICAgfVxuICAgIGlmICghaXNPYmplY3Qob2JqZWN0KSAmJiAhaXNBcnJheShvYmplY3QpKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdmb3JFYWNoIGVycm9yOiBJbnB1dCBvYmplY3QgbXVzdCBiZSBhbiBvYmplY3Qgb3IgYXJyYXkuJyk7XG4gICAgICBjb25zb2xlLmVycm9yKCdvYmplY3QnLCBvYmplY3QpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqICdmb3JFYWNoQ29weScgZnVuY3Rpb25cbiAqXG4gKiBJdGVyYXRlcyBvdmVyIGFsbCBpdGVtcyBpbiB0aGUgZmlyc3QgbGV2ZWwgb2YgYW4gb2JqZWN0IG9yIGFycmF5XG4gKiBhbmQgY2FsbHMgYW4gaXRlcmF0b3IgZnVuY3Rpb24gb24gZWFjaCBpdGVtLiBSZXR1cm5zIGEgbmV3IG9iamVjdCBvciBhcnJheVxuICogd2l0aCB0aGUgc2FtZSBrZXlzIG9yIGluZGV4ZXMgYXMgdGhlIG9yaWdpbmFsLCBhbmQgdmFsdWVzIHNldCB0byB0aGUgcmVzdWx0c1xuICogb2YgdGhlIGl0ZXJhdG9yIGZ1bmN0aW9uLlxuICpcbiAqIERvZXMgTk9UIHJlY3Vyc2l2ZWx5IGl0ZXJhdGUgb3ZlciBpdGVtcyBpbiBzdWItb2JqZWN0cyBvciBzdWItYXJyYXlzLlxuICpcbiAqIC8vIHtPYmplY3QgfCBBcnJheX0gb2JqZWN0IC0gVGhlIG9iamVjdCBvciBhcnJheSB0byBpdGVyYXRlIG92ZXJcbiAqIC8vIHtmdW5jdGlvbn0gZm4gLSBUaGUgaXRlcmF0b3IgZnVuY2l0b24gdG8gY2FsbCBvbiBlYWNoIGl0ZW1cbiAqIC8vIHtib29sZWFuID0gZmFsc2V9IGVycm9ycyAtIFNob3cgZXJyb3JzP1xuICogLy8ge09iamVjdCB8IEFycmF5fSAtIFRoZSByZXN1bHRpbmcgb2JqZWN0IG9yIGFycmF5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JFYWNoQ29weShcbiAgb2JqZWN0OiBhbnksIGZuOiAodjogYW55LCBrPzogc3RyaW5nIHwgbnVtYmVyLCBvPzogYW55LCBwPzogc3RyaW5nKSA9PiBhbnksXG4gIGVycm9ycyA9IGZhbHNlXG4pOiBhbnkge1xuICBpZiAoIWhhc1ZhbHVlKG9iamVjdCkpIHsgcmV0dXJuOyB9XG4gIGlmICgoaXNPYmplY3Qob2JqZWN0KSB8fCBpc0FycmF5KG9iamVjdCkpICYmIHR5cGVvZiBvYmplY3QgIT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCBuZXdPYmplY3Q6IGFueSA9IGlzQXJyYXkob2JqZWN0KSA/IFtdIDoge307XG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMob2JqZWN0KSkge1xuICAgICAgbmV3T2JqZWN0W2tleV0gPSBmbihvYmplY3Rba2V5XSwga2V5LCBvYmplY3QpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3T2JqZWN0O1xuICB9XG4gIGlmIChlcnJvcnMpIHtcbiAgICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdmb3JFYWNoQ29weSBlcnJvcjogSXRlcmF0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xuICAgICAgY29uc29sZS5lcnJvcignZnVuY3Rpb24nLCBmbik7XG4gICAgfVxuICAgIGlmICghaXNPYmplY3Qob2JqZWN0KSAmJiAhaXNBcnJheShvYmplY3QpKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdmb3JFYWNoQ29weSBlcnJvcjogSW5wdXQgb2JqZWN0IG11c3QgYmUgYW4gb2JqZWN0IG9yIGFycmF5LicpO1xuICAgICAgY29uc29sZS5lcnJvcignb2JqZWN0Jywgb2JqZWN0KTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiAnaGFzT3duJyB1dGlsaXR5IGZ1bmN0aW9uXG4gKlxuICogQ2hlY2tzIHdoZXRoZXIgYW4gb2JqZWN0IG9yIGFycmF5IGhhcyBhIHBhcnRpY3VsYXIgcHJvcGVydHkuXG4gKlxuICogLy8ge2FueX0gb2JqZWN0IC0gdGhlIG9iamVjdCB0byBjaGVja1xuICogLy8ge3N0cmluZ30gcHJvcGVydHkgLSB0aGUgcHJvcGVydHkgdG8gbG9vayBmb3JcbiAqIC8vIHtib29sZWFufSAtIHRydWUgaWYgb2JqZWN0IGhhcyBwcm9wZXJ0eSwgZmFsc2UgaWYgbm90XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYXNPd24ob2JqZWN0OiBhbnksIHByb3BlcnR5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKCFvYmplY3QgfHwgIVsnbnVtYmVyJywgJ3N0cmluZycsICdzeW1ib2wnXS5pbmNsdWRlcyh0eXBlb2YgcHJvcGVydHkpIHx8XG4gICAgKCFpc09iamVjdChvYmplY3QpICYmICFpc0FycmF5KG9iamVjdCkgJiYgIWlzTWFwKG9iamVjdCkgJiYgIWlzU2V0KG9iamVjdCkpXG4gICkgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKGlzTWFwKG9iamVjdCkgfHwgaXNTZXQob2JqZWN0KSkgeyByZXR1cm4gb2JqZWN0Lmhhcyhwcm9wZXJ0eSk7IH1cbiAgaWYgKHR5cGVvZiBwcm9wZXJ0eSA9PT0gJ251bWJlcicpIHtcbiAgICBpZiAoaXNBcnJheShvYmplY3QpKSB7IHJldHVybiBvYmplY3RbPG51bWJlcj5wcm9wZXJ0eV07IH1cbiAgICBwcm9wZXJ0eSA9IHByb3BlcnR5ICsgJyc7XG4gIH1cbiAgcmV0dXJuIG9iamVjdC5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSk7XG59XG5cbi8qKlxuICogJ21lcmdlRmlsdGVyZWRPYmplY3QnIHV0aWxpdHkgZnVuY3Rpb25cbiAqXG4gKiBTaGFsbG93bHkgbWVyZ2VzIHR3byBvYmplY3RzLCBzZXR0aW5nIGtleSBhbmQgdmFsdWVzIGZyb20gc291cmNlIG9iamVjdFxuICogaW4gdGFyZ2V0IG9iamVjdCwgZXhjbHVkaW5nIHNwZWNpZmllZCBrZXlzLlxuICpcbiAqIE9wdGlvbmFsbHksIGl0IGNhbiBhbHNvIHVzZSBmdW5jdGlvbnMgdG8gdHJhbnNmb3JtIHRoZSBrZXkgbmFtZXMgYW5kL29yXG4gKiB0aGUgdmFsdWVzIG9mIHRoZSBtZXJnaW5nIG9iamVjdC5cbiAqXG4gKiAvLyB7UGxhaW5PYmplY3R9IHRhcmdldE9iamVjdCAtIFRhcmdldCBvYmplY3QgdG8gYWRkIGtleXMgYW5kIHZhbHVlcyB0b1xuICogLy8ge1BsYWluT2JqZWN0fSBzb3VyY2VPYmplY3QgLSBTb3VyY2Ugb2JqZWN0IHRvIGNvcHkga2V5cyBhbmQgdmFsdWVzIGZyb21cbiAqIC8vIHtzdHJpbmdbXX0gZXhjbHVkZUtleXMgLSBBcnJheSBvZiBrZXlzIHRvIGV4Y2x1ZGVcbiAqIC8vIHsoc3RyaW5nOiBzdHJpbmcpID0+IHN0cmluZyA9IChrKSA9PiBrfSBrZXlGbiAtIEZ1bmN0aW9uIHRvIGFwcGx5IHRvIGtleXNcbiAqIC8vIHsoYW55OiBhbnkpID0+IGFueSA9ICh2KSA9PiB2fSB2YWx1ZUZuIC0gRnVuY3Rpb24gdG8gYXBwbHkgdG8gdmFsdWVzXG4gKiAvLyB7UGxhaW5PYmplY3R9IC0gUmV0dXJucyB0YXJnZXRPYmplY3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRmlsdGVyZWRPYmplY3QoXG4gIHRhcmdldE9iamVjdDogUGxhaW5PYmplY3QsXG4gIHNvdXJjZU9iamVjdDogUGxhaW5PYmplY3QsXG4gIGV4Y2x1ZGVLZXlzID0gPHN0cmluZ1tdPltdLFxuICBrZXlGbiA9IChrZXk6IHN0cmluZyk6IHN0cmluZyA9PiBrZXksXG4gIHZhbEZuID0gKHZhbDogYW55KTogYW55ID0+IHZhbFxuKTogUGxhaW5PYmplY3Qge1xuICBpZiAoIWlzT2JqZWN0KHNvdXJjZU9iamVjdCkpIHsgcmV0dXJuIHRhcmdldE9iamVjdDsgfVxuICBpZiAoIWlzT2JqZWN0KHRhcmdldE9iamVjdCkpIHsgdGFyZ2V0T2JqZWN0ID0ge307IH1cbiAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoc291cmNlT2JqZWN0KSkge1xuICAgIGlmICghaW5BcnJheShrZXksIGV4Y2x1ZGVLZXlzKSAmJiBpc0RlZmluZWQoc291cmNlT2JqZWN0W2tleV0pKSB7XG4gICAgICB0YXJnZXRPYmplY3Rba2V5Rm4oa2V5KV0gPSB2YWxGbihzb3VyY2VPYmplY3Rba2V5XSk7XG4gICAgfVxuICB9XG4gIHJldHVybiB0YXJnZXRPYmplY3Q7XG59XG5cbi8qKlxuICogJ3VuaXF1ZUl0ZW1zJyBmdW5jdGlvblxuICpcbiAqIEFjY2VwdHMgYW55IG51bWJlciBvZiBzdHJpbmcgdmFsdWUgaW5wdXRzLFxuICogYW5kIHJldHVybnMgYW4gYXJyYXkgb2YgYWxsIGlucHV0IHZhdWVzLCBleGNsdWRpbmcgZHVwbGljYXRlcy5cbiAqXG4gKiAvLyB7Li4uc3RyaW5nfSAuLi5pdGVtcyAtXG4gKiAvLyB7c3RyaW5nW119IC1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVuaXF1ZUl0ZW1zKC4uLml0ZW1zKTogc3RyaW5nW10ge1xuICBjb25zdCByZXR1cm5JdGVtcyA9IFtdO1xuICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICBpZiAoIXJldHVybkl0ZW1zLmluY2x1ZGVzKGl0ZW0pKSB7IHJldHVybkl0ZW1zLnB1c2goaXRlbSk7IH1cbiAgfVxuICByZXR1cm4gcmV0dXJuSXRlbXM7XG59XG5cbi8qKlxuICogJ2NvbW1vbkl0ZW1zJyBmdW5jdGlvblxuICpcbiAqIEFjY2VwdHMgYW55IG51bWJlciBvZiBzdHJpbmdzIG9yIGFycmF5cyBvZiBzdHJpbmcgdmFsdWVzLFxuICogYW5kIHJldHVybnMgYSBzaW5nbGUgYXJyYXkgY29udGFpbmluZyBvbmx5IHZhbHVlcyBwcmVzZW50IGluIGFsbCBpbnB1dHMuXG4gKlxuICogLy8gey4uLnN0cmluZ3xzdHJpbmdbXX0gLi4uYXJyYXlzIC1cbiAqIC8vIHtzdHJpbmdbXX0gLVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tbW9uSXRlbXMoLi4uYXJyYXlzKTogc3RyaW5nW10ge1xuICBsZXQgcmV0dXJuSXRlbXMgPSBudWxsO1xuICBmb3IgKGxldCBhcnJheSBvZiBhcnJheXMpIHtcbiAgICBpZiAoaXNTdHJpbmcoYXJyYXkpKSB7IGFycmF5ID0gW2FycmF5XTsgfVxuICAgIHJldHVybkl0ZW1zID0gcmV0dXJuSXRlbXMgPT09IG51bGwgPyBbIC4uLmFycmF5IF0gOlxuICAgICAgcmV0dXJuSXRlbXMuZmlsdGVyKGl0ZW0gPT4gYXJyYXkuaW5jbHVkZXMoaXRlbSkpO1xuICAgIGlmICghcmV0dXJuSXRlbXMubGVuZ3RoKSB7IHJldHVybiBbXTsgfVxuICB9XG4gIHJldHVybiByZXR1cm5JdGVtcztcbn1cblxuLyoqXG4gKiAnZml4VGl0bGUnIGZ1bmN0aW9uXG4gKlxuICpcbiAqIC8vIHtzdHJpbmd9IGlucHV0IC1cbiAqIC8vIHtzdHJpbmd9IC1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpeFRpdGxlKG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBuYW1lICYmIHRvVGl0bGVDYXNlKG5hbWUucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgJyQxICQyJykucmVwbGFjZSgvXy9nLCAnICcpKTtcbn1cblxuLyoqXG4gKiAndG9UaXRsZUNhc2UnIGZ1bmN0aW9uXG4gKlxuICogSW50ZWxsaWdlbnRseSBjb252ZXJ0cyBhbiBpbnB1dCBzdHJpbmcgdG8gVGl0bGUgQ2FzZS5cbiAqXG4gKiBBY2NlcHRzIGFuIG9wdGlvbmFsIHNlY29uZCBwYXJhbWV0ZXIgd2l0aCBhIGxpc3Qgb2YgYWRkaXRpb25hbFxuICogd29yZHMgYW5kIGFiYnJldmlhdGlvbnMgdG8gZm9yY2UgaW50byBhIHBhcnRpY3VsYXIgY2FzZS5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGJ1aWx0IG9uIHByaW9yIHdvcmsgYnkgSm9obiBHcnViZXIgYW5kIERhdmlkIEdvdWNoOlxuICogaHR0cDovL2RhcmluZ2ZpcmViYWxsLm5ldC8yMDA4LzA4L3RpdGxlX2Nhc2VfdXBkYXRlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZ291Y2gvdG8tdGl0bGUtY2FzZVxuICpcbiAqIC8vIHtzdHJpbmd9IGlucHV0IC1cbiAqIC8vIHtzdHJpbmd8c3RyaW5nW119IGZvcmNlV29yZHM/IC1cbiAqIC8vIHtzdHJpbmd9IC1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvVGl0bGVDYXNlKGlucHV0OiBzdHJpbmcsIGZvcmNlV29yZHM/OiBzdHJpbmd8c3RyaW5nW10pOiBzdHJpbmcge1xuICBpZiAoIWlzU3RyaW5nKGlucHV0KSkgeyByZXR1cm4gaW5wdXQ7IH1cbiAgbGV0IGZvcmNlQXJyYXk6IHN0cmluZ1tdID0gWydhJywgJ2FuJywgJ2FuZCcsICdhcycsICdhdCcsICdidXQnLCAnYnknLCAnZW4nLFxuICAgJ2ZvcicsICdpZicsICdpbicsICdub3InLCAnb2YnLCAnb24nLCAnb3InLCAncGVyJywgJ3RoZScsICd0bycsICd2JywgJ3YuJyxcbiAgICd2cycsICd2cy4nLCAndmlhJ107XG4gIGlmIChpc1N0cmluZyhmb3JjZVdvcmRzKSkgeyBmb3JjZVdvcmRzID0gKDxzdHJpbmc+Zm9yY2VXb3Jkcykuc3BsaXQoJ3wnKTsgfVxuICBpZiAoaXNBcnJheShmb3JjZVdvcmRzKSkgeyBmb3JjZUFycmF5ID0gZm9yY2VBcnJheS5jb25jYXQoZm9yY2VXb3Jkcyk7IH1cbiAgY29uc3QgZm9yY2VBcnJheUxvd2VyOiBzdHJpbmdbXSA9IGZvcmNlQXJyYXkubWFwKHcgPT4gdy50b0xvd2VyQ2FzZSgpKTtcbiAgY29uc3Qgbm9Jbml0aWFsQ2FzZTogYm9vbGVhbiA9XG4gICAgaW5wdXQgPT09IGlucHV0LnRvVXBwZXJDYXNlKCkgfHwgaW5wdXQgPT09IGlucHV0LnRvTG93ZXJDYXNlKCk7XG4gIGxldCBwcmV2TGFzdENoYXIgPSAnJztcbiAgaW5wdXQgPSBpbnB1dC50cmltKCk7XG4gIHJldHVybiBpbnB1dC5yZXBsYWNlKC9bQS1aYS16MC05XFx1MDBDMC1cXHUwMEZGXStbXlxccy1dKi9nLCAod29yZCwgaWR4KSA9PiB7XG4gICAgaWYgKCFub0luaXRpYWxDYXNlICYmIHdvcmQuc2xpY2UoMSkuc2VhcmNoKC9bQS1aXXxcXC4uLykgIT09IC0xKSB7XG4gICAgICByZXR1cm4gd29yZDtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IG5ld1dvcmQ6IHN0cmluZztcbiAgICAgIGNvbnN0IGZvcmNlV29yZDogc3RyaW5nID1cbiAgICAgICAgZm9yY2VBcnJheVtmb3JjZUFycmF5TG93ZXIuaW5kZXhPZih3b3JkLnRvTG93ZXJDYXNlKCkpXTtcbiAgICAgIGlmICghZm9yY2VXb3JkKSB7XG4gICAgICAgIGlmIChub0luaXRpYWxDYXNlKSB7XG4gICAgICAgICAgaWYgKHdvcmQuc2xpY2UoMSkuc2VhcmNoKC9cXC4uLykgIT09IC0xKSB7XG4gICAgICAgICAgICBuZXdXb3JkID0gd29yZC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdXb3JkID0gd29yZFswXS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdXb3JkID0gd29yZFswXS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgZm9yY2VXb3JkID09PSBmb3JjZVdvcmQudG9Mb3dlckNhc2UoKSAmJiAoXG4gICAgICAgICAgaWR4ID09PSAwIHx8IGlkeCArIHdvcmQubGVuZ3RoID09PSBpbnB1dC5sZW5ndGggfHxcbiAgICAgICAgICBwcmV2TGFzdENoYXIgPT09ICc6JyB8fCBpbnB1dFtpZHggLSAxXS5zZWFyY2goL1teXFxzLV0vKSAhPT0gLTEgfHxcbiAgICAgICAgICAoaW5wdXRbaWR4IC0gMV0gIT09ICctJyAmJiBpbnB1dFtpZHggKyB3b3JkLmxlbmd0aF0gPT09ICctJylcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIG5ld1dvcmQgPSBmb3JjZVdvcmRbMF0udG9VcHBlckNhc2UoKSArIGZvcmNlV29yZC5zbGljZSgxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld1dvcmQgPSBmb3JjZVdvcmQ7XG4gICAgICB9XG4gICAgICBwcmV2TGFzdENoYXIgPSB3b3JkLnNsaWNlKC0xKTtcbiAgICAgIHJldHVybiBuZXdXb3JkO1xuICAgIH1cbiAgfSk7XG59XG4iXX0=