function GetProducts() {
    let basket = JSON.parse(localStorage.getItem('basket'));
    console.log(basket);

    let item = '';
    basket.forEach(pr => {
        let total = pr.Count * pr.Price
        item += `
            <tr>
                <th scope="row">${pr.Id}</th>
                <td>
                    <img src=${pr.Image} alt="">
                </td>
                <td>${pr.Name}</td>
                <td>
                <input type="number" value=${pr.Count}>
                </td>
                <td>${pr.Price}</td>
            </tr>
        `        
    })
    document.getElementById('body').innerHTML = item;
}

GetProducts();



input.onchange = function() {
    let basket = JSON.parse(localStorage.getItem('basket'));
    basket.push({
        Count: value
    })
}