import { MutableRefObject, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { CreateIProRequest, IPro } from '../containers/ApplyForm/types';
import { Routes } from '../routes';
import firebase from '../services/firebase';
import { Category, CoreCategory } from '../types/api';
import { Blog } from '../types/blog';

export const useActiveMenuNavigation = () => {
    const [active, setActive] = useState(Routes.allIPros);
    const history = useHistory();
    useEffect(() => {
        history.listen((location) => {
            switch (`${location.pathname}`) {
                case Routes.about.link:
                    setActive(Routes.about);
                    break;
                case Routes.howItWorks.link:
                    setActive(Routes.howItWorks);
                    break;
                case Routes.singleBlog.link:
                case Routes.blog.link:
                    setActive(Routes.blog);
                    break;
                case Routes.singleIPro.link:
                case Routes.allIPros.link:
                    setActive(Routes.allIPros);
                    break;
                default:
                    setActive(Routes.allIPros);
            }
        });
    }, [history]);
    return active;
};
export const useWindowSize = () => {
    const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
    useLayoutEffect(() => {
        function updateSize() {
            const width = window.innerWidth;
            const height = window.innerHeight;
            setSize([width, height]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
};
export function usePrevious<T>(value: T): T {
    const ref = useRef<T>();
    useEffect(() => {
        ref.current = value;
    }, [value]);
    return ref.current;
}

export function useOutsideClick(ref: MutableRefObject<any>, action: () => void): void {
    useEffect(() => {
        const handleClickOutside = (event: Event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                action();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [ref, action]);
}
interface useEscapeKeyParams {
    callback: () => void;
    dependency: any;
}

export function useEscapeKey({ callback, dependency }: useEscapeKeyParams): void {
    useEffect(() => {
        if (dependency) {
            const listener = (event: KeyboardEvent) => {
                if (event.key === 'Escape' || event.key === 'Esc' || event.keyCode === 27) {
                    callback();
                    document.removeEventListener('keydown', listener);
                }
            };
            document.addEventListener('keydown', listener);
            return () => document.removeEventListener('keydown', listener);
        }
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        return () => {};
    }, [callback, dependency]);
}

export const useCategoriesCore = () => {
    const [categories, setCategories] = useState<CoreCategory[]>([]);
    useEffect(() => {
        async function fetchData() {
            const response = await firebase.getCategories();
            setCategories(Object.values(response));
        }
        fetchData();
    }, []);
    return categories;
};
export const useTypePerCategory = (category: string) => {
    const options = useCategoriesCore().find((c) => c.id === category);
    return options?.types && Object.values(options?.types);
};
export const useCategories = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const intervalRef = useRef(null);
    useEffect(() => {
        async function fetchData() {
            const responses = await Promise.all([firebase.getCategories(), firebase.getIPros()]);
            const _categories: CoreCategory[] = Object.values(responses[0]);
            const _ipros: CreateIProRequest[] = Object.values(responses[1]);
            const accumulator = _ipros
                .filter((p) => p.isActive)
                .reduce((acc, pro) => {
                    acc[pro.category] = acc[pro.category] ? acc[pro.category] + 1 : 1;
                    return acc;
                }, {});
            setCategories(
                _categories.map((cat) => ({
                    ...cat,
                    prosCount: accumulator[cat.id] ?? 0
                }))
            );
        }
        fetchData();
        const id = setInterval(() => fetchData(), 10000);
        intervalRef.current = id;
        return () => clearInterval(intervalRef.current);
    }, []);
    return categories;
};
export const useIPros = () => {
    const [ipros, setIPros] = useState<IPro[]>(null);
    useEffect(() => {
        async function fetchData() {
            const response = await firebase.getIPros();
            const data: CreateIProRequest[] = Object.values(response);
            setIPros(
                data
                    .filter((p) => p.isActive)
                    .map((pro) => {
                        const reviews = (pro.reviews && Object.values(pro.reviews)) ?? [];
                        const socialMedia =
                            (pro.socialMedia && Object.values(pro.socialMedia)) ?? [];
                        const onLinePresence =
                            (pro.onLinePresence && Object.values(pro.onLinePresence)) ?? [];
                        return {
                            ...pro,
                            reviews,
                            socialMedia,
                            onLinePresence
                        };
                    })
            );
        }
        fetchData();
    }, []);
    return ipros;
};
export const useBlogs = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    useEffect(() => {
        async function fetchData() {
            const response = await firebase.getBlogs();
            const res = Object.values(response).map((tmp) => ({
                ...tmp,
                texts: (tmp.texts && Object.values(tmp.texts)) ?? [],
                images: (tmp.images && Object.values(tmp.images)) ?? []
            }));
            setBlogs(Object.values(res));
        }
        fetchData();
    }, []);
    return blogs;
};
export const useUser = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        let listener = firebase.auth.onAuthStateChanged((userAuth) => setUser(userAuth));
        return () => {
            listener = undefined;
        };
    }, []);
    return user;
};
