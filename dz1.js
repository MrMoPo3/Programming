var budget, nazva, time, price;
var mainList = {
	budget,
	nazva,
	shopGoods[],
	employers[],
	open: false,
	discount: false,
	shopItems[],
	start: function start(){
			while (isNaN(budget) || budget == 'null' || budget == ''){budget = prompt('Ваш бюджет?', );}
			
			nazva = prompt('Название Вашего магазина?', );
			time = prompt('Который час?', );
		},
	Goods: function Goods(){
			for (let i=0;i <5; i++){
				let n = prompt('Kакой тип товаров будем продавать?', );
				if(n >= 0 || n <= 0){
				n = +n;
				}
				if(typeof(n) === 'string' && typeof(n) != null && n != '' && n.length < 50){
					console.log('ok')
					shopGoods[i] = n + ' ';
				}
				else{
					
					i--;
				}
			}
		},
	employersAdding: function employersAdding(){
			for (let i = 0; i<4; i++){
				let q = prompt('Введите ваше ФИО ', 'ФИО');
				if(q >= 0 || q <= 0){
				n = +n;
				}
				if(typeof(n) === 'string' && typeof(n) != null && n != '' && n.length < 50){
					console.log('ok')
						employers[i] =i + 1 + ' - ' + q + ' ';
				}
				else{
					i--;
				}
			}
		},
	worktime: function worktime(time){
			if (time<0){
				console.log('it is not real');
			} else if (time > 8 && time <20){
				console.log('Welcome!')
			} else if (time < 8 && time >20){
				console.log('let me to sleep')
			} else if (time > 24){
				console.log('there is only 24 hours')
			}
		},
	discount: function discount(){
			if (dicount = true){
				price = 0.8 * price; 
			}
		},
	WriteInDocument: function WriteInDocument(){
			document.write('Наш магазин включает в себя:<br>');

			for (i in mainList) {
			  document.write(i + " = " + mainList[i] + '<br>');
			}
		}
	shopItems: function shopItems(){
		item = promt("Введите товоры через запятую", "Туть")
		mainList.shopItems = item.split(", ");
		mainList.shopItems.sort();
	},
};

//document.write('У нас вы можете купить:<br>');

/*shopGoods.forEach(function(item, i, arr){
  document.write(i + 1 + ": " + item + '<br>');
});*/

