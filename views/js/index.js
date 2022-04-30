$(function() {
    $.ajax({
        method: 'GET',
        url: 'http://127.0.0.1:3001/getAllCourse',
        success: function(res) {
            console.log(res.result)
            var htmlstr = template('tpl', res.result)
            $('.mini .course').html(htmlstr)
        }
    })
})