var products = [
    {
      img: "images/rayban-classic.jpeg",
      name: "Ray-Ban Classic",
      price: "$129",
      description: "Classic Frat Shades!"
    },
    {
      img: "images/rayban-aviator.jpeg",
      name: "Ray-Ban Aviator",
      price: "$149",
      description: "'You Can Be My Wingman Anytime'"
    },
    {
      img: "images/rayban-erika.jpeg",
      name: "Ray-Ban Erika",
      price: "$114",
      description: "Classic and Fresh"
    },
    {
      img: "images/oakley-classic.jpeg",
      name: "Oakley Classic",
      price: "$299",
      description: "Oakley is no Jokely"
    },
    {
      img: "images/prada-classic.jpeg",
      name: "Prada Classic",
      price: "$348",
      description: "Chic and Stylish"
    },
    {
      img: "images/maui-jim-classic.jpeg",
      name: "Maui Jim Classic",
      price: "$249",
      description: "Standard Neat-Guy Shades"
    },
    {
      img: "images/gucci-classic.jpeg",
      name: "Gucci Classic",
      price: "$829",
      description: "Treat Yourself"
    },
    {
      img: "images/burberry-classic.jpeg",
      name: "Burberry Classic",
      price: "$470",
      description: "Modern and Functional"
    }
    
  ]

for (var i=0; i<products.length; i++) {
    console.log(products[i]);
    if (i === 0) {
        document.getElementById("Ray-Ban Classic").innerHTML+= '<img src="' + products[i].img + '">' + "<h3>" + products[i].name + "</h3>" + "<br>" + "<h4>" + products[i].description + "</h4>" + "<br>" + "<p>"+ products[i].price + "</p>" + "<br>"
    } else if (i === 1) {
        document.getElementById("Ray-Ban Aviator").innerHTML+= '<img src="' + products[i].img + '">' + "<h3>" + products[i].name + "</h3>" + "<br>" + "<h4>" + products[i].description + "</h4>"  + "<br>" +"<p>" + products[i].price + "</p>" + "<br>" 
    } else if (i === 2) {
        document.getElementById("Ray-Ban Erika").innerHTML+= '<img src="' + products[i].img + '">' + "<h3>" + products[i].name + "</h3>" + "<br>" + "<h4>" + products[i].description + "</h4>"  + "<br>"  +"<p>"+ products[i].price +  "</p>" +"<br>" 
    } else if (i === 3) {
        document.getElementById("Oakley Classic").innerHTML+= '<img src="' + products[i].img + '">' + "<h3>" + products[i].name + "</h3>" + "<br>" + "<h4>" + products[i].description + "</h4>"  + "<br>" +"<p>" + products[i].price + "</p>" + "<br>" 
    } else if (i === 4) {
        document.getElementById("Prada Classic").innerHTML+= '<img src="' + products[i].img + '">' + "<h3>" + products[i].name + "</h3>" + "<br>" + "<h4>" + products[i].description + "</h4>" + "<br>" +"<p>" + products[i].price + "</p>" + "<br>"
    } else if (i === 5) {
        document.getElementById("Maui Jim Classic").innerHTML+= '<img src="' + products[i].img + '">' + "<h3>" + products[i].name + "</h3>" + "<br>" + "<h4>" + products[i].description + "</h4>"  + "<br>" +"<p>" + products[i].price + "</p>" + "<br>"  
    } else if (i === 6) {
        document.getElementById("Gucci Classic").innerHTML+= '<img src="' + products[i].img + '">' + "<h3>" + products[i].name + "</h3>" + "<br>" + "<h4>" + products[i].description + "</h4>" + "<br>" +"<p>" + products[i].price + "</p>" + "<br>"  
    } else if (i === 7) {
        document.getElementById("Burberry Classic").innerHTML+= '<img src="' + products[i].img + '">' + "<h3>" + products[i].name + "</h3>" + "<br>" + "<h4>" + products[i].description + "</h4>"  + "<br>" +"<p>" + products[i].price + "</p>" + "<br>" 
    }
}
console.log(products);



