export default class BookstoreService {

    data = [
        {   id:1, 
            title:'Production-Ready Microservices',
            author: 'Susan J. Fowler',
            price: 100,
            coverImage:'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'
        },
        {   id:2, 
            title:'Release It!',
            author: 'Michel T. Nygard',
            price: 95,
            coverImage:'https://images-na.ssl-images-amazon.com/images/I/41nMZPJdhsL._SX415_BO1,204,203,200_.jpg'
        },
    ]

 getBooks(){
        return new Promise((res,rej)=>{
            setTimeout(()=>{
                res(this.data)
                rej(new Error('Get books is rejected'));
            },550)
        })
        
    }
    
}