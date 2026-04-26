import { useEffect, useRef } from 'react';

const useAutoScroll = (dependencies) => {
  const ref = useRef(null);
  const shouldAutoScroll = useRef(true);

  useEffect(() => {
    const element = ref.current;

    const handleScroll = () => {
      const isAtBottom =
        element.scrollHeight - element.scrollTop <= element.clientHeight + 50;

      shouldAutoScroll.current = isAtBottom;
    };

    element.addEventListener('scroll', handleScroll);

    return () => element.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (ref.current && shouldAutoScroll.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, dependencies);

  return ref;
};

export default useAutoScroll;
