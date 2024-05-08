
const productData =[
    {
        id:1,
        image:'https://img.freepik.com/free-photo/collection-beauty-products-with-copy-space_23-2148620110.jpg?size=626&ext=jpg&ga=GA1.1.1707697249.1713828132&semt=ais',
        img2:'https://img.freepik.com/premium-photo/professional-makeup-tools-top-view-flat-lay-beauty-decorative-cosmetics-makeup-brushes-set-color-eyeshadow-palette-table-background-minimalistic-style_79075-33379.jpg?size=626&ext=jpg&ga=GA1.1.1707697249.1713828132&semt=ais',
        img3:'https://img.freepik.com/premium-photo/high-angle-view-multi-colored-pencils-table_1048944-18724314.jpg?size=626&ext=jpg&ga=GA1.1.1707697249.1713828132&semt=ais',
        name:'Beauty',
        Price: 15000,
        
        
    },
    {
        id:2,
        image:'https://img.freepik.com/free-photo/fashionable-woman-hat-dress-white-jacket-posing-fashion-awinter-look_273443-3846.jpg?size=626&ext=jpg&ga=GA1.2.1707697249.1713828132&semt=ais',
        img2:'https://img.freepik.com/free-photo/black-woman-trendy-grey-leather-jacket-posing-beige-background-studio-winter-autumn-fashion-look_273443-141.jpg',
        img3:'https://img.freepik.com/free-photo/excited-white-girl-bright-stylish-glasses-posing-pink-dreamy-curly-woman-playing-with-her-ginger-hair-laughing_197531-11045.jpg',
        name:'Women Fashion',
        Price: 5000,
        
    },
    {
        id:3,
        image:'https://img.freepik.com/premium-photo/man-holding-green-bat_265223-22487.jpg',
        img2:'https://i.pinimg.com/564x/71/e1/ee/71e1ee228d6825fa0c06e5b4b021802b.jpg',
        img3:'https://st.depositphotos.com/1550494/2604/i/450/depositphotos_26043279-stock-photo-retro-fifties-summer-fashion-man.jpg',
        name:'Men Fashion',
        Price: 10000,
        
    },
    {
        id:4,
        image:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGVsZWN0cm9uaWN8ZW58MHx8MHx8fDA%3D',
        img2:'https://img.freepik.com/premium-photo/gamer-workspace_127657-18683.jpg?w=900',
        img3:'',
        name:'Electronics',
        Price: 3000,
        
    },
    {
        id:5,
        image:'https://cdn.pixabay.com/photo/2011/03/25/08/27/liquor-5884_1280.jpg',
        img2:'https://img.freepik.com/free-photo/front-view-wine-bottle-walnut-pieces-dark-chocolate-wood-board-red-background_140725-144997.jpg?t=st=1714931314~exp=1714934914~hmac=0c07aa493afbb0e0e79b2454af6d0b0ec4682cb2af0beef006c52cd4881dafbe&w=900',
        img3:'https://img.freepik.com/free-photo/full-bottle-wine-with-copy-space_23-2148232249.jpg?t=st=1714931344~exp=1714934944~hmac=c0b2287bd3bce1764bcbcc852f608bd304a24515bab5ec9b4509a720d5a91531&w=900',
        name:'Drinks',
        Price: 25000,
        
    },
    {
        id:6,
        image:'https://www.watteva.com/wp-content/uploads/2020/12/k189.jpg',
        img2:'https://img.freepik.com/free-photo/white-sweater-front-back_125540-755.jpg?t=st=1714931514~exp=1714935114~hmac=f5c6a274dda38afc22747fc96857f9a878f2e4644a7c5d42fa43bb5cdb692389&w=900',
        img3:'https://img.freepik.com/premium-photo/t-shirt-short-sleeve-mens-mockup_777271-6399.jpg?w=900',
        name:'Shirts',
        Price: 7000,
        
    },
    {
        id:7,
        image:'https://img.freepik.com/free-photo/pair-brown-shoes-with-black-leather-sole-word-bottom_123827-23446.jpg?t=st=1714932147~exp=1714935747~hmac=2aabf53d434b696a2da2519d2d1833b5c5d4cb5686c7489c933ef0a25160e1eb&w=900',
        img2:'https://img.freepik.com/premium-photo/pair-blue-running-sneakers-white-background-isolated_77190-7490.jpg?w=900',
        img3:'https://img.freepik.com/premium-photo/stability-cushion-running-shoes-new-unbranded-running-sneaker-trainer-orange-background-men-s-sport-footwear_179369-1093.jpg?w=900',
        name:'Shoes',
        Price: 35000,
        
    },
    {
        id:8,
        image:'https://img.freepik.com/premium-photo/beautiful-elegant-evening-women-s-dress-white-background_236836-23915.jpg?w=740',
        img2:'https://img.freepik.com/premium-photo/beautiful-elegant-evening-dress-white-background_236836-19590.jpg?w=740',
        img3:'https://img.freepik.com/premium-photo/beautiful-elegant-evening-dress-white-background_236836-19579.jpg?w=740',
        name:'Dress',
        Price: 45000,
        
    },
    {
        id:9,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7U3a9K3Wzp744MB8vsPV6qAZrjXBu2I3wsg&usqp=CAU',
        img2:'https://img.freepik.com/free-photo/view-women-s-purse-tiles-with-mediterranean-aesthetics_23-2150916671.jpg?t=st=1714932566~exp=1714936166~hmac=5dc307ec54b5834e7c6c57eca7c1933f99c1d257bd7e0fdbaa7cfb9f4235137f&w=360',
        img3:'https://img.freepik.com/free-photo/handbag-leather-new-luxury-female_1203-6520.jpg?t=st=1714932688~exp=1714936288~hmac=8fda9bfa52c1a3b593196e1918f10958e1a9f4839471b226e7ddc0ace5f505ce&w=360',
        name:'Bag',
        Price: 15000,
        
    },
    {
        id:10,
        image:'https://i.pinimg.com/564x/74/53/7b/74537b0a57c98b258b08dd1306302333.jpg',
        img2:'',
        img3:'',
        name:'Skirt',
        Price: 15000,
        
    },

    
]
export default productData;
