const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    const deliveryPersonRecuperado = order.order.delivery.deliveryPerson;
    const name = order.name;
    const telefoneNumber = order.phoneNumber;
    const enderecoRua = order.address.street;
    const enderecoNumber = order.address.number;
    const enderecoApartamento = order.address.apartment;
    console.log(`Olá ${deliveryPersonRecuperado}, entrega para: ${name}, Telefone: ${telefoneNumber}, ${enderecoRua}, Nº: ${enderecoNumber}, AP: ${enderecoApartamento}.`)
  
  };
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    order.name = 'Luiz Silva';
    order.order.payment = 50;
    const pizzas = Object.keys(order.order.pizza);
    console.log(`Olá ${order.name}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${order.order.drinks.coke.type} é R$ ${order.order.payment},00`)
  };
  
  orderModifier(order);