const scriptURL = 'https://script.google.com/macros/s/AKfycbwJZCffu9g17Hk1vfLfuXWvvOG5HVO_Ov8JSbkQeAv2Ldgq3xEOEQOQEIR8JyGMD8-Q/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})