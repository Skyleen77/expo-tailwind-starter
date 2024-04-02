/// <reference types="nativewind/types" />

declare module 'expo-router' {
  interface LinkProps<T> extends OriginalLinkProps {
    href: string;
  }
}
