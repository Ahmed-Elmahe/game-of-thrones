const api = "https://thronesapi.com/api/v2/Characters";

async function getData() {
    try{
        const response = await fetch(api);
        const data = await response.json();

        var tabelData = "";
        data.map(value => {
            tabelData +=
            `
                <tr>
                    <td >${value.id+1}</td>
                    <td>${value.title}</td>
                    <td>${value.fullName}</td>
                    <td>${value.family}</td>
                    <td><img src="${value.imageUrl}" alt="${value.image} width="100" height="100""></td>
                </tr>
            `
        });
        document.getElementById('CharacterTable').innerHTML = tabelData;
    }catch(e){
        console.log(e)
    }
}

getData();
