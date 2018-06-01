module.exports={
    read: (req, res)=>{
        const dbInstance=req.app.get('db');
        dbInstance.get_inventory()
        .then(inventory=>res.status(200).send(inventory))
    },
    create: (req, res)=>{
        const dbInstance=req.app.get('db');
        const{name, price, imageurl}=req.body;
        dbInstance.create_product([name, price, imageurl])
        .then(product =>res.status(200).send('all good'))
       
    },
    delete: (req, res)=>{
        const dbInstance=req.app.get('db');
        const{params}=req;
        dbInstance.delete_product([params.id])
       .then(product=>res.status(200).send('product deleted'))
    }
}