
export default {
  "categories": {
    '1': {
      'id': '1',
      'name': 'desayuno',
      'list': ['1', '2', '3', '4']
    },
    '2': {
      'id': '2',
      'name': 'menu',
      'list': ['5', '6', '7', '8']
    },
    '3': {
      'id': '3',
      'name': 'extras',
      'list': ['9', '10']
    },
    '4': {
      'id': '4',
      'name': 'bebidas',
      'list': ['11', '12', '13', '14']
    },
  },
  'food': {
    '1': {
      'id': '1',
      'precio': '5',
      'image': 'https://res.cloudinary.com/dkezzbqbp/image/upload/c_scale,h_50,w_72/v1597771249/burger%20queen/cup-coffee-3478127_640_xz58uj.png',
      'name': 'Café americano',
      'category': '1'
    },
    '2': {
      'id': '2',
      'precio': '7',
      'image': 'https://res.cloudinary.com/dkezzbqbp/image/upload/c_scale,h_56,w_56/v1597771249/burger%20queen/cafe_con_leche_xupcfv.png',
      'name': 'Café con leche',
      'category': '1'
    },

    '3': {
      'id': '3',
      'precio': '10',
      'image': 'https://res.cloudinary.com/dkezzbqbp/image/upload/c_scale,w_65/v1597771249/burger%20queen/sandwich_airf6l.png',
      'name': 'Sandwich de jamón y queso',
      'category': '1'
    },
    '4': {
      'id': '4',
      'precio': '7',
      'image': 'https://res.cloudinary.com/dkezzbqbp/image/upload/c_scale,h_58,w_43/v1597771249/burger%20queen/jugo_tqyj8e.png',
      'name': 'Jugo de frutas natural',
      'category': '1'
    },
    '5': {
      'id': '5',
      'precio': '10',
      'image': 'https://res.cloudinary.com/dkezzbqbp/image/upload/c_scale,h_42,w_48/v1597771249/burger%20queen/burger_simple_ficiis.png',
      'name': 'Hamburguesa simple',
      'category': '2',
      'tipoCarne': ['carne', 'pollo', 'vegetariana']

    },
    '6': {
      'id': '6',
      'precio': '15',
      'image': 'https://res.cloudinary.com/dkezzbqbp/image/upload/c_scale,w_48/v1597771249/burger%20queen/burger_doble_opmqur.png',
      'name': 'Hamburguesa doble',
      'category': '2',
      'tipoCarne':
      {
        'carne': 'carne',
        'pollo': 'pollo',
        'vegetariana': 'vegetariana'
      }
    },
    '7': {
      'id': '7',
      'precio': '5',
      'image': 'https://res.cloudinary.com/dkezzbqbp/image/upload/c_scale,w_85/v1597708858/burger%20queen/papas_gll8jr.png',
      'name': 'Papas fritas',
      'category': '2'
    },
    '8': {
      'id': '8',
      'precio': '7',
      'image': 'https://res.cloudinary.com/dkezzbqbp/image/upload/c_scale,h_53,w_46/v1597771250/burger%20queen/cebolla_ctqvtb.png',
      'name': 'Aros de cebolla',
      'category': '2'
    },
    '9': {
      'id': '9',
      'precio': '1',
      'image': 'https://res.cloudinary.com/dkezzbqbp/image/upload/c_scale,w_60/v1597771249/burger%20queen/huevo_k4knf7.png',
      'name': 'Huevo',
      'category': '3'
    },
    '10': {
      'id': '10',
      'precio': '1',
      'image': 'https://res.cloudinary.com/dkezzbqbp/image/upload/c_scale,w_60/v1597771249/burger%20queen/queso_uekouh.png',
      'name': 'Queso',
      'category': '3'
    },
    '11': {
      'id': '11',
      'precio': '5',
      'image': 'https://res.cloudinary.com/dkezzbqbp/image/upload/c_scale,w_26/v1597777981/burger%20queen/istockphoto-1160833668-170667a-removebg-preview_tud9it.png',
      'name': 'Agua 500ml',
      'category': '4'
    },
    '12': {
      'id': '12',
      'precio': '7',
      'image': 'https://res.cloudinary.com/dkezzbqbp/image/upload/c_scale,w_26/v1597777981/burger%20queen/istockphoto-1160833668-170667a-removebg-preview_tud9it.png',
      'name': 'Agua 750ml',
      'category': '4'
    },
    '13': {
      'id': '13',
      'precio': '7',
      'image': 'https://res.cloudinary.com/dkezzbqbp/image/upload/c_scale,h_60,w_35/v1597771249/burger%20queen/gaseosa_gxljfv.png',
      'name': 'Gaseosa 500ml',
      'category': '4'
    },
    '14': {
      'id': '14',
      'precio': '10',
      'image': 'https://res.cloudinary.com/dkezzbqbp/image/upload/c_scale,h_60,w_35/v1597771249/burger%20queen/gaseosa_gxljfv.png',
      'name': 'Gaseosa 750ml',
      'category': '4'
    }
  }
}

