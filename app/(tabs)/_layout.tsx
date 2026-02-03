import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: (props) => <HapticTab {...props} />,
        tabBarStyle: {
          backgroundColor: '#CFE1B9',
        },
        sceneStyle: {
          backgroundColor: '#E9F5DB',
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{ title: 'Home' }}
      />
      <Tabs.Screen
        name="Multiplicacion"
        options={{ title: 'Multiplicacion' }}
      />
      <Tabs.Screen
        name="Sumador"
        options={{ title: 'Sumador' }}
      />
      <Tabs.Screen
        name="Traductor"
        options={{ title: 'Traductor' }}
      />
      <Tabs.Screen
        name="Experiencia"
        options={{ title: 'Experiencia' }}
      />
    </Tabs>
  );
}
