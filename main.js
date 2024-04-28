const apiKey='c295273850e1471a8ea56fef1ba74381';

async function getData(){
    const response= await fetch ( 'https://newsapi.org/v2/everything?q=tesla&from=2024-03-28&sortBy=publishedAt&apiKey=c295273850e1471a8ea56fef1ba74381')
const data=await response.json()
console.log(data)
  
 document.querySelector('#head .card-img').src=data.articles[80].urlToImage
 document.querySelector('#head .card-title').innerHTML=data.articles[80].author




//  cards
 const printTitle= data.articles.map(m=>m.author)
 const printDesc = data.articles.map(m=>m.description)
 const printimg= data.articles.map(m=>m.urlToImage)

      const cardTitle =document.querySelectorAll('#Scard .card-title')
      const carddesc= document.querySelectorAll('#Scard .card-text')
      const cardimg= document.querySelectorAll('#Scard .card-img-top')
      for (let i = 0; i < cardTitle.length; i++) {
        cardTitle[i].innerHTML=printTitle[i]
        carddesc[i].innerHTML=printDesc[i]
        cardimg[i].src=printimg[i]
    }
   document.querySelector('#lcard .card-title').innerHTML=data.articles[10].author
   document.querySelector('#lcard .card-text').innerHTML=data.articles[10].description
   document.querySelector('#lcard #lcard-img').src=data.articles[10].urlToImage


    } 
   






getData()



 










