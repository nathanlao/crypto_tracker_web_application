import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '3d07c54358msh017959361f2e0c8p1e002cjsndcf54712748f',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({url, headers: cryptoApiHeaders })

export const cryptoApi = createApi( {
    reducerPath: 'cryptoApi', 
    baseQuery: fetchBaseQuery ( {baseUrl} ),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('./coins')
        })
    })
});

// coming from cryptoApi
export const { 
    useGetCryptosQuery,
} = cryptoApi;


// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       timePeriod: '24h',
//       'tiers[0]': '1',
//       orderBy: 'marketCap',
//       orderDirection: 'desc',
//       limit: '50',
//       offset: '0'
//     },
//     headers: {
//       'X-RapidAPI-Key': '3d07c54358msh017959361f2e0c8p1e002cjsndcf54712748f',
//       'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//     }
//   };