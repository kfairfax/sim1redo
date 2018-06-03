module.exports={
    read: (req, res)=>{
        const dbInstance=req.app.get('db');
        dbInstance.get_inventory()
        .then(inventory=>res.status(200).send(inventory))
        .catch(() => res.status(500).send('Failed'));
    },
    create: (req, res)=>{
        const dbInstance=req.app.get('db');
        const{name, price, imageurl}=req.body;
        dbInstance.create_product([name, price, imageurl])
        .then(product =>res.status(200).send('all good'))
        .catch(() => res.status(500).send('Failed'));
       
    },
    delete: (req, res)=>{
        const dbInstance=req.app.get('db');
        const{params}=req;
        dbInstance.delete_product([params.id])
       .then(product=>res.status(200).send('product deleted'))
       .catch(() => res.status(500).send('Failed')); 
    },
    update: (req, res)=>{
        const dbInstance=req.app.get('db')
        const{id}=req.params;
        const{name, price, imageurl}=req.body;
        dbInstance.update_product([id, name, price, imageurl])
        .then(()=>res.status(200).send('All good'))
        .catch(()=>res.status(500).send('Failed'));
    }
}
