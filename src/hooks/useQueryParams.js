import { useLocation } from "react-router-dom";

export const useQueryParams = () => {
    // console.log(useLocation().search);
    return new URLSearchParams(useLocation().search);
};
export const useQueryParamsFilter = () => {
    // console.log(useLocation().search);
    return new URLSearchParams(useLocation().search);
};
