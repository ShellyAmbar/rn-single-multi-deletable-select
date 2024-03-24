import { StyleSheet } from 'react-native';

export const createStyle = (size: number, isVertical: boolean) => {
  return StyleSheet.create({
    container: {
      ...(isVertical
        ? {
            height: size,
            width: '100%',
          }
        : { width: size, height: '100%' }),

      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};
