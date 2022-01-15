function main () {
	const arrayButtons = document.querySelectorAll(".boxButton > button")
	const screenResult = document.getElementById("expression")
	let expression = ''


	arrayButtons.forEach(buttons => {
		buttons.addEventListener('click', (e) => {

			switch (e.target.value) {
				case '=':
					showResult(result(expression))
					break
				default:
					writeExpression(e.target.value)
			}


		})
	})


	function result (expression) {
		return eval(expression)
	}

	function showResult (result){
		screenResult.innerText = ''
		screenResult.innerText = result
	}


	function writeExpression (valueButton) {
		screenResult.innerText += valueButton
		expression += valueButton
	}
}

main()


// teste