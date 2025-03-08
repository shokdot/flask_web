let btn = document.getElementById('btn');
let option = document.getElementById('location');
let statusBar = document.getElementById('status');
let temp = document.getElementById('temp')
let pressure = document.getElementById('pressure')
let uv = document.getElementById('UV')
btn.addEventListener('click', async ()=>
{
    let url = `https://emvnh9buoh.execute-api.us-east-1.amazonaws.com/getData?device_id=${option.value}`;
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        let data = json.data[json.data.length - 1];
        statusBar.innerText = 'Status: Good'
        temp.innerText = `Temperature: ${data[4]}°C`
        pressure.innerText = `Pressure: ${data[5]}`
        uv.innerText = `UV Index: ${data[2]}`
        console.log(data);
    }
    catch (err)
    {
        statusBar.innerText = 'Status: Error occurred'
        temp.innerText = 'Temperature: Unknown'
        pressure.innerText = 'Pressure: Unknown'
        uv.innerText = 'UV Index: Unknown'
        console.log(err);

    }
});
