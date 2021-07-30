import {useState, useEffect} from 'react';
function Main(){
    // const [data, setData]=useState(23);
    // const[name, setname]=useState("Meenakshi");
    const [articles, setarticles] = useState([]);
    const [search, setSearch] = useState("microsoft");

    // function changeValue(){
    //     setData(56);
    // }

    //useEffect(()=>{
        //console.log("use effect called");
        //console.log("i am after render");
    //},[data])       //we can also pass an array// now if data changes then only it will be called(not working for rendering)
    //})             //if you pass nothing then it will call(work) for rendering
    //},[])           //if you pass empty array then use effect will only call when the component is mounted //mounting means loading

    useEffect(()=>{
        let url="https://newsapi.org/v2/everything?q=microsoft&apiKey=8d355d1a27ca46e59adda2deb7a2b719"; //api

        fetch(url)  //here i get my response
        .then((response)=>response.json())  //convert it into json
        .then((news)=>{
            setarticles(news.articles);  //print it in console
        })
    },[])

    function readValue(value){
        setSearch(value)
    }

    function searchNews(){
        let url=`https://newsapi.org/v2/everything?q=${search}&apiKey=8d355d1a27ca46e59adda2deb7a2b719`; //api

        fetch(url)  //here i get my response
        .then((response)=>response.json())  //convert it into json
        .then((news)=>{
            setarticles(news.articles);  //print it in console
        })
    }

    useEffect(()=>{
        let url=`https://newsapi.org/v2/everything?q=${search}&apiKey=8d355d1a27ca46e59adda2deb7a2b719`; //api

        fetch(url)  //here i get my response
        .then((response)=>response.json())  //convert it into json
        .then((news)=>{
            setarticles(news.articles);  //print it in console
        })
    },[search])  //this useEffect will be called on the change of search state

    return(
        <div className="container">
            {/* <h1>{data}</h1>
            <h1>{name}</h1>
            <button onClick={changeValue}> click</button>
            <button onClick={()=>{setname("Meenakshi gosain")}}>change name</button> */}
            <div className="padd">
                <div className="filter">
                    <input type="search" onChange={(event)=>{readValue(event.target.value)}} placeholder="Enter a topic to search"/>
                    <button className="btn" onClick={searchNews}>Search For News</button>
                </div>

                <h1>All News</h1>
                {

                    articles.length===0?(<h2>No data found</h2>):
                    articles.map((articles, index)=>(
                        <div key={index} className="article">
                            <div className="padd-article">
                                <div className="news-img">
                                    <img src={articles.urlToImage}/>
                                </div>
                                <div className="news-detail">
                                    <h2>{articles.title}</h2>
                                    <p>{articles.author}</p>
                                    <p>{articles.description}</p>
                                        <p>
                                            <a href={articles.url} target="blank">
                                                <button className="btn">Read full article</button>
                                            </a>
                                        </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Main;