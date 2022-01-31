const $ = window.$;
const formAPIUrl = 'http://localhost:8080/send-question'

export default function formValidate() {
    $('form').submit(function(event) {
        event.preventDefault();
        const form = {
            firstName: $('#validationCustom01').val(),
            email: $('#validationCustom02').val(),
            question: $('#validationCustomQuestion').val()
        }
        console.log(form)
        $.ajax({
            url: formAPIUrl,
            method: "POST",
            data: form
        })
    })
}