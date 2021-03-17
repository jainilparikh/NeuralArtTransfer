/*  ==========================================
    SHOW UPLOADED IMAGE
* ========================================== */
function readURL1(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#imageResult1')
                .attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function readURL2(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#imageResult2')
                .attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

$(function () {
    $('#content').on('change', function () {
        readURL1(input);
    });
    $('#style').on('change', function () {
        readURL2(input);
    });
});



/*  ==========================================
    SHOW UPLOADED IMAGE NAME
* ========================================== */
var input1 = document.getElementById( 'content' );
var infoArea1 = document.getElementById( 'upload-label1' );

input1.addEventListener( 'change', showFileName );
function showFileName( event ) {
  var input = event.target;
  var fileName = input.files[0].name;
  infoArea1.textContent = 'File name: ' + fileName;
}
var input2 = document.getElementById( 'style' );
var infoArea2 = document.getElementById( 'upload-label2' );

input2.addEventListener( 'change', showFileName );
function showFileName( event ) {
  var input = event.target;
  var fileName = input.files[0].name;
  infoArea2.textContent = 'File name: ' + fileName;
}