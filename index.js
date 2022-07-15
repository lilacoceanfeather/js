let myTextArea = document.querySelector("mytextarea")
let contentOutput = document.querySelector("theAnswer")

function submitValues() {
	contentOutput.textContent = "You typed " + myTextArea
}

