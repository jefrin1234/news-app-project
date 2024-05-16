
let currentQuery = "weather"
let currentPage = 1

const fetchNews = async  (page, q) => {
  console.log(`fetching news for ${q} Page Number ${page}....`)
  var url = 'https://newsapi.org/v2/everything?' +
    'q=' +q+
    '&from=2024-04-27&' +
    'pageSize=20&' +
    'language=en&' +
    'page=' +page+
    '&sortBy=popularity&' +
    'apiKey=e2a3a05cec34440a890e3c3fc0d782a8';

  var req = new Request(url);

  let a = await fetch(req)
  let response = await a.json()
  console.log(response)




 
let str = ''

resultCount.innerHTML = response.totalResults

for ( let item of response.articles){
str = str + `<div  class="card my-4 mx-2" style="width: 18rem;">
<img height="180" src="${item.urlToImage}" class="card-img-top" alt="...">
<div class="card-body">
    <h5 class="card-title">${item.title}</h5>
   <p class="card-text">${item.description}</p>
    <a href="article.html?url=${item.url}" target="_blank"  class="btn btn-primary">Read More</a>
</div>
</div>
`


}
  document.querySelector(".content").innerHTML = str

}


fetchNews(1,currentQuery) //calling function

search.addEventListener("click" ,(event) => {
  event.preventDefault()
  let query = searchInput.value
  currentQuery = query 
  fetchNews(1, query)
} )




previous.addEventListener("click" ,(event) => {
  event.preventDefault()
  console.log("previous button runinng")
  if(currentPage>1){

    currentPage = currentPage - 1
   
    fetchNews(currentPage, currentQuery)
  }
} )



next.addEventListener("click" ,(event) => {
  event.preventDefault()
  console.log("next button runinng")
  
  currentPage = currentPage + 1 
  fetchNews(currentPage, currentQuery)
  
} )
