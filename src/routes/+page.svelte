<script>
let hour, month, second
const months = ["january","february","march","april","may","june","july","august","september","october","november","december"];
const weekdays = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
let day = new Date();
</script>

<div class="center">
	<p>{months[day.getMonth()]}<span style="font-size: xx-large;">{day.getDay()}</span>{weekdays[day.getDay()]}</p>
</div>

<style>
	.center {
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		text-align: center;
	}
</style>
