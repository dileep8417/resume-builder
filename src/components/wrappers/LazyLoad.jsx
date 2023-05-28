import { Suspense } from "react";
import { useDispatch } from "react-redux";
import { updateLoadingState } from "../../features/page/pageSlice";
import Loading from "../Loading";

const LazyLoad = ({ children }) => {
    return (
        <Suspense fallback={<Loading />}>
           {children}
        </Suspense>
    );
}

export default LazyLoad;