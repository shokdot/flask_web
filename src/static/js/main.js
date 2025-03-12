let btn = document.getElementById('btn');
let option = document.getElementById('location');
let statusBar = document.getElementById('status');
let temp = document.getElementById('temp')
let pressure = document.getElementById('pressure')
let uv = document.getElementById('UV')
let start_date = document.getElementById('start_date');
let end_date = document.getElementById('end_date');
btn.addEventListener('click', async ()=>
{
    if (!start_date.value || !end_date.value)
    {
        statusBar.innerHTML = '<p style="color:red">Status: Error ocured</p>'
        return;
    }
    else if (end_date.value < start_date.value)
    {
        statusBar.innerHTML = '<p style="color:red">Status: Start date must be before end date.</p>'
        return;
    }
    let url = `https://emvnh9buoh.execute-api.us-east-1.amazonaws.com/getData?device_id=${option.value}&start_time=${start_date.value}&end_time=${end_date.value}`;
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        console.log(json);
        let data = json.data[json.data.length - 1];
        statusBar.innerText = 'Status: Good'
        temp.innerText = `Temperature: ${data[4]}°C`
        pressure.innerText = `Pressure: ${data[5]}`
        uv.innerText = `UV Index: ${data[2]}`
    }
    catch (err)
    {
        statusBar.innerHTML = '<p style="color:red">Status: Error ocured</p>'
        temp.innerText = 'Temperature: Unknown'
        pressure.innerText = 'Pressure: Unknown'
        uv.innerText = 'UV Index: Unknown'
        console.log(err);

    }
});
