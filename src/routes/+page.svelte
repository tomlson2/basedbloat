<script>
	import '../app.css';
	import Fuse from 'fuse.js';
	
	const bookmarks = [
		"https://www.youtube.com",
		"https://wttr.in",
		"reddit.com",
		"github.com",
		"twitch.tv",
		"twitter.com",
		"google.com",
		"monkeytype.com",
		"canvas.org",
		"stackoverflow.com",
		"op.gg",
		"libgen.rs",
		"neetcode.io",
		"leetcode.com",
		"levels.fyi"
	]

	const fuse = new Fuse(bookmarks)

	let text = ''
	let matches = fuse.search(".");
	const urlRegex = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)(?:\.[^:\/\n]+)$/; 


	function handleKeydown(e) {
		let charCode =	e.keyCode;
		if (!((charCode < 48 && charCode != 32) || (charCode > 57 && charCode < 65) || (charCode > 90 && charCode < 97) || charCode > 122)) {
			text += e.key;
		}
		else if (charCode === 13) {
			try {
				handleCommand(matches[0].item);
			} catch (error) {
				text = '';
			}
		}
		else if (charCode === 8) {
			text = text.slice(0, -1);
		}
		if (text !== '') {
			matches = fuse.search(text);
		}
		else {
			matches = fuse.search(".");
		}
	}

	async function handleCommand(cmd) {
		if (!/^https?:\/\//.test(cmd)) {
			cmd = 'http://' + cmd;
		}
		document.location.href = cmd;	
	}

	async function getHtml(url) {
		try {
			const response = await fetch(url);
			const html = await response.text();
			return html;
		} catch (error) {
			console.error(error);
		}
	}

</script>

<div class="page">
	<h2>tmenu</h2>
	<pre class="terminal-block">{text}<span>&nbsp;</span></pre>
	<span> {#each matches as m} <li class="match">{(m.item).match(urlRegex)[1]}</li> {/each} </span>
</div>

<style>
	.page {
		text-align: center;
		color: #dcd7ba;
		font-size: 40px;
	}
	.match:first-child {
		color: #c34043;
	}
	li {
		list-style: none;
		font-family: monospace;
	}
	h2 {
		text-align: center;
		position: absolute;
		bottom: 0;
		color: #dcd7ba;;
		font-size: 20px;
	}
	pre {
		font-size: 40px;
		display: inline;	
		margin: 0;
	}
	pre.terminal-block> span {
		background-color: hsla(1, 1%, 60%, 1);
		color: #aaa;
	}
</style>

<svelte:window on:keydown|preventDefault={handleKeydown} />
