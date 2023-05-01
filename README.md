```html:
<!DOCTYPE HTML>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>How to convert html to pdf javascript</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.4/jspdf.debug.js" ></script>
  <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
    />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</head>
<body style="width: 43%; margin: auto;">
  
  <!-- This is the main page of the PDF -->
  <div id="Resume">
    <h2>Karthikeyan A</h2>
    <div id="selectedBanner"> <!-- Displaying the image in this place.--> </div>
    <input type="file" class="form-control" id="img" placeholder="Enter password" name="image" />
    <p>This is the testing page for converting HTML to PDF</p>
  </div>
  <a href="javascript:generatePDF()">Download PDF</a>


  <!-- to display the image JS  -->
  <script>
    var selDiv = "";
    var storedFiles = [];
    $(document).ready(function () {
      $("#img").on("change", handleFileSelect);
      selDiv = $("#selectedBanner");
    });

    function handleFileSelect(e) {
      var files = e.target.files;
      var filesArr = Array.prototype.slice.call(files);
      filesArr.forEach(function (f) {
        if (!f.type.match("image.*")) {
          return;
        }
        storedFiles.push(f);

        var reader = new FileReader();
        reader.onload = function (e) {
          var html =
            '<img src="' +
            e.target.result +
            "\" data-file='" +
            f.name +
            "' class='avatar rounded lg' alt='Category Image' height='50px' width='50px'>";
          selDiv.html(html);
        };
        reader.readAsDataURL(f);
      });
    }
  </script>



  <!-- Convert the HTML page to PDF -->
  <script>
    function generatePDF() {
     var doc = new jsPDF();
      doc.fromHTML(document.getElementById("Resume"),15,15,{
        'width': 170
      },
      function(a) {
        doc.save("Resume.pdf");
      });
    }
  </script>

</body>
</html> 

```