export const conversaciones ={
    
      data:[{
                 
         date: 1,
         fullname:'Naomi',
         id: '6d5zgcvhomXcQKMAYd2qY2zWhQe2',
         id_conv:1

      },

      {
                 
        date: 2,
        fullname:'Edwin',
        id: 'ESiDsykaitaH1weBOslWLJs0TLJ2',
        id_conv:2

      },

      {
                 
        date: 3,
        fullname:'Agus',
        id: '',
        id_conv:3
      },

      {
                 
        date: 4,
        fullname:'Edgar',
        id: 'FXpKkFgG0JUky8y5O8lNu5Qw73U2',
        id_conv:4

      },

      {
                 
        date: 5,
        fullname:'Jhoan',
        id: '8ctkOFlC8VREDcx6lEtcYEyrxp92',
        id_conv:5

      },

      {
                 
        date: 6,
        fullname:'Armando',
        id: '',
        id_conv:6

      }
    
    
    ]

}

const Messages ={


    data:[{

       id_conv: 1,
       mensajes:[   
        {orden: 1,
          Id:'6d5zgcvhomXcQKMAYd2qY2zWhQe2',
          mensaje:'Sisi ya funciona',
          own:false
      
        },{ orden: 2,
          Id:'WlpqFTklN1TALxHpVEa6H75U5VF2',
          mensaje:'lo que hiciste conmigo',
          own:false
       },{orden: 3,
          Id:'WlpqFTklN1TALxHpVEa6H75U5VF2',
          mensaje:'Borrandolo de firebase',
          own:false
      
       },{orden: 4,
           Id:'6d5zgcvhomXcQKMAYd2qY2zWhQe2',
           mensaje:'Ahora a mi tamopoco me funciona',
           own:false
      
       },{orden: 5,
           Id:'6d5zgcvhomXcQKMAYd2qY2zWhQe2',
           mensaje:'?',
           own:false
      
       },{ orden: 6,
           Id:'6d5zgcvhomXcQKMAYd2qY2zWhQe2',
           mensaje:'Como arreglaste lo del login?',
           own:false
          }]

    },

    {

        id_conv: 2,
        mensajes:[   
         {orden: 1,
           Id:'WlpqFTklN1TALxHpVEa6H75U5VF2',
           mensaje:'Dale',
           own:false
       
         },{ orden: 2,
           Id:'ESiDsykaitaH1weBOslWLJs0TLJ2',
           mensaje:'Hoy si me relaje un poco ya mañana vuelvo con toda',
           own:false
        },{orden: 3,
           Id:'WlpqFTklN1TALxHpVEa6H75U5VF2',
           mensaje:'Relax',
           own:false
       
        },{orden: 4,
            Id:'WlpqFTklN1TALxHpVEa6H75U5VF2',
            mensaje:'A pues si no está desde el compu tranquilo',
            own:false
       
        },{orden: 5,
            Id:'ESiDsykaitaH1weBOslWLJs0TLJ2',
            mensaje:'Será que desde el celular se puede',
            own:false
       
        },{ orden: 6,
            Id:'ESiDsykaitaH1weBOslWLJs0TLJ2',
            mensaje:'Vale',
            own:false
           },

         { orden: 7,
            Id:'WlpqFTklN1TALxHpVEa6H75U5VF2',
            mensaje:'Subí unos cbios para que los acepte, siempre me arroja el error de deploy',
            own:false
           }
         ]
 
     },


     {

      id_conv: 3,
      mensajes:[   
       {orden: 1,
         Id:'FXpKkFgG0JUky8y5O8lNu5Qw73U2',
         mensaje:'Bien bien',
         own:false
     
       },{ orden: 2,
         Id:'FXpKkFgG0JUky8y5O8lNu5Qw73U2',
         mensaje:'Lo que hiciste quedo super tambien es una victoria',
         own:false

      },{orden: 3,
         Id:'WlpqFTklN1TALxHpVEa6H75U5VF2',
         mensaje:'Sii victoria del equipo, ahora me vere los animes de hoy y a darle al chat jajaja',
         own:false
     
      },{orden: 4,
          Id:'FXpKkFgG0JUky8y5O8lNu5Qw73U2',
          mensaje:'Ya los vi hehehe',
          own:false
     
      },{orden: 5,
          Id:'FXpKkFgG0JUky8y5O8lNu5Qw73U2',
          mensaje:'Bueno solo uno',
          own:false
     
      },
       ]

   },






]}



 export const mensajesOrigin = () =>{

  let mensajes=
   [
     
     {orden: 1,
      Id:'6d5zgcvhomXcQKMAYd2qY2zWhQe2',
      mensaje:'Sisi ya funciona',
      own:false
      
    },{ orden: 2,
      Id:'WlpqFTklN1TALxHpVEa6H75U5VF2',
    mensaje:'lo que hiciste conmigo',
    own:false
 },{orden: 3,
    Id:'WlpqFTklN1TALxHpVEa6H75U5VF2',
    mensaje:'Borrandolo de firebase',
    own:false

 },{orden: 4,
     Id:'6d5zgcvhomXcQKMAYd2qY2zWhQe2',
     mensaje:'Ahora a mi tamopoco me funciona',
     own:false

 },{orden: 5,
     Id:'6d5zgcvhomXcQKMAYd2qY2zWhQe2',
     mensaje:'?',
     own:false

 },{ orden: 6,
     Id:'6d5zgcvhomXcQKMAYd2qY2zWhQe2',
     mensaje:'Como arreglaste lo del login?',
     own:false
    }
 ];

    return mensajes.reverse()
} 