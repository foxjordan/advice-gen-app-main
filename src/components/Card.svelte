<script>
    import { getAdvice, advice, adviceId, loading } from "../stores/advice.js";
    import { browser } from "$app/env";

    let isMobile = true;
    let mobileSrc = "../../static/pattern-divider-mobile.svg";
    let desktopSrc = "../../static/pattern-divider-desktop.svg";
    let dice = "../../static/icon-dice.svg";
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
