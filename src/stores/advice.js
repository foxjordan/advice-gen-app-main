import { writable } from "svelte/store";

let url = "https://api.adviceslip.com/advice";

export const advice = writable("");
export const adviceId = writable("");
export const loading = writable(false);


export const getAdvice = async () => {
    loading.set(true);
    const response = await fetch(url);
    const data = await response.json();
    advice.set(data.slip.advice);
    adviceId.set(data.slip.id);
    loading.set(false);
};
getAdvice();