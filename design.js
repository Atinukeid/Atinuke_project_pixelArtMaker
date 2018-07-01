

let height, width;


$('#sizePicker').submit(function(event) {
	event.preventDefault();
	height = $('#inputHeight').val();
	width = $('#inputWidth').val();
	makeGrid(height,width);
});

function makeGrid(x, y) {
	$('tr').remove();
	for (let r = 1; r <= x; r++) {
		$('#pixelCanvas').append('<tr id=table' + r + '></tr>');
		for (let c = 1; c <= y; c++) {
			$('#table' + r).append('<td></td>');
		}
	}
    alert('Feel free to color the canvas!');
$('#pixelCanvas').click(function(event) {
	let color = $('#colorPicker').val();
	$(event.target).css('background-color',color);
	 
});
 
}
