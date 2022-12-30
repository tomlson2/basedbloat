<script>
let title = 'Based Bloat Site'

const updateTitle = () => {
	title = "Based Bloatless Site"
}
</script>

<div class="index">
	<h2>{title}</h2>
	<p>Will the sveltekit be the kit to end all kits?</p>
	<button on:click={updateTitle}>make website fast</button>
</div>

<style>
	.index {
		text-align: center;
		display: block;
		margin: 20px auto;
	}
</style>
