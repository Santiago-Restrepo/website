const isHopefullyDomEnvironment =
typeof window !== 'undefined' &&
typeof window.document !== 'undefined' &&
typeof window.document.createElement !== 'undefined'

export const useIsomorphicLayoutEffect = isHopefullyDomEnvironment
? useLayoutEffect
: useEffect