import { useDispatch, useSelector } from 'react-redux';
import loader from '../assets/gifs/loader.svg';
import { useEffect } from 'react';
import { updateLoadingState } from '../features/page/pageSlice';

const Loading = () => {
    const isLoadingState = useSelector(state => state.page.isLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateLoadingState(true));

        return () => {
            setTimeout(() => {
                dispatch(updateLoadingState(false));
            }, 1500);
        }
    }, []);

    return (
        <>
            {isLoadingState && (
                <div className="loading">
                    <img src={loader} />
                </div>    
            )}
        </>
    );
}

export default Loading;