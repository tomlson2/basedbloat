<script>
	import '../app.css';
	import { enter } from '../lib/actions';
	import { onMount } from 'svelte';
        import { onDestroy } from 'svelte';
	
	const months = ["january","february","march","april","may","june","july","august","september","october","november","december"];
	const weekdays = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
	let day = new Date();
	
	let text = ''
	let output 
	function handleKeydown(e) {
		let charCode =	e.keyCode;
		if (!((charCode < 48 && charCode != 32) || (charCode > 57 && charCode < 65) || (charCode > 90 && charCode < 97) || charCode > 122)) {
			text += e.key;
		}
		else if (charCode === 13) {
			handleCommand(text);
			text = '';
		}
		else if (charCode === 8) {
			text = text.slice(0, -1);
		}
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

<pre class="terminal-block">{text}<span>&nbsp;
</span>
</pre>
<style>
	pre {
		text-align: center;
		color: #dcd7ba;
		font-size: 40px
	}
	pre.terminal-block> span {
		background-color: hsla(1, 1%, 100%, 1);
		color: #aaaaa;
	}
</style>

<svelte:window on:keydown|preventDefault={handleKeydown} />
