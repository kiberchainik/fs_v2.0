import { useQuery, useQueryClient } from "@tanstack/react-query";
import { searchService } from "../services/search.service";
import { useMemo, useRef, useState } from "react";
import { toastMessageHandler } from "@/shared/utils";
import { useClickAway, useDebounce } from "react-use";
import { ISearch } from "../types/search.type";

interface UseSearchState {
    focused: boolean
    searchTerm: string
    isFetching: boolean
    isSuccess: boolean
    searchResult: ISearch[] | undefined
    ref: React.RefObject<HTMLDivElement>
    onFocus: () => void
    onSearchTermChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onClickSearch: () => void
}

export function useSearchHeader(): UseSearchState {
    const [focused, setFocused] = useState<boolean>(false);
    const [query, setQuery] = useState<string>('')
    const queryClient = useQueryClient()

    const ref = useRef<HTMLDivElement>(null);

    useDebounce(() => {
        setQuery(query);
    }, 1000, [query]);

    const { data: searchResult, isFetching, error, isSuccess } = useQuery({
        queryKey: ['search header', query],
        queryFn: () => searchService.searchHeader(query),
        enabled: query.length > 3,
    });

    if (error) toastMessageHandler(error);

    const onSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    };

    useClickAway(ref, () => {
        setFocused(false)
    })

    const onFocus = () => {
        setFocused(true);
    };

    const onClickSearch = () => {
        setQuery('')
        setFocused(false)
        queryClient.removeQueries({ queryKey: ['search header'] })
    };

    return useMemo(() => ({
        focused,
        searchTerm: query,
        isFetching,
        isSuccess,
        searchResult,
        ref,
        onFocus,
        onSearchTermChange,
        onClickSearch
    }), [query, focused, isFetching, isSuccess, searchResult]);
}