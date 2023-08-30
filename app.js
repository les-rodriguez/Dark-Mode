const storeItems = [
    {
        name: 'TV',
        price: 800.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Phone',
        price: 700.00,
        inStock: false,
        details: '5G'
    },
    {
        name: 'Game Console',
        price: 300.00,
        inStock: true,
        details: 'The latest and greatest'
    },
    {
        name: 'Laptop',
        price: 1200.00,
        inStock: true,
        details: '16GB RAM 1TB SSD'
    },
    {
        name: 'Smart Watch',
        price: 200.00,
        inStock: false,
        details: 'Counts your steps'
    },
    {
        name: 'Headphones',
        price: 100.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Keyboard',
        price: 100.00,
        inStock: true,
        details: 'Types for you'
    },
    {
        name: 'HDMI Cord',
        price: 100.00,
        inStock: true,
        details: 'HDMI to USB type C'
    },
    {
        name: 'Monitor',
        price: 300.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Speaker',
        price: 200.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Video Game',
        price: 60.00,
        inStock: true,
        details: 'Enjoy for hours'
    },
];

let a = storeItems;
for(i = 0; i < 11; i++){
    if(a[i].inStock === true){
        $('#addProduct').append('<p class ="inStock">'+ '$' + a[i].price + a[i].name + a[i].details,'</p>');
      }
}



$('#clickMe').click(function() {
    let isDarkMode = $('#contentContainer').hasClass('darkMode');
  
    if (isDarkMode) {
      $('#contentContainer').removeClass('darkMode');
      $('#contentContainer').css({
        'background-color': 'gainsboro'
      }),
      $('.inStock').css({
        'background-color': 'white',
        'color': 'black'
      }),
      $('h1').css({
        'color': 'black'
    }),
    $('input[type="button"]').css ({
        'background-color': 'gainsboro',
        'color': 'black'
    });
    } else {
      $('#contentContainer').addClass('darkMode');
      $('#contentContainer').css({
        'background-color': 'black'
      }),
      $('.inStock').css({
        'background-color': 'dimgrey',
        'box-shadow': '0 1px 2px 1px lightgrey',
        'color': 'white'
      }),
      $('h1').css({
        'color': 'white'
    }),
    $('input[type="button"]').css ({
        'background-color': 'black',
        'color': 'white'
    });
    }
  });

$('#contentContainer').css({
    'background-color': 'gainsboro'
});

$('.inStock').css({
    'background-color': 'white',
    'color': 'black',
    'box-shadow': '0 1px 2px 1px lightgrey',
    'font-family': 'Helvetica',
    'font-weight': '450',
    'border-radius': '5px',
    'padding': '10px',
    'margin': '0 200px'
});
    
$('h1').css({
    'color': 'black',
    'font-family': 'Helvetica',
    'margin': '10px 200px',
});
    
$('input[type="button"]').css ({
    'background-color': 'gainsboro',
    'color': 'black',
    'margin': '0 200px',
    'display': 'inline-block',
    'padding': '10px 10px',
    'font-family': 'Helvetica',
    'border': '1.5px solid grey',
    'font-weight': '550'
});
