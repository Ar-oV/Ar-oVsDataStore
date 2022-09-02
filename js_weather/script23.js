const link = "http://api.weatherapi.com/v1=ed0c6a436bf44027a59103947220209"

const fetchData = async () => {
    const result = await fetch(`${link}$query=London`);
    const data = await result.json();

    console.log(data);
}
fetchData();
