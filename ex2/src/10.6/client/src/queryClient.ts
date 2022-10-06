import {
   useQuery,
   useMutation,
   useQueryClient,
   QueryClient,
   QueryClientProvider,
 } from 'react-query'
 //import { getTodos, postTodo } from '../my-api'

// 아래 타입의 값을 미리 변수로 만들어 놓기 
type AnyOBJ = { [key:string]: any }

 
 // 클라이언트 쪽에서는 한번만 만들게 끔 
export const getClient = (() => {
    //QueryClient 의 타입
    let client: QueryClient | null = null
    return () => {
        if(!client) client = new QueryClient({})
   return client
    }
})()

// dummy api 주소를 변수화 시켜준다. 
const BASE_URL = 'https://fakestoreapi.com'

export const fetcher = async({
    // url 과 method 를 받아야 한다. 
    method,
    path, //url 대신 path 로 받는다. 
    body, //post 나 put 같은 경우는 body가 필요하다. 
    params // params 
}: {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    path: string;
    body?: AnyOBJ
    //{[key: string]: any } // body 는 올수 도 있고 안올수도 있는데 string 으로만 받는다. 타입을 미리 만들어 놓자
    params?: AnyOBJ
}) => {
    try {
        let url = `${BASE_URL}${path}`
        const fetchOptions: RequestInit = {
            method,
            headers: { // headers 전부가 와야 한다 .
                'Content-Type': 'application/json', // content 타입은 json
                'Access-Control-Allow-Origin': BASE_URL 
            }
        }
        if(params) {
            const searchParams = new URLSearchParams(params)
            url += '?' + searchParams.toString()
        }

    // method, path 값을 받아서 아래의 url에 넣는다. 
    // fetch 로 url, options 의 대한 결과를 res 라는 변수로 받아와 json 변수에 담아 값을 return 해준다. 
        const res = await fetch(url, fetchOptions)
        const json = await res.json()
        return json
    } catch (err) {
        console.error(err)
    }
    
}

export const QueryKeys = {
    PRODUCTS: 'PORDUCTS',
}