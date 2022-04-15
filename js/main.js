//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://us.api.blizzard.com/data/wow/search/item?namespace=static-us&name.en_US=${choice}&orderby=id&_page=1&access_token=USnIyCi8aSx35UEomxmpwNmX5ebHrCN8h8`

  document.querySelector('.item').innerText = ''

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        console.log(data.results[0].data.name.en_US) //item name
        console.log(data.results[0].data.sell_price) //sell price
        console.log(data.results[0].data.level) // level
        console.log(data.results[0].data.inventory_type.name.en_US) // slot
        console.log(data.results[0].data.quality.name.en_US) //rarity


        data.results.forEach((item, i) => {

          // create elements for these items to fit into
          
          const newNameText = document.createElement('h4')
          const newLvlText = document.createElement('h4')
          const newSlotText = document.createElement('h4')
          const newSellPriceText = document.createElement('h4')
          const newTypeText = document.createElement('h4')


          document.querySelector('.itemColumn1').appendChild(newNameText)
          document.querySelector('.itemColumn2').appendChild(newLvlText)
          document.querySelector('.itemColumn3').appendChild(newSlotText)
          document.querySelector('.itemColumn4').appendChild(newSellPriceText)
          document.querySelector('.itemColumn5').appendChild(newTypeText)


          newNameText.classList.add('item')
          newLvlText.classList.add('item')
          newSlotText.classList.add('item')
          newSellPriceText.classList.add('item')
          newTypeText.classList.add('item')

          newNameText.classList.add('name')
          newLvlText.classList.add('level')
          newSlotText.classList.add('slot')
          newSellPriceText.classList.add('sellPrice')
          newTypeText.classList.add('type')

          newNameText.innerText = data.results[i].data.name.en_US
          newLvlText.innerText = data.results[i].data.level 
          newSlotText.innerText = data.results[i].data.inventory_type.name.en_US
          newSellPriceText.innerText = data.results[i].data.sell_price + 'g'
          newTypeText.innerText = data.results[i].data.quality.name.en_US

          // changing color of text based on rarity(type)
          if(data.results[i].data.quality.name.en_US.toLowerCase() === 'legendary'){
            newTypeText.style.color = 'orange'
          }else if(data.results[i].data.quality.name.en_US.toLowerCase() === 'epic'){
            newTypeText.style.color = 'rgb(139, 29, 139)'
          }else if(data.results[i].data.quality.name.en_US.toLowerCase() === 'rare'){
            newTypeText.style.color = 'rgb(21, 106, 210)'
          }else if(data.results[i].data.quality.name.en_US.toLowerCase() === 'uncommon'){
            newTypeText.style.color = 'rgb(46, 194, 23)'
          }else if(data.results[i].data.quality.name.en_US.toLowerCase() === 'common'){
            newTypeText.style.color = 'white'
          }

          
          // show above elements in the DOM

          
          



        //  const newItemContainer = document.querySelector('div')
        //  const newItemColumn = document.querySelector('div')
        //  const newItemText = document.querySelector('h4')

        //   newItemContainer.classList.add('itemContainer')
        //   newItemColumn.classList.add('itemColumn')
        //   newItemText.classList.add('item')

        //   document.querySelector('.heroContainer').appendChild(newItemContainer)
         



        // document.querySelector('.name').innerText += data.results[i].data.name.en_US //item name
        // document.querySelector('.level').innerText += data.results[i].data.level // level
        // document.querySelector('.slot').innerText += data.results[i].data.sell_price //sell price
        // document.querySelector('.sellPrice').innerText += data.results[i].data.inventory_type.name.en_US // slot
        // document.querySelector('.type').innerText += data.results[i].data.quality.name.en_US //rarity
        });




      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

