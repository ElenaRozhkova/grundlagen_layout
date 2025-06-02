import { useState, useEffect } from 'react';

export default function useMediaQuery(query) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        const listener = (e) => setMatches(e.matches);

        setMatches(media.matches);
        media.addListener(listener);

        return () => media.removeListener(listener);
    }, [query]);

    return matches;
}
