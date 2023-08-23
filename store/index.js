/*============================================
                    Store
==============================================*/

//Actions
const error = (data) => ({ type: 'ERROR', error: data });
const clearError = () => ({ type: 'CLEAR_ERROR' });
const showLoading = () => ({ type: 'SHOW_LOADING' });
const hideLoading = () => ({ type: 'HIDE_LOADING' });
const resetLoading = () => ({ type: 'HIDE_LOADING' });
const processing = () => ({ type: 'PROCESSING' });
const processed = () => ({ type: 'PROCESSED' });
const resetPassage = () => ({ type: 'RESET_PASSAGE' });
const toast = ({ toastMsg }) => ({ type: 'TOAST', toastMsg });

//Initial state for the reducer.
const initialState = {
    error: null,
    loading: false,
    loadingCode: null,
    loadingMsg: null,
    loadingScope: 0.6,
    loadingType: 'default',
    processing: false,
    toast: false,
    toastMsg: null,
};

//Reducer
const passageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ERROR':
            return {
                ...initialState,
                error: action.error?.toString(),
            };
        case 'CLEAR_ERROR':
            return {
                ...state,
                error: initialState.error,
            };
        case 'SHOW_LOADING':
            return {
                ...state,
                loading: true,
                loadingCode: action.loadingCode ? action.loadingCode : initialState.loadingCode,
                loadingMsg: action.loadingMsg ? action.loadingMsg : initialState.loadingMsg,
                loadingScope: action.loadingScope ? action.loadingScope : initialState,
                loadingType: action.loadingType ? action.loadingType : initialState.loadingType,
                processing: true,
            };
        case 'HIDE_LOADING':
            return {
                ...state,
                loading: initialState.loading,
                loadingCode: initialState.loadingCode,
                loadingMsg: initialState.loadingMsg,
                loadingPassive: initialState.loadingPassive,
                loadingScope: initialState.loadingScope,
                loadingType: initialState.loadingType,
                processing: false,
            };
        case 'TOAST':
            return {
                ...state,
                toast: true,
                toastMsg: action.toastMsg,
            };
        case 'CLEAR_TOAST':
            return {
                ...state,
                toast: false,
                toastMsg: initialState.toastMsg,
            };
        case 'PROCESSING':
            return {
                ...state,
                processing: true,
            };
        case 'PROCESSED':
            return {
                ...state,
                processing: initialState.processing,
            };
        case 'RESET_PASSAGE':
            return initialState;
        default:
            return state;
    }
};

module.exports = {
    //Actions
    error,
    clearError,
    showLoading,
    hideLoading,
    resetLoading,
    resetPassage,
    toast,
    processing,
    processed,
    //Reducer
    passageReducer,
};
