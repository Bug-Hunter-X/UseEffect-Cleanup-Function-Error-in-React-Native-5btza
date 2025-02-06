import React, { useState, useEffect, useRef } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const mounted = useRef(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (mounted.current) {
        setCount((prevCount) => prevCount + 1);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
      mounted.current = false; // ensures that cleanup does not cause error
    };
  }, []);

  return (
    <View>
      <Text>{count}</Text>
    </View>
  );
};
export default MyComponent;