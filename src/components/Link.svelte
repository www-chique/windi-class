<script lang="ts">
	// Props
	export let href: string | undefined = undefined;
</script>

<a {href} class="font-semibold no-underline cursor-pointer" on:click class:focus:underline={href} class:hover:underline={href} tabindex="0">
	<slot />
</a>
