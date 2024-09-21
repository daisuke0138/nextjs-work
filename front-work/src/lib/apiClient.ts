import axios from "axios";

// const apiClient = axios.create({
//     baseURL: 'https://cixdpeeyihebpjoopncy.supabase.co/auth/v1',
//     // baseURL: "http://localhost:3001/backend-api",
//     // // baseURL: process.env.NEXT_PUBLIC_API_BASEURL,
//     // baseURL: '/backend-api',
//     // baseURL: process.env.NEXT_PUBLIC_API_BASEURL || `https:${process.env.NEXT_PUBLIC_VERCEL_URL}/api`,
//     // baseURL: process.env.NODE_ENV === 'development'
//     //     ? 'http://localhost:3001/api'
//     //     : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`,
//     headers: {
//         "Content-Type": "application/json",
//         'Authorization': `Bearer SUPABASE_API_KEY`,
//     },
// // });
// export default apiClient;
const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL + '/auth/v1',
    headers: {
        'apikey': process.env.SUPABASE_API_KEY, // SupabaseのAPIキー
        'Content-Type': 'application/json',
    },
});

apiClient.post('/token', {
    email: 'tanaka@co.jp',
    password: '12345678',
})
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error:', error.response.data); // 詳細なエラー情報を取得
    });
export default apiClient;
