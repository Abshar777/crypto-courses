"use client";
import {
  Enabled,
  QueryFunction,
  QueryKey,
  useQuery,
  UseQueryOptions,
} from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useEffect } from "react";
import { toast } from "sonner";

export const useQueryData = (
  queryKey: QueryKey,
  queryFn: QueryFunction,
  options?: Partial<UseQueryOptions>
) => {
  const { data, isPending, isFetched, refetch, isFetching, isError, error, ...rest } = useQuery({
    queryKey,
    queryFn,
    ...options
  });

  useEffect(() => {
    if (isError) {
      console.error(error)
      const err = (error as AxiosError)
      const message = (err.response?.data as { message: string })?.message as string || "Error fetching data"
      toast.error(message)
    }
  }, [isError])

  return { data, isPending, isFetched, refetch, isFetching, isError, ...rest };
};


