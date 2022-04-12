

const { IgnorePlugin } = require('webpack');


function scoreHTML(strHTML, keyword)
{
 let count = 0
 // paragrpah score
 var arrayOfParagraphs = ($(strHTML).filter('p').text()).split(" ")
 for(var i = 0; i < arrayOfParagraphs.length; i++)
 {
     if(keyword.toLowerCase()  == (arrayOfParagraphs[i].substring(0,keyword.length)).toLowerCase())
     {
       count += 1
     }
 }


// title score
var arrayOfTitle= ($('title').text()).split(" ")
for(var i = 0; i < arrayOfTitle.length; i++)
{
   if(keyword.toLowerCase()  == arrayOfTitle[i].substring(0,keyword.length).toLowerCase() )
   {
     count += 10
   }
}
console.log(count)

}



// link score
var arrayOfLinks = ($(strHTML).filter('a').text()).split(" ")
for(var i = 0; i < arrayOfLinks.length; i++)
{
   if(keyword.toLowerCase()  == (arrayOfLinks[i].substring(0,keyword.length)).toLowerCase() )
   {
     count += 2
   }
}


// bold score (b)
var arrayOfBoldB = ($(strHTML).filter('b').text()).split(" ")
for(var i = 0; i < arrayOfBoldB.length; i++)
{
   if(keyword.toLowerCase()  == (arrayOfBoldB[i].substring(0,keyword.length)).toLowerCase() )
   {
     count += 2
   }
}

// bold score (strong)
var arrayOfBoldStrong = ($(strHTML).filter('strong').text()).split(" ")
for(var i = 0; i < arrayOfBoldStrong.length; i++)
{
   if(keyword.toLowerCase()  == (arrayOfBoldStrong[i].substring(0,keyword.length)).toLowerCase() )
   {
     count += 2
   }
}



// italic score (2)
var arrayOfItalicEm = ($(strHTML).filter('em').text()).split(" ")
for(var i = 0; i < arrayOfItalicEm.length; i++)
{
   if(keyword.toLowerCase()  == (arrayOfItalicEm[i].substring(0,keyword.length)).toLowerCase() )
   {
     count += 2
   }
}


// h3 score
var arrayOfH3= ($(strHTML).filter('h3').text()).split(" ")
for(var i = 0; i < arrayOfH3.length; i++)
{
   if(keyword.toLowerCase()  == (arrayOfH3[i].substring(0,keyword.length)).toLowerCase() )
   {
     count += 3
   }
}


// h4 score
var arrayOfH4= ($(strHTML).filter('h4').text()).split(" ")
for(var i = 0; i < arrayOfH4.length; i++)
{
   if(keyword.toLowerCase()  == (arrayOfH4[i].substring(0,keyword.length)).toLowerCase() )
   {
     count += 3
   }
}


// h5 score
var arrayOfH5= ($(strHTML).filter('h5').text()).split(" ")
for(var i = 0; i < arrayOfH5.length; i++)
{
   if(keyword.toLowerCase()  == (arrayOfH5[i].substring(0,keyword.length)).toLowerCase() )
   {
     count += 3
   }
}


// h2 score
var arrayOfH2= ($(strHTML).filter('h2').text()).split(" ")
for(var i = 0; i < arrayOfH2.length; i++)
{
   if(keyword.toLowerCase()  == (arrayOfH2[i].substring(0,keyword.length)).toLowerCase() )
   {
     count += 4
   }
}


// h1 score
var arrayOfH1= ($(strHTML).filter('h1').text()).split(" ")

for(var i = 0; i < arrayOfH1.length; i++)
{
   if(keyword.toLowerCase()  == (arrayOfH1[i].substring(0,keyword.length)).toLowerCase() )
   {
     count += 5
   }
}


// italic score (1)
var arrayOfItalicI = ($(strHTML).filter('i').text()).split(" ")
for(var i = 0; i < arrayOfItalicI.length; i++)
{
   if(keyword.toLowerCase()  == (arrayOfItalicI[i].substring(0,keyword.length)).toLowerCase() )
   {
     count += 2
   }
}




