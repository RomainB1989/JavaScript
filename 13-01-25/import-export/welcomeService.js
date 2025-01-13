const title = document.querySelector('#title');

export async function getChuck(){
    const Data = await fetch('https://api.chucknorris.io/jokes/random');
   
    const DataTransformed = await Data.json();

    title.innerText = DataTransformed.value;
}

