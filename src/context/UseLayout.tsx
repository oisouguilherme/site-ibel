import {
    useContext,
    createContext,
    useState,
    Suspense,
} from 'react';
import { Outlet } from 'react-router-dom';
import LoadingComponent from '@/components/Loading/Loading';

interface LayoutProps {

    fullLoading: boolean;
    setFullLoading: (value: boolean) => void;

}

const layoutContext = createContext({} as LayoutProps);

export const useLayout = (): LayoutProps => {
    return useContext(layoutContext);
};

function useProvideLayout(): LayoutProps {
    const [fullLoading, setFullLoading] = useState(false);

    return {
        fullLoading,
        setFullLoading,
    }
}
const ProvideLayout: any = () => {
    const layout: LayoutProps = useProvideLayout();
    return (
        <layoutContext.Provider value={layout}>
            <Suspense fallback={<LoadingComponent />}>
                <Outlet />
            </Suspense>
        </layoutContext.Provider>
    );
};

export default ProvideLayout;