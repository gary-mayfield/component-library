import React from 'react';
import './Hooks.scss';

export default {
    title: 'ComponentLibrary/Hook Library',
};

export const UseFetch = () => (
    <div className="hooks">
        <h1>UseFetch</h1>
        <figure>
            <figcaption>useFetch.ts</figcaption>
            <pre>
                <code className="language-css">{`
                    import { useState, useEffect, useRef } from "react";

                    interface Cache<T> {
                    [url: string]: T;
                    }

                    export default function useFetch<T>(url: string, init: RequestInit): [T, boolean] {
                    const cache = useRef<Cache<T>>({});
                    const [data, setData] = useState<T>();
                    const [loading, setLoading] = useState(true);

                    async function FetchURL() {
                        if (cache.current[url]) {
                        const data = cache.current[url];
                        setData(data);
                        } else {
                        await fetch(url, init)
                            .then((res) => {
                            return res.status === 404 || res.status === 400 ? null : res.json();
                            })
                            .then((res) => {
                            setData(res);
                            setLoading(false);
                            cache.current[url] = res;
                            })
                            .catch((error) => {
                            console.error("Fetch to api failed", error);
                            });
                        }
                    }
                    useEffect(() => {
                        FetchURL();
                    }, [url]);

                    return [data as T, loading];
                    }
            
          `}</code>
            </pre>
        </figure>
    </div>
);

export const UseToggle = () => (
    <div className="hooks">
        <h1>UseToggle</h1>
        <figure>
            <figcaption>useToggle.ts</figcaption>
            <pre>
                <code className="language-css">{`
                    import { useCallback, useState } from "react";

                    const useToggle = (initialState = false) => {
                        const [state, setState] = useState(initialState);

                        const toggle = useCallback(() => setState(state => !state), []);
                        return [state, toggle]
                    }

                    export default useToggle;
            
          `}</code>
            </pre>
        </figure>
    </div>
);

export const UseMedia = () => (
    <div className="hooks">
        <h1>UseMedia</h1>
        <figure>
            <figcaption>useMedia.ts</figcaption>
            <pre>
                <code className="language-css">{`
                    import { useEffect, useState } from "react";

                    export default function useMedia(queries: string[], values: number[], defaultValue: number){
                        const mediaQueryLists = queries.map((q) => window.matchMedia(q));

                        const getValue = () => {
                            const index = mediaQueryLists.findIndex((mql) => mql.matches);
                            return typeof values[index] !== 'undefined' ? values[index] : defaultValue;
                        };

                        const [value, setValue] = useState(getValue);

                        useEffect(() => {
                            const handler = () => setValue(getValue);
                            mediaQueryLists.forEach((mql) => mql.addEventListener('change', handler));

                            return () => mediaQueryLists.forEach((mql) => mql.removeEventListener('change', handler));
                        }, []);

                        return value;
                    }
          `}</code>
            </pre>
        </figure>
    </div>
);