// [
//   {
//     'id': '01',
//     'precio': '5',
//     'image': 'https://res.cloudinary.com/dkezzbqbp/image/upload/c_scale,h_50,w_72/v1597771249/burger%20queen/cup-coffee-3478127_640_xz58uj.png',
//     'type': 'desayuno',
//     'name': 'Café americano',
//     'count': '2'
//   },
//   {
//     'id': '02',
//     'precio': '7',
//     'image': 'https://res.cloudinary.com/dkezzbqbp/image/upload/c_scale,h_56,w_56/v1597771249/burger%20queen/cafe_con_leche_xupcfv.png',
//     'type': 'desayuno',
//     'name': 'Café con leche',
//   },
//   {
//     'id': '03',
//     'precio': '10',
//     'image': 'https://res.cloudinary.com/dkezzbqbp/image/upload/c_scale,w_65/v1597771249/burger%20queen/sandwich_airf6l.png',
//     'type': 'desayuno',
//     'name': 'Sandwich de jamón y queso',
//   },
//   {
//     'id': '04',
//     'precio': '7',
//     'image': 'https://res.cloudinary.com/dkezzbqbp/image/upload/c_scale,h_58,w_43/v1597771249/burger%20queen/jugo_tqyj8e.png',
//     'type': 'desayuno',
//     'name': 'Jugo de frutas natural',
//   },
//   {
//     'id': '05',
//     'precio': '10',
//     'image': 'https://res.cloudinary.com/dkezzbqbp/image/upload/c_scale,h_42,w_48/v1597771249/burger%20queen/burger_simple_ficiis.png',
//     'type': 'menu',
//     'name': 'Hamburguesa simple',
//     'tipoCarne': ['carne', 'pollo', 'vegetariana']

//   },
//   {
//     'id': '06',
//     'precio': '15',
//     'image': 'https://res.cloudinary.com/dkezzbqbp/image/upload/c_scale,w_48/v1597771249/burger%20queen/burger_doble_opmqur.png',
//     'type': 'menu',
//     'name': 'Hamburguesa doble',
//     'tipoCarne':
//     {
//       'carne': 'carne',
//       'pollo': 'pollo',
//       'vegetariana': 'vegetariana'
//     }
//   },
//   {
//     'id': '07',
//     'precio': '5',
//     'image': 'https://res.cloudinary.com/dkezzbqbp/image/upload/c_scale,w_85/v1597708858/burger%20queen/papas_gll8jr.png',
//     'type': 'menu',
//     'name': 'Papas fritas',
//   },
//   {
//     'id': '08',
//     'precio': '7',
//     'image': 'https://res.cloudinary.com/dkezzbqbp/image/upload/c_scale,h_53,w_46/v1597771250/burger%20queen/cebolla_ctqvtb.png',
//     'type': 'menu',
//     'name': 'Aros de cebolla',
//   },
//   {
//     'id': '09',
//     'precio': '1',
//     'image': 'https://res.cloudinary.com/dkezzbqbp/image/upload/c_scale,w_60/v1597771249/burger%20queen/huevo_k4knf7.png',
//     'type': 'extras',
//     'name': 'Huevo',
//   },
//   {
//     'id': '10',
//     'precio': '1',
//     'image': 'https://res.cloudinary.com/dkezzbqbp/image/upload/c_scale,w_60/v1597771249/burger%20queen/queso_uekouh.png',
//     'type': 'extras',
//     'name': 'Queso',
//   },
//   {
//     'id': '11',
//     'precio': '5',
//     'image': 'https://res.cloudinary.com/dkezzbqbp/image/upload/c_scale,w_26/v1597777981/burger%20queen/istockphoto-1160833668-170667a-removebg-preview_tud9it.png',
//     'type': 'bebidas',
//     'name': 'Agua 500ml',
//   },
//   {
//     'id': '12',
//     'precio': '7',
//     'image': 'https://res.cloudinary.com/dkezzbqbp/image/upload/c_scale,w_26/v1597777981/burger%20queen/istockphoto-1160833668-170667a-removebg-preview_tud9it.png',
//     'type': 'bebidas',
//     'name': 'Agua 750ml',
//   },
//   {
//     'id': '13',
//     'precio': '7',
//     'image': 'https://res.cloudinary.com/dkezzbqbp/image/upload/c_scale,h_60,w_35/v1597771249/burger%20queen/gaseosa_gxljfv.png',
//     'type': 'bebidas',
//     'name': 'Gaseosa 500ml',
//   },
//   {
//     'id': '14',
//     'precio': '10',
//     'image': 'https://res.cloudinary.com/dkezzbqbp/image/upload/c_scale,h_60,w_35/v1597771249/burger%20queen/gaseosa_gxljfv.png',
//     'type': 'bebidas',
//     'name': 'Gaseosa 750ml',
//   }
// ]
