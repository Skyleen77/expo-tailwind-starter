import '../global.css';

import { Slot } from 'expo-router';

import { AppProvider } from '@/context/AppContext';

export default function Layout() {
  return (
    <AppProvider>
      <Slot />
    </AppProvider>
  );
}
