export function enter(node) {
	function handleKey(e) {
		if (e.key === 'Enter') {
			node.dispatchEvent(new CustomEvent('enterkey'))
		}
		node.dispatchEvent(new CustomEvent('update'))
	}

	document.addEventListener('keydown', handleKey, true)

	return {
		destroy() {
			document.removeEventListener('keydown', handleKey, true)
		}
	}
}
