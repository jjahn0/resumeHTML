jQuery.get('static/data/file.csv', function(data) {
    alert(data); // this is a line
    var tempArray = data.split(','); // array of data
    for(var i = 0; i < tempArray.length; i++)
    {
        console.log(tempArray[i]); // probably index 1 is your IPv6 address.
    }
 });