import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

interface ParallaxScrollViewProps {
  headerImage?: React.ReactNode;
  headerBackgroundColor?: { light?: string; dark?: string };
  children?: React.ReactNode;
}

export default function ParallaxScrollView({
  headerImage,
  headerBackgroundColor,
  children,
}: ParallaxScrollViewProps) {
  return (
    <ScrollView style={styles.container}>
      {headerImage && <>{headerImage}</>}
      <>{children}</>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
