import { useSearchParams } from "react-router-dom";

export const useQueryParams = () => {
    const [params] = useSearchParams();

    return params;
};
