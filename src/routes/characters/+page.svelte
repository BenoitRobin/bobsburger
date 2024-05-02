<script lang="ts">
	export let data;
	$: characters = data?.characters;
</script>

<svelte:head>
	<title>Characters</title>
</svelte:head>

<h1>Characters</h1>

<a href="/">Home</a>
<a href="/about">About</a>

<ul>
	{#each characters as { name, id }}
		<li>
			<a href={`/characters/${id}`}>
				{name}
			</a>
		</li>
	{/each}
</ul>

<style>
</style>
