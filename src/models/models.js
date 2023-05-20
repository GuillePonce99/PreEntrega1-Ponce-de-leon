

const productModel={
    id: 0, //string
    category: "Mates", //string
    title: "MATE1", //string 
    description: "A", //string
    price: 1500, //number
    imgUrl: "https://tradicionesargentinas.com/wp-content/uploads/2021/10/4220-scaled.jpg", //string
}

const itemOrderModel = {amount: 0 , item: productModel}

const orderModel = {
    date: "",
    id: 0 ,
    item: [itemOrderModel] ,
}

const collectionOrderModels = [orderModel,orderModel]

const sendOrder = () =>{
    
}