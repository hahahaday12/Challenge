// 인터페이스랑 타입의 차이 .  인터페이스 union이 안됨. 타입은 가능. 

// 받아오는 데이터 모습의 타입을 설정해 준다. 
export type Rating = {
    rate: number;
    count: number;
}

export type Product = {
    category: string;
    description: string;
    id: number;
    image: string;
    price:number;
    rating: Rating
    title:string;
}