// title score
var arrayOfTitle= ($(strHTML).filter('title').text()).split(" ")
for(var i = 0; i < arrayOfTitle.length; i++)
{
   if(keyword.toLowerCase()  == (arrayOfTitle[i].substring(0,keyword.length)).toLowerCase() )
   {
     count += 10
   }
}
console.log(count)
}
async function scoreRemote(urlName, keyword){
 let res = await axios.get(urlName)
 let count = 0
   const $ = cheerio.load(res.data)


// paragrpah score
   var arrayOfParagraphs = ($('p').text()).split(" ")
   for(var i = 0; i < arrayOfParagraphs.length; i++)
   {
       if(keyword.toLowerCase()  == arrayOfParagraphs[i].substring(0,keyword.length).toLowerCase())
       {
         count += 1
       }
  }


// link score
var arrayOfLinks = ($('a').text()).split(" ")
for(var i = 0; i < arrayOfLinks.length; i++)
{
   if(keyword.toLowerCase()  == arrayOfLinks[i].substring(0,keyword.length).toLowerCase() )
   {
     count += 2
   }
}


// bold score (b)
var arrayOfBoldB = ($('b').text()).split(" ")
for(var i = 0; i < arrayOfBoldB.length; i++)
{
   if(keyword.toLowerCase()  == arrayOfBoldB[i].substring(0,keyword.length).toLowerCase() )
   {
     count += 2
   }
}


// bold score (strong)
var arrayOfBoldStrong = ($('strong').text()).split(" ")
for(var i = 0; i < arrayOfBoldStrong.length; i++)
{
   if(keyword.toLowerCase()  == arrayOfBoldStrong[i].substring(0,keyword.length).toLowerCase() )
   {
     count += 2
   }
}


// italic score (i)
var arrayOfItalicI = ($('i').text()).split(" ")
for(var i = 0; i < arrayOfItalicI.length; i++)
{
   if(keyword.toLowerCase()  == arrayOfItalicI[i].substring(0,keyword.length).toLowerCase() )
   {
     count += 2
   }
}


// italic score (em)
var arrayOfItalicEm = ($('em').text()).split(" ")
for(var i = 0; i < arrayOfItalicEm.length; i++)
{
   if(keyword.toLowerCase()  == arrayOfItalicEm[i].substring(0,keyword.length).toLowerCase() )
   {
     count += 2
   }
}


// h3 score
var arrayOfH3= ($('h3').text()).split(" ")
for(var i = 0; i < arrayOfH3.length; i++)
{
   if(keyword.toLowerCase()  == arrayOfH3[i].substring(0,keyword.length).toLowerCase() )
   {
     count += 3
   }
}



// h4 score

var arrayOfH4= ($('h4').text()).split(" ")
for(var i = 0; i < arrayOfH4.length; i++)
{
   if(keyword.toLowerCase()  == arrayOfH4[i].substring(0,keyword.length).toLowerCase() )
   {
     count += 3
   }
}


// h5 score
var arrayOfH5= ($('h3').text()).split(" ")
for(var i = 0; i < arrayOfH5.length; i++)
{
   if(keyword.toLowerCase()  == arrayOfH5[i].substring(0,keyword.length).toLowerCase() )
   {
     count += 3
   }
}



// h2 score
var arrayOfH2= ($('h2').text()).split(" ")


for(var i = 0; i < arrayOfH2.length; i++)

   if(keyword.toLowerCase()  == arrayOfH2[i].substring(0,keyword.length).toLowerCase() )
   {
     count += 4
   }

}


// h1 score
var arrayOfH1= ($('h1').text()).split(" ")


for(var i = 0; i < arrayOfH1.length; i++)
{
   if(keyword.toLowerCase()  == arrayOfH1[i].substring(0,keyword.length).toLowerCase() )
   {
     count += 5
   }
}











