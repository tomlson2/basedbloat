<script>
	import '../app.css';
	import Fuse from 'fuse.js';
	
	const bookmarks = [
		{
			"title": "youtube",
			"link": "https://youtube.com"
		},
		{
			"title": "reddit",
			"link": "https://reddit.com"
		}
	]

	const fuse = new Fuse(bookmarks, {
		keys: ['title']
	})

	let text = ''
	let matches = ''
	let output

	function handleKeydown(e) {
		let charCode =	e.keyCode;
		if (!((charCode < 48 && charCode != 32) || (charCode > 57 && charCode < 65) || (charCode > 90 && charCode < 97) || charCode > 122)) {
			text += e.key;
		}
		else if (charCode === 13) {
			handleCommand(text);
			matches = '';
			text = '';
		}
		else if (charCode === 8) {
			text = text.slice(0, -1);
		}
		matches = fuse.search(text)[0].item.title
	}

	async function handleCommand(cmd) {
		if (cmd === 'weather') {
			output = await loadWeather();
		}
	}

	async function loadWeather() {
		const response = await fetch('https://wttr.in/');
		return { response };
	}

</script>
<h2>tmenu</h2>
<pre class="terminal-block">{text}<span>&nbsp;
</span>
{matches}
</pre>
<style>
	h2 {
		text-align: center;
		position: absolute;
		bottom: 0;
		margin-left: 50%;
		padding: 15px 0;
		color: #dcd7ba;;
		font-size: 20px;
	}
	pre {
		text-align: center;
		color: #dcd7ba;
		font-size: 40px;
	}
	pre.terminal-block> span {
		background-color: hsla(1, 1%, 60%, 1);
		color: #aaaaa;
	}
</style>

<svelte:window on:keydown|preventDefault={handleKeydown} />
