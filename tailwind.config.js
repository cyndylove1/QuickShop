/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{

      'black':'#000',
      'white':'#FFFF',
      'amber':'#FFF9F7',
      'green':'#0A9D4E',
      'orange':'#F79E1B',
      "purple":'#9747FF',
      'grey':'#F8F8F8',
      'gray': '#DCDDDE',
      'red':'#F90013',
      'darkRed': '#9C0215',
      'wineRed':'#CF0F22',
      'Orange': '#FF4800',
      'grey': '#F5F5F5',
      'orange-300': '#FBD3C4',
      'orange-50':'#FFF4EF',
      'orange-100':'#FFF0EA',
      'orange-200': '#EB5017',
      'skyBlue': '#E5F1FF',
      'lightOrange': '#FFE3D9',
      'blue': '#297AE7',
      'orange-300':'#F36F3D',
      'lightGreen':'#EBF8ED',
      'darkGreen':'#8DCB96',
      'lightPurple':'#F2E8FF',
      'darkPurple':'#A574E5',
      'coolGray':'#ECF0F1',
      'green-100': '#219653',
      'gray-100': '#F9F4F2',
      'dark-gray': "#9C9B9A",
      'transparentBlack': 'rgba(0,0,0,0 7)'

    },
    

    extend: {
      height:{
        '97':'32rem',
        '100':'70px',
        '22':'50px',
        '98':'50rem',
        '78':'27rem',
        '77':'23rem',
        '20':'220px',
        '30':'15rem',
        '15':'300px',
        '31':'500px',
        '14':'350px',
        '35':'20rem',
        '16':'40px',
        '21':'45px',
        '13':'250px'
      },
      width:{
        '99':'50%',
        '45':'45%',
        '60':'70%',
        // '60':'70%',
        '62':'86%',
        '61':'74%',
        '30':'35%',
        '34':'27%',
        '37':'23%',
        '17':'20%',
        '33':'38%',
        '31':'31%',
        '40':'40%',
        '100':'100%',
        '120':'120%',
        '20':'16%',
        '15':'10%',
        
      },
      margin:{
        '6':'2rem',
        '30':'15.5rem',
        '27':'10rem',
        '19':'15rem',
        '21':'16rem',
        '40':'20rem',
        '46':'27.5rem',
        '43':'22rem',
        '44':'24rem',
        '45':'26rem',
        '50':'30rem',
        '51':'31rem',
        '37':'12rem',
        '35':'33rem',
        '31': '33.7rem',
        '39':'37rem',
        '41':'42rem'
      },
      
      
      padding:{
        '1':'0.4rem',
        '5':'0.7rem',
        '7':'0.65rem',
        '25':'25rem',
        '26':'24rem',
        '26':'35rem',
        '27':'13rem'
      },
      borderWidth:{
        '1':'1px'
      }
    },
  },
  plugins: [],
}

