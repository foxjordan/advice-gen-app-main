<script>
    import { getAdvice, advice, adviceId, loading } from "../stores/advice.js";
    import { browser } from "$app/env";

    let isMobile = true;
    let mobileSrc =
        "https://firebasestorage.googleapis.com/v0/b/advice-app-1297xt.appspot.com/o/pattern-divider-mobile.svg?alt=media&token=f7c49596-b86d-4cf6-80f3-5a07d1c29cf8";
    let desktopSrc =
        "https://firebasestorage.googleapis.com/v0/b/advice-app-1297xt.appspot.com/o/pattern-divider-desktop.svg?alt=media&token=1024505e-5510-4425-a1bc-d989718862d6";
    let dice =
        "https://firebasestorage.googleapis.com/v0/b/advice-app-1297xt.appspot.com/o/icon-dice.svg?alt=media&token=9814b6ca-54a2-4899-a233-069766cbbb8b";
    const handleClick = () => {
        getAdvice();
    };
</script>

{#if browser}
    <div
        class="flex flex-col text-center mx-auto mt-32 bg-grayish-blue w-3/4 max-w-24 rounded-xl py-10 px-24"
    >
        {#if $loading}
            <h1 class="text-light-cyan font-bold text-2xl font-sans">
                Loading...
            </h1>
        {:else}
            <h1 class="text-neon-green my-4 text-sm">ADVICE #{$adviceId}</h1>
            <h1 class="text-light-cyan font-bold text-2xl font-sans">
                "{$advice}"
            </h1>

            <div class="flex flex-col items-center mt-8">
                <img
                    class="w-full"
                    src={window.screen.width <= 1000 ? mobileSrc : desktopSrc}
                    alt="divider"
                />
            </div>
            <img
                src={dice}
                alt=""
                class="p-4 bg-neon-green hover:bg-green-300 w-16 rounded-full mx-auto static translate-y-16"
                on:click={handleClick}
            />
        {/if}
    </div>
{/if}
