import type { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { Pressable, StyleSheet } from 'react-native';

type HapticTabProps = BottomTabBarButtonProps;

export function HapticTab(props: HapticTabProps) {
  const { onPress, onLongPress, accessibilityState, children, style } = props;

  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      accessibilityState={accessibilityState}
      style={style}
    >
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
});
