// fetching data from data.json

async function fetchData(url){
    const data = await fetch(url);
    const dataJSON = await data.json();
      
    return dataJSON;

}

export default fetchData;