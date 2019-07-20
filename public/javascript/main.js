$("#mainNav").hover(function(){
    $(".navbar-brand").css("color", "white");
    }, function(){
    $(".navbar-brand").css("color", "#E89C23");
});

$('#message').delay(8000).fadeOut('fast');


function showSubmit(){
    subform = document.getElementById('commentSubmit');
    subform.classList.add("d-flex");
}




/*** Code from  W3Schools at https://www.w3schools.com/howto/howto_js_autocomplete.asp ***/
var foods = [ "BUTTER","CHEESE","CREAM","MILK","SOUR CREAM","YOGURT","EGG","CINNAMON","CLOVES","GINGER","MACE","NUTMEG",
"PARSLEY","PEPPER","ROSEMARY","SAGE","TURMERIC","BASIL","MUSTARD","SALT","VINEGAR","THYME","HORSERADISH","PEPPERMINT",
"OIL","MARGARINE","CHICKEN","TURKEY","GRAVY","BOLOGNA","HAM","SAUSAGE","PEPPERONI","SALAMI","SPAM","CEREAL",
"APPLES","AVOCADOS","BANANAS","BLACKBERRIES","DATES","FIGS","GRAPEFRUIT","GRAPES","GUAVAS","LEMONS","LIMES","MANGOS",
"MELONS","OLIVES","ORANGES","TANGERINES","PAPAYAS","PEACHES","PEARS","PINEAPPLE","POMEGRANATES","PRUNES","PUMMELO",
"RAISINS","RASPBERRIES","STRAWBERRIES","WATERMELON","KIWI","GUAVA","PORK","BEANS","CABBAGE","CARROTS","CASSAVA",
"CAULIFLOWER","CELERY","CHARD","COLESLAW","COLLARDS","CORN","CUCUMBER","EGGPLANT","GARLIC","KALE","MUSHROOMS",
"LETTUCE","YAM","OKRA","ONIONS","PARSNIPS","PEAS","POTATO","POTATOES","PUMPKIN","RADISHES","SEAWEED","SOYBEANS",
"SPINACH","SQUASH","SWEET POTATO","TOMATOES","VEGETABLES","PICKLES","ACORNS","ALMONDS","CASHEW NUTS",
"BEEF","TEA","COFFEE","LEMONADE","WATER","WINE","ANCHOVY","COD",
"CROAKER",
"CUSK",
"DOLPHINFISH",
"DRUM",
"EEL",
"FISH PORTIONS&STKS",
"FLATFISH (FLOUNDER&SOLE SP)",
"GEFILTEFISH",
"GROUPER",
"HADDOCK",
"HALIBUT",
"HERRING",
"LING",
"LINGCOD",
"MACKEREL",
"MILKFISH",
"MONKFISH",
"MULLET",
"OCEAN PERCH",
"POUT",
"PERCH",
"PIKE",
"POLLOCK",
"POMPANO",
"ROCKFISH",
"ROE",
"ROUGHY",
"SABLEFISH",
"SALMON",
"SARDINE",
"SCUP",
"SEA BASS",
"SEATROUT",
"SHAD",
"SHARK",
"SHEEPSHEAD",
"SMELT",
"SNAPPER",
"SPOT",
"STURGEON",
"SUCKER",
"SUNFISH",
"SWORDFISH",
"TILEFISH",
"TROUT",
"TUNA",
"TURBOT",
"WHITEFISH",
"WHITING",
"WOLFFISH",
"YELLOWTAIL",
"CRAB",
"CRAYFISH",
"LOBSTER",
"SHRIMP",
"SPINY LOBSTER",
"ABALONE",
"CLAM",
"CUTTLEFISH",
"MUSSEL",
"OCTOPUS",
"OYSTER",
"SCALLOP",
"SQUID",
"WHELK",
"CONCH",
"FISH",
"BROADBEANS (FAVA BEANS)",
"BROADBEANS (FAVA BNS)",
"CHICKPEAS (GARBANZO BNS",
"CHICKPEAS ",
"CHILI WITH BEANS",
"HYACINTH BNS",
"LUPINS",
"MOTHBEANS",
"NOODLES",
"MUNGO BNS",
"PEANUTS",
"PEANUT BUTTER",
"PEANUT FLOUR",
"PIGEON PEAS (RED GM)",
"REFRIED BNS",
"BACON",
"SOY FLOUR",
"SOY FLR",
"SOY MEAL",
"SOYMILK",
"SOY PROT CONC",
"TOFU",
"YARDLONG BNS",
"HUMMUS",
"FALAFEL",
"PEANUT SPRD",
"FRIJOLES",
"SOY PROT ISOLATE",
"CAMPBELL SOUP CO.",
"VITASOY USA",
"SOYMILK",
"CHICKPEAS",
"LAMB",
"VEAL",
"GAME MEAT",
"BISON",
"GOAT",
"GAME MEAT BISON",
"BAGEL",
"BAGELS",
"BISCUITS",
"BISCUIT",
"BREAD",
"BREAD CRUMBS",
"BREAD STICKS",
"BREAD STUFFING",
"CAKE",
"COFFEECAKE",
"Cake",
"CHEESECAKE PREP FROM MIX",
"COOKIES",
"PUFF PASTRY",
"CRACKERS",
"CREAM PUFFS",
"CROISSANTS",
"CROUTONS",
"DANISH PASTRY",
"Doughnuts",
"DOUGHNUTS",
"ECLAIRS",
"ENGLISH MUFFIN",
"ENGLISH",
"ENGLISH MUFFINS",
"FRENCH TOAST",
"HUSH PUPPIES",
"ICE CRM CONES",
"MUFFINS",
"Pancakes plain",
"PANCAKES",
"PIE",
"PIE CRUST",
"POPOVERS",
"ROLLS",
"STRUDEL",
"SWEET ROLLS",
"TACO SHELLS",
"TOASTER PASTRIES",
"TORTILLAS",
"WAFFLES",
"LEAVENING AGENTS",
"BREAKFAST TART",
"ARTIFICIAL BLUEBERRY MUFFIN MIX",
"KRAFT",
"GENERAL MILLS",
"GEORGE WESTON BAKER",
"KEEBLER",
"CONTINEN MILL",
"MCKEE BAKING",
"MARTHA WHITE FOODS",
"MISSION FOODS",
"NABISCO",
"PEPPERIDGE FARM CLASSIC STYLE CROUTONS",
"PEPPERIDGE FARM CRUSTY ITALIAN BREAD",
"PEPPERIDGE FARM APPL TURNOVERS",
"PILLSBURY",
"PILLSBURY GRANDS",
"PILLSBURY GOLDEN LAYER BTTRMLK BISCUIT",
"KRAFT FOODS",
"GEORGE WESTON BAKERIES",
"HEINZ",
"INTERSTATE BRANDS CORP",
"Crackers",
"WAFFLE",
"MUFFIN",
"BEEF JERKY",
"CORN-BASED",
"CORNNUTS",
"CRISPED RICE BAR",
"FRUIT LEATHER",
"GRANOLA BARS",
"ORIENTAL MIX",
"DOO DADS SNACK MIX",
"SNACKS",
"POPCORN",
"PORK SKINS",
"POTATO CHIPS",
"PRETZELS",
"RICE CAKES",
"TORTILLA CHIPS",
"Snacks",
"TRAIL MIX",
"CANDIES",
"BAKING CHOC",
"ICE CREAMS",
"DESSERTS",
"SHERBET",
"SYRUPS",
"PUDDINGS",
"TOPPINGS",
"COCOA",
"EGG CUSTARDS",
"GELATIN DSSRT",
"GELATINS",
"FLAN",
"RENNIN",
"FROZEN NOVELTIES",
"FROSTINGS",
"FROZEN YOGURTS",
"FRUIT BUTTERS",
"MARMALADE",
"PECTIN",
"PIE FILLINGS",
"PUDDING",
"SUGARS",
"SWEETENERS",
"FROSTING",
"SNACK",
"SESAME STKS",
"CHEESE PUFFS&TWISTS",
"JAMS&PRESERVES",
"CORN CAKES",
"FROZ NOVELTIES",
"FRZ NVL",
"FROZEN NOVL",
"AMARANTH",
"AMARANTH GRAIN",
"BARLEY",
"BUCKWHEAT GROATS",
"BUCKWHEAT FLR",
"BULGUR",
"CORN BRAN",
"CORN FLR",
"CORNMEAL",
"COUSCOUS",
"HOMINY",
"MILLET",
"OAT BRAN",
"QUINOA",
"RICE",
"RICE BRAN",
"RICE FLOUR",
"RYE FLOUR",
"SEMOLINA",
"TAPIOCA",
"TRITICALE FLR",
"WHEAT",
"WHEAT BRAN",
"WHEAT GERM",
"WHEAT FLOUR",
"WHEAT FLR",
"WILD RICE",
"PASTA",
"MACARONI",
"SPAGHETTI",
"WHEAT FLOURS",
"OAT FLR",
"RICE NOODLES",
"KAMUT",
"SPELT",
"TEFF",
"FAST FOODS",
"BREAKFAST ITEMS",
"ENTREES",
"FST FOODS",
"SANDWICHES&BURGERS",
"SIDE DISHES",
"BURGER KING",
"PIZZA",
"Burger king",
"TACO BELL",
"Egg",
"FT FDS",
"FAST FDS",
"LIGHT ICE CRM",
"LOMA LINDA BIG FRANKS",
"MORNINGSTAR FARMS VEGAN BURGER MADE W/ ORG SOY",
"NESTLE",
"Macaroni and Cheese",
"JIMMY DEAN",
"SPAGHETTI W/ MEAT SAU",
"HEALTHY CHOIC BF MACARONI",
"NALLEY CHILI CON CARNE W/BNS",
"OLD EL PASO CHILI W/BNS",
"CHEF BOYARDEE BF RAVIOLI IN TOMATO & MEAT SAU",
"CHEF BOYARDEE BEEFARONI",
"CHEF BOYARDEE MINI RAVIOLI",
"CHEF BOYARDEE SPAGHETTI & MEATBALLS IN TOMATO SAU",
"PASTA W/SLICED FRANKS IN TOMATO SAU",
"BANQUET CHICK POT PIE",
"HEALTHY CHOIC CHICK TERIYAKI W/RICE MEDLEY BROCCOLI",
"HC CHK ENCHI SUPMA IN GRN CHILI SAU",
"CINNAMON SWIRL FRENCH TOAST W/SAUSAGE",
"SCRAMBLED EGGS&SAUSAGE W/HASHED BROWN POTATOES",
"THE BUDGET GOURMET",
"BANQUET TKY & GRY W/DRESS ",
"SMART ONES",
"BREAKFAST BURRITO",
"TYSON CHICK FAJITA KIT",
"BANQUET HEARTY ONE STK DIN",
"KID CUISINE CHK NUG",
"BANQUET SLCED BF W/GRY",
"HORMEL CORNED BF HASH",
"BETTY CROCKER",
"HODGSON MILL",
"LIPTON",
"HORMEL CHILI",
"HORMEL TURKEY CHILI W/BNS",
"FREEZER QUEEN GRAVY&SLICED BF MEAL",
"BANQUET GRY & SALURY STK W/ MSHD POT & CORN IN SEASONSAU",
"HEALTHY CHOIC MESQ CHK BBQ",
"STAGG DYNAMITE CHILI W/BNS",
"STAGG RANCHHOUSE CHILI W/BNS",
"STAGG CLASSIC CHILI W/BNS",
"STAGG COUNTRY CHILI W/BNS",
"STAGG SILVERADO CHILI W/BNS",
"HORMEL CHILI W/BNS",
"HORMEL VEGETARIAN CHILI W/BNS",
"HORMEL RST BF HASH",
"TORTELLINI",
"CHILI CON CARNE W/BNS",
"BEEF STEW",
"CHICKEN POT PIE",
"PASTA W/MEATBALLS IN TOMATO SAU",
"LASAGNA",
"CHILI",
"LASAGNA W/ MEAT & SAU",
"BURRITO",
"HC TRADITION MT LF W/BRN SAU",
"HC SALBRY STK W/MSHRM GRVY",
"HC CONTRY RSTD TKY W/CRANBERRY APPL SAU",
"HC MESQ BF W/BBQ SAU",
"MARIE CALLENDER TKY W/GRY & DRSNG W/ MSHD POT",
"WEIGHT WATCHERS SMART ONES",
"MORNINGSTAR FARMS VEGGIE MEDLEY W/ ORG SOY",
"SPAGHETTIOS",
"CAMPBELL ",
"SUPPER BAKES MEAL KITS",
"CAMPBELL SUPPER BAKES MEAL KITS",
"EGG ROLLS",
"TKY",
"CAMPBELL SOUPS",
"CAMPBEL",
"AGUTUK",
"BEAR",
"WHALE",
"Whale",
"CARIBOU",
"STEW/SOUP",
"CHITON",
"CLOUDBERRIES",
"COCKLES",
"CRANBERRY",
"HUCKLEBERRIES",
"STEW",
"MOOSE",
"MASHU ROOTS",
"MOUSE NUTS",
"Seal",
"SEAL",
"OOPAH",
"OWL",
"SEA CUCUMBER",
"SOURDOCK",
"SQUIRREL",
"WALRUS",
"DEER",
"WILLOW",
"MUSH",
"MELON",
"Mutton",
"FRYBREAD",
"TORTILLA",
"Fish",
"SALMONBERRIES",
"Elk",
"ELK",
"Buffalo",
"BUFFALO",
"CHOKECHERRIES",
"STEELHEAD TROUT",
"TENNIS BREAD",
"AGAVE",
"CATTAIL",
"PLAINS PRICKLYPEAR",
"PRAIRIE TURNIPS",
"ROSE HIPS",
"PINON NUTS",
"SEA LION",
"FRUIT-FLAVORED DRK",
"FROZ NOVLT",
"CREAMY DRSNG",
"IMITATION CHS",
"TURKEY BACON",
"MILK DSSRT",
"WHIPPED TOPPING",
"MAYONNAISE",
"GRANOLA BAR",
"CRMY DRSG",
"TURKEY&PORK SAUSAGE",
"PORK SAUSAGE RICE LINKS",
"RICE CAKE",
"CHEESE PRODUCT",
"BUTTER-MARGARINE BLEND",
"SALAD DRESSING",
"JAMS & PRESERVES",
"CHEWING GUM",
"FLUID REPLCMNT",
"BEVERAGE",
"BREAKFAST BARS",
"VERMICELLI",
"FISH STICKS",
"LUNCHEON SLICES",
"MEATBALLS",
"BACON",
"TOMATO SAUCE",
"EGGS",
"DOVE",
"SOYBEAN",
"CRANBERRY",
"BREAKFAST BAR",
"MAYONNAISE",
"CELERY FLAKES",
"FROG LEGS",
"SNAIL",
"TURTLE" ];

