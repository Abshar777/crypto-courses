"use client"
import { getBtcPrice, marketCap } from "@/api/btcPrice";
import { useQueryData } from "./useQueryData";
import { useState } from "react";
import { useEffect } from "react";

export const useBtc = () => {
    const [btcPrice, setBtcPrice] = useState<number>(0);
    const { data, isPending, isFetched, refetch, isFetching, isError, ...rest } = useQueryData(["btc"], getBtcPrice);

    useEffect(() => {
        if (data) {
            setBtcPrice(data as number);
        }
    }, [data]);

    return { btcPrice, isPending, isFetched, refetch, isFetching, isError, ...rest };
};



export const useMarketCap = () => {
    const [marketcap, setMarketCap] = useState<number>(0);
    const { data, isPending, isFetched, refetch, isFetching, isError, ...rest } = useQueryData(["marketCap"], marketCap);

    useEffect(() => {
        if (data) {
            console.log(data)
            setMarketCap(data as number);
        }
    }, [data]);

    return { marketcap, isPending, isFetched, refetch, isFetching, isError, ...rest };
};


