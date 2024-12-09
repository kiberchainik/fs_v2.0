import { useQuery, useQueryClient } from "@tanstack/react-query";
import { searchService } from "../services/search.service";
import { useMemo, useRef, useState } from "react";
import { generatePostUrl, toastMessageHandler } from "@/shared/utils";
import { useClickAway, useDebounce } from "react-use";
import { CategoryNode, ISearch } from "../types/search.type";

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
    generatePostUrl: (category: CategoryNode, slug: string) => string
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
        onClickSearch,
        generatePostUrl
    }), [query, focused, isFetching, isSuccess, searchResult]);
}