function autocomplete(inp, arr) {
    var currentFocus;

    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;

        // Div for ac values
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);


        for (i = 0; i < arr.length; i++) {
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            b = document.createElement("DIV");
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                b.addEventListener("click", function(e) {
                inp.value = this.getElementsByTagName("input")[0].value;
                closeAllLists();
            });
            if(a.childElementCount == 5){
                break;
            }
            a.appendChild(b);
            }
        }
    });

    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            currentFocus++;
            addActive(x);
        } else if (e.keyCode == 38) {
            currentFocus--;
            addActive(x);
        } else if (e.keyCode == 13) {
            e.preventDefault();
            myFunction(e);
            if (currentFocus > -1) {
                if (x) x[currentFocus].click();
            }
        }
    });


    // Add active class to ac item
    function addActive(x) {
        if (!x) return false;
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        x[currentFocus].classList.add("autocomplete-active");
    }

    // Remove active from ac item
    function removeActive(x) {
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }


    function closeAllLists(elmnt) {
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }


    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}



/************* Adding to List ****************/



let ingredients = [];
let counter = 0;

function myFunction(e){
    if(e.keyCode === 13){
        $("#search-button").click();
    }
}

$("#search-button").on('click', function(e) {
    let newIng = $("#myInput").val();
    $("#myInput").val("");
    if(newIng === ""){return}
    $("#dd").append(`<input class="dropdown-item" type="text" name="ingredients[ing][${counter}]" value="${newIng}">`);
    counter++;
});



/*** Submit ***/

function checkSubmit(){
    if(counter == 0){
        alert('You need to add something to the basket first');
    } else {
        document.getElementById('my_form').submit();
    }
}







