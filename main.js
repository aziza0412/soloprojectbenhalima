function generateID() {
    var count = 0;
    return function () {
        return count++;
    };
}
var id = generateID();
/**making a refuge */
function makeRefuge(name) {
    var instance = {};
    instance.name = name
    instance.list = [];
    instance.listKipper = [];
    instance.adddogs = adddogs;
    instance.addkipper = addkipper;
    instance.addmedicalcare = addmedicalcare;
    instance.displaydogs = displaydogs;
    instance.display = display;
    instance.sortbyweight = sortbyweight;
    instance.deletedog=deletedog
    return instance
}
/**adding dogs */
var adddogs = function (name, age, kipper, weigth, race, image) {
    var instance = {
        name,
        age,
        kipper,
        weigth,
        race,
        id: id(),
        kipper,
        date: new Date().toLocaleString(),
        medical: [],
        image: image

    }
    this.list.push(instance);
}

/**add kipper  */
var addkipper = function (kipname) {
    this.listKipper.push(kipname)
    var option = `<option>${kipname}</option>`
    $('#kipper').append(option);
}
/**addmidical care */
var addmedicalcare = function (name, traitment) {
    dogs.list.forEach(function (ele) {
        if (ele.name === name) {
            ele.medical.push(traitment)
        }
    })
}
/*/sort by weight*/
var sortbyweight = function () {
    dogs.list.sort(function (a, b) { a.weigth - b.weightdog })
}
/*delete a dog*/
var deletedog =function() { }
/*display*/

var kipper

$("#kipper").on("change", function () {
    value = $(this).val();
    kipper = value;
})
$('#addanimal').click(function () {
    var namdog = $('#inputname').val()
    var agedog = $('#inputage').val()
    var weightdog = $('#inputweight').val()
    var racedog = $('#inputrace').val()
    var image = $('#dogimg').val()
    console.log(image);
    dogs.adddogs(namdog, agedog, kipper, weightdog, racedog, image)
    dogs.display(dogs.list[dogs.list.length - 1])
    alert("dogs added")
})

$('#addmedical').click(function () {
    console.log('hi')
    $('#addmedical').toggle()
    $('#refuge').toggle()
    $('.care').toggle()
})

$('.medcare').click(function () {
    var name = $('#animal').val()
    var medical = $('#medicalcare1').val()
    console.log(name)
    console.log(medical)
    dogs.addmedicalcare(name, medical)
    alert('Medical cares added')
})
$('#sort').click(function () {
    dogs.sortbyweight()
    dogs.displaydogs()
})

/*displayanimals*/
var display = function (dog) {

    var id = dog.id;
    $("#countainer").append(`
    <div class = dog id = dog${id}>
      <h3 class = title id = name${id}>Name: ${dog.name}</h2>
      <img class = image id = image${id} src=${dog.image} } />
      <p class = cat id = weight${id}>Weight: ${dog.weigth}</p>
      <p class = race id = race${id} > breeds: ${dog.race} </p>
    </div>
    `);
    $(`#dog${id}`).css({ 'margin': '10px' })
}

/** displaying all of the items through iteration */
function displaydogs() {
    $("#countainer").empty();
    $("#divfoot").empty();
    for (var i = 0; i < dogs.list.length; i++) {
        display(dogs.list[i]);
    }
}
/**search */

$('#search').click(function () {

    $('#addmedical').toggle()
    $('#refuge').toggle()
    $('.search').toggle()
})
$('#animalsearch').click(function () {
    var ar = $('#inputnamee').val()
    dogs.list.forEach(function (ele) {
        if (ele.name === ar) {
            $("#countainer").empty();
            $("#divfoot").empty();
            dogs.display(ele)
        }
    })
})

$('#display').click(function () {

    $('#addmedical').toggle()
    $('#refuge').toggle()
    dogs.displaydogs()
    
})
/*adopt */
$('#adopt').click(function () {

    $('#addmedical').toggle()
    $('#refuge').toggle()
    $("#divfoot").empty();
    $('.adopt').toggle()
})
$('#DogAdopt').click(function () {
    var ar = $('#inputnameee').val()
    dogs.list.forEach(function (ele) {
        if (ele.name === ar) {
             dogs.display(ele)
        }
    })
   dogs.deletedog(ar)
   alert('Dogs adopted')
    })




dogs = makeRefuge('dogs')
dogs.addkipper('amine');
dogs.addkipper('sami');
dogs.adddogs("rot", 2, "sami", 12, 'Rottweiler', "https://i2.wp.com/www.vortexmag.net/wp-content/uploads/2017/12/JMbN5hW.jpg?fit=1800%2C1200&ssl=1")
dogs.adddogs("boubi", 5, "amine", 30, 'Caniche', "https://www.hogarmania.com/archivos/201705/mascotas-perros-razas-caniche-XxXx80.jpg")
dogs.adddogs("fox", 4, "sami", 25, 'Bulldog', "https://th.bing.com/th/id/R.b9519144f6c398fbfaae3ff8f086b898?rik=CAjSWEwg3CpLwg&riu=http%3a%2f%2fmydoggy.rocks%2fwp-content%2fuploads%2f2014%2f09%2fEnglish-bulldog-face.jpg&ehk=xqtXFPTIWs2u1Z7sXHy3YR2gu8%2bGKNd2PsCH2HAguvA%3d&risl=&pid=ImgRaw&r=0")
dogs.adddogs("Pit", 9, "amine", 10, 'Pitbull', "https://th.bing.com/th/id/R.a60da3cbd0cda8bc591b711a8d7d2576?rik=lOxYfGaK2HDwHQ&riu=http%3a%2f%2felelur.com%2fdata_images%2fdog-breeds%2fpit-bull%2fpit-bull-04.jpg&ehk=TGGuSF%2bsyLQkQoY%2buX8munCgSFzYmbZcTpNPjP8fv%2bY%3d&risl=&pid=ImgRaw&r=0")
dogs.adddogs("Bently", 4, "samie", 5, 'Chiwawa', "https://www.rover.com/blog/wp-content/uploads/2018/11/chihuahua-810789_1920.jpg")
dogs.adddogs("Diesel", 4, "amine", 4, 'Diesel', "https://www.rover.com/blog/wp-content/uploads/2018/11/chihuahua-810789_1920.jpg")
dogs.adddogs("milo", 6, "ali", 13, 'Paplion', "https://th.bing.com/th/id/R.526581ca8a49cd88d1050e622798565e?rik=0Jqb8YcZJlfY0g&riu=http%3a%2f%2fanimalsbreeds.com%2fwp-content%2fuploads%2f2014%2f07%2fPapillon-dog-6.jpg&ehk=9CD%2fetlYfEx1ofjIti%2fxb3FvtkhX0TZ436u8QHWreSs%3d&risl=&pid=ImgRaw&r=0")